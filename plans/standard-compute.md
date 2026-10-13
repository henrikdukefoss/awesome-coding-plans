---
title: "Standard Compute"
price: "$19/mo"
type: "Paid"
priceRange: "Mid"
quotaModel: "Credits"
bestForTags: ["solo", "heavy", "agent", "api"]
modelAccess: "Frontier"
flags: ["open-source"]
updated: "2026-10-13"
website: "https://standardcompute.com/coding-subscription"
models: "Frontier + open via smart routing (Claude Opus/Sonnet 5.5, GPT-6 Astra/Luna, GPT-5.6 Sol, Gemini, DeepSeek, Qwen, Kimi, GLM, MiniMax)"
quota: "$19/$39/$89/$249 per mo individual; $20/$41/$95/$269 monthly compute budget; stops at budget, no overage"
bestFor: "Heavy agent users who want one fixed monthly bill across frontier and open models"
---

# Standard compute


**Website:** [standardcompute.com](https://standardcompute.com/coding-subscription)

Flat-rate subscription with access to frontier and open models via smart routing. No token meter, no session windows. Each plan has a fixed monthly compute budget in USD; requests run at full speed until it is used, then stop until renewal or an upgrade.

### Models (smart-routed)

| Category | Models |
|----------|--------|
| **Frontier** | Claude Opus 5.5, Claude Sonnet 5.5, GPT-6 Astra, GPT-5.6 Sol, Gemini 3.1 Pro |
| **Efficient** | GPT-6 Luna, Claude Haiku 5.5, Gemini 3.8 Flash, DeepSeek V4.1 Flash, GLM 5.3 Flash |
| **Open** | GLM 5.3, Kimi K3, MiniMax M3, DeepSeek V4 Pro, Qwen 3.8 27B |

### Plans

| Tier | Price | Compute Budget | Notes |
|------|-------|----------------|-------|
| **Starter** | $19/mo | $20/mo ($30 first month) | Entry tier, one agent at a time, 1 API key |
| **Economy** | $39/mo | $41/mo ($61 first month) | Parallel agents |
| **Standard** | $89/mo | $95/mo ($142 first month) | Priority lane |
| **Pro** | $249/mo | $269/mo ($403 first month) | Highest priority scheduling |
| **Pro Plus** (business) | $499/mo | $549/mo | Unlimited API keys; Growth $999 and Scale $2,499 above it |

### Key Features
- **No token meter** — fixed monthly compute budget, shown live in the dashboard
- **No 5-hour windows, no weekly caps**
- **Stops at budget, no overage** — requests return HTTP 402 until renewal or an upgrade (smart pacing was retired on Oct 8, 2026)
- **Smart routing** — picks a model per request, or pin up to five models
- **OpenAI- and Anthropic-compatible API** — `https://api.stdcmpt.com/v1`; Claude Code via `/v1/messages`, Codex via `/v1/responses`, OpenCode via models.dev
- **Europe/US inference region rules** per key, team or company
- **7-day fair refund** — cancel in first week, pay only for compute used
- **$0.25 trial compute** for eligible new accounts, no card needed

---
