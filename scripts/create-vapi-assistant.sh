#!/usr/bin/env bash
# Create the Palm Beach Skate Zone (Ashley) assistant in Vapi via API.
# Requires: VAPI_API_KEY env var or vapi login
# Usage: ./scripts/create-vapi-assistant.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
CONFIG_FILE="$PROJECT_ROOT/vapi-assistant-palm-beach.json"

if [[ ! -f "$CONFIG_FILE" ]]; then
  echo "Error: Config file not found: $CONFIG_FILE"
  exit 1
fi

# Use VAPI_API_KEY from env, or from vapi config
API_KEY="${VAPI_API_KEY:-}"
if [[ -z "$API_KEY" ]] && [[ -f "$HOME/.vapi-cli.yaml" ]]; then
  API_KEY=$(grep -E '^api_key:' "$HOME/.vapi-cli.yaml" 2>/dev/null | sed 's/api_key:[[:space:]]*//' | tr -d '"' || true)
fi

if [[ -z "$API_KEY" ]]; then
  echo "Error: VAPI_API_KEY not set."
  echo "  Option 1: Run 'vapi login' then add api_key to ~/.vapi-cli.yaml"
  echo "  Option 2: Get API key from https://dashboard.vapi.ai and run:"
  echo "            export VAPI_API_KEY=your-key"
  exit 1
fi

echo "Creating Ashley - Palm Beach Skate Zone assistant in Vapi..."
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "https://api.vapi.ai/assistant" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d @"$CONFIG_FILE")

HTTP_BODY=$(echo "$RESPONSE" | head -n -1)
HTTP_CODE=$(echo "$RESPONSE" | tail -n 1)

if [[ "$HTTP_CODE" != "201" ]]; then
  echo "Error: Vapi API returned HTTP $HTTP_CODE"
  echo "$HTTP_BODY" | jq . 2>/dev/null || echo "$HTTP_BODY"
  exit 1
fi

ASSISTANT_ID=$(echo "$HTTP_BODY" | jq -r '.id')
echo ""
echo "✓ Assistant created successfully!"
echo ""
echo "Assistant ID: $ASSISTANT_ID"
echo ""
echo "Next steps:"
echo "  1. Add to .env: REACT_APP_VAPI_ASSISTANT_ID=$ASSISTANT_ID"
echo "  2. View in dashboard: https://dashboard.vapi.ai"
echo "  3. (Optional) Add Bond API tools via dashboard → Assistants → Tools"
echo ""
