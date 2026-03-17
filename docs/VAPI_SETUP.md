# Vapi Setup — Palm Beach Skate Zone (Ashley)

This guide sets up the Ashley front desk assistant in Vapi, mirroring the ElevenLabs configuration in the PRD.

## Prerequisites

- [Vapi CLI installed](https://docs.vapi.ai/cli) (`curl -sSL https://vapi.ai/install.sh | bash`)
- Vapi account ([dashboard.vapi.ai](https://dashboard.vapi.ai))
- API key from Dashboard → Settings → API Keys

## Quick Start

### 1. Authenticate

```bash
vapi login
```

Or set your API key:

```bash
export VAPI_API_KEY=your-api-key-from-dashboard
```

### 2. Create the Assistant

```bash
./scripts/create-vapi-assistant.sh
```

This creates the **Ashley - Palm Beach Skate Zone** assistant with:

- Full system prompt (conversation style, knowledge base, transfers, guardrails)
- First message: "Hi, thanks for calling Palm Beach Skate Zone, this is Ashley. How can I help you?"
- Dynamic date/time for Lake Worth, FL (Eastern) via `{{ "now" | date: "...", "America/New_York" }}`
- Voice: ElevenLabs (rachel)
- Transcriber: Deepgram nova-2

### 3. Configure Your App

Add the returned Assistant ID to `.env`:

```
REACT_APP_VAPI_PUBLIC_KEY=your_public_key
REACT_APP_VAPI_ASSISTANT_ID=<assistant-id-from-script>
```

### 4. View in Dashboard

The assistant appears at [dashboard.vapi.ai](https://dashboard.vapi.ai) → Assistants.

## Adding Bond API Tools (Phase 2)

The project includes function tools that mirror the ElevenLabs Bond API setup. Vapi sends tool calls to your webhook; the webhook proxies to Bond APIs and returns results.

### 1. Deploy the webhook

The app includes `src/app/api/vapi/tool-calls/route.ts`, which handles `getFacilitySchedule`, `searchPrograms`, and `getSessionEvents`. Deploy your app (e.g. Vercel) so the webhook is publicly reachable.

**Local dev:** Use [ngrok](https://ngrok.com) to expose your dev server:

```bash
ngrok http 3000
# Use the https URL, e.g. https://abc123.ngrok.io
```

### 2. Set environment variables

- **BOND_API_KEY** — Bond API key (X-Api-Key). Set in your deployment (Vercel → Settings → Environment Variables).
- **VAPI_WEBHOOK_URL** — Full URL to the tool-calls endpoint, e.g. `https://your-app.vercel.app/api/vapi/tool-calls` or `https://abc123.ngrok.io/api/vapi/tool-calls` for local dev.

### 3. Create tools and attach to assistant

```bash
export VAPI_WEBHOOK_URL=https://your-app.vercel.app/api/vapi/tool-calls
export VAPI_ASSISTANT_ID=asst_xxx   # from create-vapi-assistant.sh
./scripts/create-vapi-tools.sh
```

This creates three tools and updates the assistant with `toolIds`.

### Tools created

| Tool | Bond endpoint | Purpose |
|------|---------------|---------|
| `getFacilitySchedule` | `GET /v4/facilities/42/programs-schedule` | Schedule for today, tomorrow, or a date window |
| `searchPrograms` | `GET /v1/organization/90/programs` | Catalog, pricing, age-range, registration |
| `getSessionEvents` | `GET /v1/.../programs/{id}/sessions/{id}/events` | Event-level calendar for a specific session |

Store `BOND_API_KEY` in your app env; never expose it in prompts or client code.

## Files

| File | Purpose |
|------|---------|
| `vapi-assistant-palm-beach.json` | Assistant config (prompt, voice, transcriber) |
| `vapi-tools/*.json` | Tool configs (function schema, server URL) |
| `scripts/create-vapi-assistant.sh` | Creates assistant via Vapi API |
| `scripts/create-vapi-tools.sh` | Creates tools and attaches to assistant |
| `src/app/api/vapi/tool-calls/route.ts` | Webhook handler that proxies to Bond API |

## Troubleshooting

- **401 Unauthorized**: Check `VAPI_API_KEY` or run `vapi login`
- **jq not found**: Install jq (`brew install jq`) or modify the script to parse JSON manually
- **Voice/model errors**: Adjust `voice.voiceId` or `model.model` in the JSON config
