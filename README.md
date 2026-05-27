# Tenedor Labs

> *Fork it. Build something better.*

Personal app studio building human-driven software for the moments that matter.
The name is a triple play — *tenedor* is Spanish for fork, a nod to forking repos,
and a metaphor for the forks in the road that good software helps you navigate.

**Live site → [tenedorlabs.dev](https://tenedorlabs.dev)**

---

## What's Being Built

### Arruga
A human-centered app currently in development.
Details coming when it's ready to be seen.

---

## This Repo

The public-facing site for Tenedor Labs — a single-file landing page
built intentionally without a framework or build pipeline.

### Stack
| Thing | Choice | Why |
|---|---|---|
| Markup | HTML5 | No build step, loads instantly |
| Fonts | Google Fonts (Syne, Instrument Serif, Share Tech Mono) | Character without bloat |
| Hosting | GitHub Pages | Free, reliable, deploys on push |
| Domain | Porkbun → `tenedorlabs.dev` | `.dev` enforces HTTPS, clean signal |
| SSL | Let's Encrypt via GitHub | Automatic, free |

### Design Decisions
The page moves through three deliberate zones as you scroll:

- **Hero** — clean and modern, the studio's name and voice
- **Construction tape** — the honest divider, signals work in progress without apologizing for it
- **Terminal** — developer-native aesthetic, animated build log that tells the story

No frameworks were harmed in the making of this page.

### Local Development
```bash
# No install, no build step required
open index.html

# Or serve locally
python -m http.server 8000
```

---

## Background

Tenedor Labs started as notes in 2023 — ideas for software built around
real human needs rather than engagement metrics. The studio name and domain
came together in 2025. The work is ongoing.

---

## License

MIT — see [LICENSE](LICENSE)

*© 2025 Tenedor Labs*