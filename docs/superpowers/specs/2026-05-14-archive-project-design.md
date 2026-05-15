# Archive Project: Design

**Date:** 2026-05-14
**Goal:** Prep `sergey-nazarov-dating-simulator` for archival: prune unused, remove chainlink CRE, host as free static site on Cloudflare Workers, squash git history, archive GitHub repo.

## Six tasks (per original ask)

1. Scan for leaked/hardcoded secrets in git history
2. Remove chainlink CRE logic and components (scope: option C — all CRE/AI-runtime code)
3. Find free static hosting w/ custom domain + DNS migration plan
4. Zip unused assets into local `asset-archive/` (gitignored)
5. Remove `adoll`/`ad0ll`/`neilei` content references (git author preserved per user)
6. Squash all commits since inception into one

## Key findings from research

- **Secret leak:** NovelAI key `pst-owfUZ1LK...` was hardcoded in `tools/generate_images.py` in commit `983301b`, removed in `13a0cc2`. User to rotate independently. Squash purges from new history.
- **Personal refs:** Zero matches for `adoll`/`ad0ll`/`neilei` in file content (tracked or untracked). Only in git commit metadata (squash drops it) and remote URL (user keeps).
- **Live-asset miss caught during verification:** `style/main.css` references `tools/brand_logos/chainlink_logo.png`. Must be moved to `assets/ui/` before `tools/` is archived.
- **Hosting choice:** Cloudflare Workers Static Assets (not Pages — Pages is feature-frozen in 2026, Cloudflare directs new projects to Workers). Free tier: unlimited bandwidth, free SSL, free custom domain, 25 MiB per-file limit, 20k files. Project measures 151 files, 11 MB largest, 112 MB total — comfortable headroom.
- **Game is pure static after option C:** zero fetch/XHR/WebSocket in our code; only LocalStorage; no service-worker registration; no dynamic asset paths.

## File operations summary

### DELETE outright

`engine/electron/`, `engine/nginx/` (archived first), `package.json`, `bun.lock`, `yarn.lock`, `.htaccess` (archived first), `service-worker.js`, `assets/fonts/`, `assets/gallery/`, `assets/videos/`, `.worktrees/`, root `git` 0-byte file, all `.DS_Store`, stash `stash@{0}`.

### ARCHIVE (into `asset-archive/<two zips>`)

Zip 1 — `unused-source-and-drafts-<DATE>.zip`:
- `tools/` (1.2 GB AI-gen toolchain), minus `tools/brand_logos/chainlink_logo.png` (moved to assets/ui/)
- `assets/characters/sergey-archive/` (8 backup sprites)
- `assets/music/downloads/` (raw source mp3s/zips)
- 4 registered-but-never-played music tracks + cg_13_aftermath.png
- 2 not-registered music tracks
- Electron-build-only icons (icon.icns, icon.ico, 512x512.png)
- `.htaccess` + `engine/error/*.html` (apache config)
- `engine/nginx/` (hetzner VPS configs)
- Misc: 2026-03-09_19-41-13.jpg, empty `git` file, .DS_Stores

Zip 2 — `chainlink-cre-and-runtime-<DATE>.zip`:
- `cre/` (full CRE workflow tree)
- `server.js`
- `js/epilogue-regenerator.js`
- `EPILOGUE_GENERATION_CONTEXT.md`
- `openclaw-skill/`

### MOVE

- `tools/brand_logos/chainlink_logo.png` → `assets/ui/chainlink_logo.png`

### EDIT in-place

- `js/script.js` — remove unused music entries (`happy`, `cheerful`, `warm`, `melancholy_transition`) and `cg_13_aftermath` image entry
- `style/main.css` — update `../tools/brand_logos/chainlink_logo.png` → `../assets/ui/chainlink_logo.png`
- `index.html` — remove `<script src="./js/epilogue-regenerator.js">`, strip `http://localhost:3001` from CSP
- `README.MD` — see Section 6 final version
- `.gitignore` — add `asset-archive/`, remove stale `cre/.env` etc.
- `manifest.json` — `short_name`/`name` to game title

### ADD

- `wrangler.jsonc` (CF Workers config, SPA fallback)
- `.assetsignore` (excludes git, archive, lore docs from deploy)
- `_headers` (security headers)

## Deploy & DNS sequence

1. **Local verify** — `python3 -m http.server 8080`, walk through game
2. **CF deploy** — `wrangler deploy` against pure static tree
3. **CF zone add** — adds `sergey-nazarov-dating-sim.com` to CF, returns nameserver pair
4. **User updates Namecheap** nameservers to CF pair
5. **Poll for zone Active**, then attach custom domain to worker
6. **Verify production URL**

## Squash & push

- Orphan branch → stage tree → commit with author `neilei <neilei.dev>` → replace `main` → `git push --force-with-lease origin main`
- Commit message includes `sergey-nazarov-dating-sim.com` live link and the workers.dev permaurl (finalized after deploy)

## Archive

- `gh repo archive neilei/sergey-nazarov-dating-simulator --yes`

## Open items handled outside this spec

- User rotates the leaked NovelAI key independently
- User executes the Namecheap nameserver change step (DNS migration #4)

## Failure modes & rollback

- CF deploy fails → no DNS touched, nothing to roll back
- Zone add fails → delete zone via API
- Namecheap propagation fails → user reverts nameservers (captured before change)
- Custom domain attach fails → workers.dev URL still works as backup

## Confirmation checkpoints

1. After local file ops + serve verification → pause before squash
2. After squash → pause before force-push
3. After CF deploy succeeds → pause before zone add
4. Before custom-domain attach (after nameservers updated)
5. Before `gh repo archive`
