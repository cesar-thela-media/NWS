# NWS Landing Site

PRD-driven Next.js landing page implementation with strict visual parity requirements.

## Stack

- Next.js App Router
- TypeScript
- Bun
- Docker / Docker Compose

## Run locally

From `landing-site/`:

```bash
bun install
bun run dev
```

Open `http://localhost:3000`.

## Production build

```bash
bun run lint
bun run typecheck
bun run build
bun run start
```

## Visual parity checks

Minimum 95% gate:

```bash
bun run parity:check
```

Strict 99% gate:

```bash
bun run parity:strict
```

Diff artifacts and parity report are written to `artifacts/`.

## Docker

```bash
docker compose up --build
```

Health endpoint:

`GET /api/health`

## Notes

- Reference assets live in `public/reference/`.
- Source references are in `../section-by-section/`.
- Asset licensing records are tracked in `ASSET-LICENSES.md`.
