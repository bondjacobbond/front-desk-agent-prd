---
name: elevenlabs-webhook-schema
description: Reference for ElevenLabs webhook query_params_schema validation quirks. Use when building or debugging ElevenLabs webhook tools, especially errors around required standard fields, mutually exclusive value sources, blank placeholder fields, and boolean constants in query params.
---

# ElevenLabs Webhook Schema

## Quick Start

Use this pattern for every ElevenLabs webhook query param object:

- Always include the standard fields: `id`, `type`, `value_type`, `description`, `dynamic_variable`, `constant_value`, `enum`, `is_system_provided`, and `required`.
- Only one value source should be meaningfully populated: `description`, `dynamic_variable`, `is_system_provided`, or `constant_value`.
- Leave inactive source fields present but neutral, usually as `""`.
- For boolean-like query param constants, prefer `type: "string"` with `"true"` or `"false"` instead of raw boolean constants.

## Validator Rules

### 1. Full object shape is expected

Even inactive fields still need to exist. Minimal param objects tend to fail validation.

### 2. Value sources are mutually exclusive

ElevenLabs appears to treat these as competing sources of truth:

- `description`
- `dynamic_variable`
- `is_system_provided`
- `constant_value`

Only one of them should contain a meaningful value.

### 3. Inactive fields must be blank, not removed

The validator wants inactive fields to stay present, but meaningful values in multiple source fields trigger exclusivity errors.

### 4. Boolean `false` is unreliable as a constant query value

For query params, raw `false` may be treated as empty or unset. Use string constants instead:

- `"false"` instead of `false`
- `"true"` instead of `true`

### 5. `required` should match real conversational behavior

If the model only needs a field sometimes, mark it `required: false` so it does not invent values during broad browsing requests.

## Working Patterns

### LLM prompt field

```json
{
  "id": "search",
  "type": "string",
  "value_type": "llm_prompt",
  "description": "Keyword from the caller.",
  "dynamic_variable": "",
  "constant_value": "",
  "enum": null,
  "is_system_provided": false,
  "required": true
}
```

### Constant field

```json
{
  "id": "expand",
  "type": "string",
  "value_type": "constant",
  "description": "",
  "dynamic_variable": "",
  "constant_value": "sessions,sessions.products,sessions.products.prices",
  "enum": null,
  "is_system_provided": false,
  "required": true
}
```

### Boolean-like constant query field

```json
{
  "id": "includePast",
  "type": "string",
  "value_type": "constant",
  "description": "",
  "dynamic_variable": "",
  "constant_value": "false",
  "enum": null,
  "is_system_provided": false,
  "required": true
}
```

## Checklist

- Include the full standard field set on every query param object.
- Populate only one active source field.
- Keep inactive source fields blank.
- Use string constants for boolean-like query params.
- Set `required: false` for fields the caller may omit, especially optional dates.

## Use Cases

Use this skill when:

- ElevenLabs says `dynamic_variable`, `description`, or `constant_value` is required.
- ElevenLabs says only one of `description`, `dynamic_variable`, `is_system_provided`, or `constant_value` can be set.
- A raw boolean constant like `false` fails validation.
- You are authoring new ElevenLabs webhook tools and want the safest query param schema pattern.
