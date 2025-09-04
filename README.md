# AI Helpdesk RAG

> Ask questions about our docs and policies and get grounded answers with [1]-style citations.

## Live Demo
_(link will go here after deployment)_

## Screenshot / GIF
_(drop an image or GIF here)_

## Run Locally
- `cp .env.example .env.local` and fill values
- `npm install`
- `npm run dev`

### Env Vars
- `OPENAI_API_KEY=...`
- `DATABASE_URL=...`

## Architecture
_(diagram image will go here)_

## Metrics (placeholder)
| Metric | Value |
|---|---|
| p50 latency | TBA |
| p95 latency | TBA |
| Eval pass rate | TBA |
| Cost / 100 calls | TBA |

## Roadmap
- [ ] Week 1: basic ingestion + /api/ask round-trip
- [ ] Week 2: evals + prompt hardening
- [ ] Week 3: deploy + auth + observability
- [ ] Week 4: feedback loops + caching
