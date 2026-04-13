# Grow Nostr Initiative

The website for the **Grow Nostr Initiative (GNI)** — a community organization dedicated to promoting adoption and understanding of the [Nostr](https://nostr.com) protocol.

**Live site:** [grownostr.org](https://grownostr.org)

## What Is This?

GrowNostr.org is an educational and outreach hub for the Nostr decentralized social protocol. It provides onboarding guides, strategic frameworks for creators and businesses, curated ecosystem resources, case studies, event listings, and information about the GNI team.

### Pages

- **Home** — Mission statement, rotating quotes from notable Nostr supporters, and navigation to all sections
- **Get Started** — Step-by-step onboarding guide for Nostr newcomers (key generation, client selection, finding content)
- **Strategy** — Six strategic frameworks for leveraging Nostr (audience ownership, V4V monetization, sovereign communities, infrastructure control, product integration, team operations)
- **Resources** — Curated directory of Nostr ecosystem tools (clients, signers, relays, wallets, educational resources)
- **Case Studies** — Real-world Nostr adoption stories (Fountain podcast app, Ainsley Costello musician)
- **Events** — GNI event presence with calendar events fetched live from Nostr
- **About** — Team profiles loaded dynamically from Nostr relay metadata
- **Contact** — Contact form that sends encrypted Nostr DMs to GNI
- **Donate** — Bitcoin on-chain and Lightning donation options

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build & dev server)
- **TailwindCSS 3** + **shadcn/ui** (Radix UI primitives)
- **Nostrify** + **nostr-tools** (Nostr protocol integration)
- **TanStack Query** (data fetching & caching)
- **React Router** (client-side routing)
- **Unhead** (SEO meta management)
- **Inter Variable** (typography via Fontsource)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (port 8080)
npm run dev

# Build for production
npm run build

# Run tests (TypeScript, ESLint, Vitest, build)
npm run test
```

## Nostr Integration

The site connects to Nostr relays for live data:

- **Team profiles** — Kind 0 metadata events fetched by pubkey
- **Calendar events** — Kind 31922/31923 events for GNI's event schedule
- **Contact form** — Sends NIP-04 encrypted DMs to GNI's pubkey
- **NIP-19 routing** — Handles `npub1`, `note1`, `nevent1`, `naddr1` identifiers at root-level URLs

Default relay: `wss://relay.ditto.pub`
Preset relays: Primal, Ditto, Damus

## Deployment

Production deploys automatically on push to `main` via GitHub Actions. The workflow builds the project and SCPs the `dist/` directory to the production server.

Required GitHub Secrets: `PROD_HOST`, `PROD_USER`, `PROD_SSH_KEY`, `PROD_PORT`, `PROD_PATH`

## Project Structure

```
src/
  components/    # UI components, auth, Nostr providers
  components/ui/ # shadcn/ui components (48+)
  hooks/         # Custom React hooks (Nostr, wallet, auth, etc.)
  pages/         # Route page components
  contexts/      # React context providers
  lib/           # Utilities and shared logic
  test/          # Test setup and TestApp component
public/          # Static assets and images
docs/            # Implementation documentation
```

## License

All rights reserved.
