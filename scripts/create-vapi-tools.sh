#!/usr/bin/env bash
# Create Bond API tools in Vapi and attach them to the Ashley assistant.
#
# Prerequisites:
#   - Assistant already created (run ./scripts/create-vapi-assistant.sh first)
#   - Public webhook URL for tool-calls (e.g. https://your-app.vercel.app/api/vapi/tool-calls)
#
# Usage:
#   export VAPI_WEBHOOK_URL=https://your-app.vercel.app/api/vapi/tool-calls
#   export VAPI_ASSISTANT_ID=asst_xxx  # from create-vapi-assistant.sh
#   ./scripts/create-vapi-tools.sh
#
# For local dev with ngrok:
#   ngrok http 3000
#   export VAPI_WEBHOOK_URL=https://xxx.ngrok.io/api/vapi/tool-calls

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
TOOLS_DIR="$PROJECT_ROOT/vapi-tools"

# Required env vars
VAPI_WEBHOOK_URL="${VAPI_WEBHOOK_URL:-}"
VAPI_ASSISTANT_ID="${VAPI_ASSISTANT_ID:-}"

# API key
API_KEY="${VAPI_API_KEY:-}"
if [[ -z "$API_KEY" ]] && [[ -f "$HOME/.vapi-cli.yaml" ]]; then
  API_KEY=$(grep -E '^api_key:' "$HOME/.vapi-cli.yaml" 2>/dev/null | sed 's/api_key:[[:space:]]*//' | tr -d '"' || true)
fi

if [[ -z "$API_KEY" ]]; then
  echo "Error: VAPI_API_KEY not set."
  echo "  Run 'vapi login' or export VAPI_API_KEY=your-key"
  exit 1
fi

if [[ -z "$VAPI_WEBHOOK_URL" ]]; then
  echo "Error: VAPI_WEBHOOK_URL not set."
  echo "  Set the public URL for the tool-calls webhook, e.g.:"
  echo "  export VAPI_WEBHOOK_URL=https://your-app.vercel.app/api/vapi/tool-calls"
  exit 1
fi

if [[ -z "$VAPI_ASSISTANT_ID" ]]; then
  echo "Error: VAPI_ASSISTANT_ID not set."
  echo "  Get it from create-vapi-assistant.sh output or the Vapi dashboard."
  echo "  export VAPI_ASSISTANT_ID=asst_xxx"
  exit 1
fi

# Substitute webhook URL in tool configs and create tools
TOOL_IDS=()
for tool_file in "$TOOLS_DIR"/get-facility-schedule.json "$TOOLS_DIR"/search-programs.json "$TOOLS_DIR"/get-session-events.json; do
  if [[ ! -f "$tool_file" ]]; then
    echo "Warning: $tool_file not found, skipping"
    continue
  fi
  tool_json=$(sed "s|VAPI_WEBHOOK_URL_PLACEHOLDER|$VAPI_WEBHOOK_URL|g" "$tool_file")
  tool_name=$(echo "$tool_json" | jq -r '.name')
  echo "Creating tool: $tool_name..."
  RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "https://api.vapi.ai/tool" \
    -H "Authorization: Bearer $API_KEY" \
    -H "Content-Type: application/json" \
    -d "$tool_json")
  HTTP_BODY=$(echo "$RESPONSE" | head -n -1)
  HTTP_CODE=$(echo "$RESPONSE" | tail -n 1)
  if [[ "$HTTP_CODE" != "201" ]]; then
    echo "Error: Vapi API returned HTTP $HTTP_CODE for $tool_name"
    echo "$HTTP_BODY" | jq . 2>/dev/null || echo "$HTTP_BODY"
    exit 1
  fi
  TOOL_ID=$(echo "$HTTP_BODY" | jq -r '.id')
  TOOL_IDS+=("$TOOL_ID")
  echo "  Created: $TOOL_ID"
done

if [[ ${#TOOL_IDS[@]} -eq 0 ]]; then
  echo "No tools created."
  exit 1
fi

# Build toolIds JSON array
TOOL_IDS_JSON=$(printf '%s\n' "${TOOL_IDS[@]}" | jq -R . | jq -s .)

# Update assistant with tools
echo ""
echo "Updating assistant $VAPI_ASSISTANT_ID with ${#TOOL_IDS[@]} tools..."
PATCH_BODY=$(jq -n --argjson ids "$TOOL_IDS_JSON" '{ toolIds: $ids }')
RESPONSE=$(curl -s -w "\n%{http_code}" -X PATCH "https://api.vapi.ai/assistant/$VAPI_ASSISTANT_ID" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d "$PATCH_BODY")
HTTP_BODY=$(echo "$RESPONSE" | head -n -1)
HTTP_CODE=$(echo "$RESPONSE" | tail -n 1)
if [[ "$HTTP_CODE" != "200" ]]; then
  echo "Error: Vapi API returned HTTP $HTTP_CODE when updating assistant"
  echo "$HTTP_BODY" | jq . 2>/dev/null || echo "$HTTP_BODY"
  exit 1
fi

echo ""
echo "✓ Tools created and assistant updated!"
echo ""
echo "Tool IDs:"
for i in "${!TOOL_IDS[@]}"; do
  echo "  - ${TOOL_IDS[$i]}"
done
echo ""
echo "Ensure BOND_API_KEY is set in your app env (Vercel, etc.) for the webhook to work."
