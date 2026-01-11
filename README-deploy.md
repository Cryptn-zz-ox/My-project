Vercel deploy & CI

Required GitHub secrets (set in repository Settings → Secrets):

- `VERCEL_TOKEN` — personal token (read/write) from Vercel.
- `VERCEL_ORG_ID` — your Vercel organization id.
- `VERCEL_PROJECT_ID` — the Vercel project id for this repo.

Workflow behavior:
- `ci.yml` runs on PRs and pushes to `main`.
- On push to `main`, if the three secrets exist, the workflow will build and deploy to Vercel with `--prod`.

Local quick test:
```
npm ci
npm run build
```
