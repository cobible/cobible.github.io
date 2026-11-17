<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# AGENTS.md — CoBible Landing & Guide Site

> **LLM Wiki Context File** (Karpathy Pattern). Provides full technical context in <30 seconds without codebase scanning.

---

## ⚡ Quick Facts

| Item | Details |
|---|---|
| **Project Name** | CoBible Landing & Installation Guide (`cobible.github.io`) |
| **Description** | Official multilingual landing page, installation guide, and download portal for the CoBible app (Android, Windows, macOS, iOS). |
| **Framework & Engine** | React 19 + TanStack Start (v1.168) + Nitro (v3.0 beta) + Vite 8.1 |
| **Hosting & Deploy** | GitHub Pages via static prerendering (`prerender.enabled = true`, output in `.output/public`) |
| **State Management** | TanStack Query v5 (`QueryClient` for releases) + React local state + `localStorage` |
| **Routing** | TanStack Router (`routeTree.gen.ts`, file-based routing: `/` for EN, `/ru` for RU) |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite`) + `tw-animate-css` + OKLCH color space |
| **UI Components** | Radix UI primitives (`Accordion`, etc.) + Lucide React icons + custom accessible components |
| **Database** | None (pure client-side static site with live GitHub Releases API integration) |
| **Languages** | English (default at `/`), Russian (at `/ru`) |
| **Theme System** | Auto-detection (device system theme), persistence in `localStorage`, manual toggle (Light, Dark, System) |
| **Target App Repo** | `https://github.com/antkeepapp/cobible-releases` |

---

## 📂 Architecture Overview

Full tree of `src/` source files with single-line descriptions:

```
src/
├── assets/                          # Asset descriptors (legacy Lovable asset JSONs, replaced by /public images)
│   ├── *.asset.json                 # Metadata records for app screenshots and brand assets
├── components/                      # Application React components
│   ├── ui/                          # Shadcn / Radix UI primitive components
│   │   ├── accordion.tsx            # Radix-based accordion for iOS installation guides
│   │   ├── alert.tsx / alert-dialog.tsx # Modal dialog and alert primitives
│   │   ├── button.tsx               # Reusable styled button with CVA variants
│   │   ├── card.tsx                 # Styled card container
│   │   ├── dropdown-menu.tsx        # Radix-based dropdown primitive
│   │   └── ...                      # Additional headless Radix UI wrappers
│   ├── Landing.tsx                  # Core shared landing page (bilingual, rendered for both / and /ru)
│   ├── SideloadInstructions.tsx     # Expandable iOS installation guide (SideStore + Sideloadly)
│   └── ThemeToggle.tsx              # Pure React theme switcher dropdown (System / Light / Dark)
├── hooks/                           # Custom React hooks
│   └── use-mobile.tsx               # Responsive viewport breakpoint detection hook
├── lib/                             # Core business logic and shared utilities
│   ├── content.ts                   # Single source of truth for all copy, screenshots, and meta in EN and RU
│   ├── error-capture.ts             # SSR error interceptor preserving call stacks across h3/Nitro boundaries
│   ├── error-page.ts                # Catastrophic SSR 500 fallback HTML generator
│   ├── lovable-error-reporting.ts   # Boundary exception logger
│   ├── releases.ts                  # GitHub API release parser and platform asset resolver
│   └── utils.ts                     # Tailwind class merge helper (`cn`) + `trackEvent()` for Microsoft Clarity custom events
├── routes/                          # File-based TanStack routes
│   ├── __root.tsx                   # Root layout: <head>, fonts, CSS, anti-FOUC theme script, Microsoft Clarity script, query client
│   ├── index.tsx                    # English route (`/`)
│   └── ru.tsx                       # Russian route (`/ru`)
├── test/                            # Automated test suite (Vitest + Testing Library)
│   ├── app-routing.test.tsx         # Route tree resolution and root match verification
│   ├── releases.test.ts             # Platform download pattern matching and fallback tests
│   └── setup.ts                     # Test environment bootstrap and DOM matchers
├── router.tsx                       # TanStack Router instance factory with QueryClient context
├── routeTree.gen.ts                 # Automatically generated TanStack Router tree
├── server.ts                        # Nitro / TanStack Start SSR entry wrapper with error recovery
├── start.ts                         # TanStack Start middleware definition (CSRF + error handling)
└── styles.css                       # Tailwind v4 theme, OKLCH design tokens for light and dark modes
```

---

## 💾 Data Models & Schemas

The application has no persistent database. All data structures are strictly typed TypeScript models:

```typescript
// 1. Release API Model (src/lib/releases.ts)
export type DownloadPlatform = "apk" | "windows" | "mac" | "ios";
export type ReleaseAsset = { name: string; browser_download_url: string };
export type Release = {
  tag_name: string;
  draft: boolean;
  prerelease: boolean;
  assets: ReleaseAsset[];
};

// 2. Language & Copy Structure (src/lib/content.ts)
export type Lang = "en" | "ru";
export type ShotKey = "plans" | "home" | "reader" | "qa" | "podcasts" | "book";

// 3. Platform detection (src/lib/content.ts)
// detectPlatform(ua?, maxTouchPoints?) → PlatformId | null
// Priority: Android → "apk", iPhone/iPod/iPad/iPadOS-on-Mac → "ios", macOS → "mac", Windows → "windows", else null
// iPadOS 13+ masquerades as "Macintosh" in Safari — distinguish via navigator.maxTouchPoints > 1
// When a store goes live, change the return value in detectPlatform (e.g. "apk" → "android") to auto-highlight it.

// 4. Theme State (src/components/ThemeToggle.tsx)
export type Theme = "system" | "light" | "dark";
// Storage key: localStorage.getItem("cobible-theme")
```

---

## 🔄 State Management Patterns

1. **Server & Async State (Releases):** Managed via `@tanstack/react-query`.
   - Query key: `["latest-release"]`
   - Cache time: `staleTime: 60_000`, `retry: 1`
   - Hydration gate: gated by `hydrated` state to avoid server/client mismatch.

```typescript
// Standard pattern in src/components/Landing.tsx
const [hydrated, setHydrated] = useState(false);
useEffect(() => setHydrated(true), []);
const release = useQuery({
  queryKey: ["latest-release"],
  queryFn: fetchLatestRelease,
  enabled: hydrated,
  staleTime: 60_000,
  retry: 1,
});
```

2. **Theme State:** Dual-layer hybrid (DOM inline script + React state).
   - In `<head>`: Immediate synchronous IIFE checks `localStorage["cobible-theme"]` or `window.matchMedia("(prefers-color-scheme: dark)")` and applies `.dark` to `<html>`.
   - In `ThemeToggle.tsx`: `theme` ('system' | 'light' | 'dark') and `resolvedTheme` ('light' | 'dark') synchronized with storage and system `change` event.

---

## 🧭 Navigation & Routes

| Route | File | Language | Purpose |
|---|---|---|---|
| `/` | `src/routes/index.tsx` | English (`en`) | Main landing page, English metadata and copy |
| `/ru` | `src/routes/ru.tsx` | Russian (`ru`) | Russian landing page, Russian metadata and copy |
| `/*` | `src/routes/__root.tsx` | Auto | 404 Not Found fallback component |

---

## 🌐 Localization Rules

1. **Single Source of Truth:** All copy for both English and Russian **must** be declared in `src/lib/content.ts` inside `t.en` and `t.ru`.
2. **Never hardcode strings** in `Landing.tsx`, `SideloadInstructions.tsx`, or route files.
3. **Screenshot Rule:** App screenshots must match the page language. `shots` and `verseShots` are keyed per language in `content.ts`. English uses `/en_*.png`, Russian uses `/shot*.png` and `/verse*.png`.

---

## 🎨 Design System & Tokens

Defined in `src/styles.css` using OKLCH color space:

- **Light Mode (`:root`):**
  - `--background`: `oklch(0.975 0.012 80)` (Warm creamy ecru / parchment)
  - `--foreground`: `oklch(0.26 0.05 255)` (Deep warm ink)
  - `--primary`: `oklch(0.64 0.17 30)` (CoBible signature terracotta / coral)
  - `--card`: `oklch(0.955 0.016 78)`
- **Dark Mode (`.dark`):**
  - `--background`: `oklch(0.16 0.012 55)` (Warm charcoal #151413)
  - `--foreground`: `oklch(0.95 0.01 80)` (Soft warm ivory)
  - `--primary`: `oklch(0.66 0.17 32)` (Vibrant warm terracotta)
  - `--card`: `oklch(0.20 0.015 55)` (Elevated dark card)
- **Typography:**
  - Headings: `Fraunces`, Georgia, serif (`--font-display`)
  - Body: `Manrope`, system-ui, sans-serif (`--font-sans`)

---

## 🚀 Key User Flows

### Flow 1: Downloading Latest App Build
1. User visits `https://cobible.github.io/` (or `/ru`).
2. React Query calls GitHub API (`api.github.com/repos/antkeepapp/cobible-releases/releases/latest`).
3. Assets are regex-matched by platform suffix:
   - Android: `/(?:^|[-_])android\.apk$/i`
   - Windows: `/(?:^|[-_])windows(?:[-_]x64)?\.(?:zip|exe|msi)$/i`
   - macOS: `/(?:^|[-_])macos(?:[-_]universal)?\.dmg$/i`
   - iOS: `/(?:^|[-_])ios\.ipa$/i`
4. Direct download button activates with file name and tag name. If API is rate-limited or fails, user gets a button linking to the GitHub releases web page.

### Flow 2: iOS Sideloading (SideStore & Sideloadly)
1. User expands the `iOS · IPA` platform card.
2. Recommended method: **SideStore** (requires computer once via `iloader.app`, then refreshes wirelessly via LocalDevVPN).
3. Fallback method: **Sideloadly** (requires PC/Mac with iTunes/iCloud web builds).
4. Explains 7-day Apple ID certificate renewal and Shortcuts automation.

### Flow 3: Theme Toggle
1. User clicks the Sun/Moon button in the header.
2. Selects Light, Dark, or System.
3. Class `.dark` toggles on `document.documentElement` and choice is stored in `localStorage["cobible-theme"]`.

---

## 🛠️ Environment & Build Commands

- **Node.js:** v22+
- **Install:** `npm install --legacy-peer-deps` (Mandatory: plain `npm install` fails due to peer dependency tree).
- **Development Server:** `npm run dev` (Runs Vite on `http://localhost:8080`).
- **Static Build:** `npm run build` (Builds client, SSR, and prerenders static HTML to `.output/public`).
- **Test:** `npm test` (Runs Vitest unit tests).
- **Format / Lint:** `npm run format`, `npm run lint`.
- **Deployment:** Handled automatically on `git push origin main` via `.github/workflows/deploy.yml`.

---

## 📜 Rules for AI Assistants

1. **NO FORCE PUSH OR REBASE:** Never rewrite published git history (`git push --force`, `rebase`, `commit --amend`). This breaks synchronization with Lovable.
2. **USE `--legacy-peer-deps`:** Always run `npm install --legacy-peer-deps`.
3. **ALL COPY IN `content.ts`:** Never hardcode text strings inside `.tsx` components. Put them in `src/lib/content.ts` in both `en` and `ru`.
4. **LANGUAGE-SPECIFIC SCREENSHOTS:** Never use English screenshots on Russian routes or vice versa.
5. **PHONE FRAMES ARE NEUTRAL:** Phone mockups must always use dark metallic frames (`#18181b`), never `border-foreground` which turns white in dark mode.
6. **CLIENT-ONLY RELEASES:** Do not create a backend for release downloads; keep it a client-side React Query call against GitHub's public API.
7. **PRESERVE STATIC PRERENDER:** Keep `tanstackStart.prerender.enabled = true` in `vite.config.ts`.
8. **AVOID HEAVY RADIX MENU OVERHEAD:** For simple dropdowns in header, use pure React state to prevent multi-instance React conflicts during SSR hydration.
9. **KEEP POWERSHELL COMPATIBILITY:** Use `;` instead of `&&` in shell commands on Windows.
10. **TEST BEFORE PUSH:** Run `npx tsc --noEmit` and `npm test` before pushing to `main`.
11. **PLATFORM DETECTION IS CLIENT-ONLY:** `detectPlatform()` reads `navigator` and must only run inside `useEffect` after hydration. Never call it at the module level or during SSR — it will always return `null` on the server and that is correct.
12. **ANALYTICS EVENTS VIA `trackEvent()`:** All Microsoft Clarity custom events must go through `src/lib/utils.ts → trackEvent(name)`. Do not call `window.clarity()` directly in components.
13. **CLARITY SCRIPT IN `__root.tsx`:** The Microsoft Clarity snippet is in `RootShell` → `<head>`. Do not move it to `<body>` or lazy-load it — placement in `<head>` ensures it fires before first user interaction.

---

## 📋 Decision Log

| Date | Decision | Rationale |
|---|---|---|
| **2026-10-22** | Migrate site from Lovable to standalone GitHub repo | Full control over source code, CI/CD, and custom domain hosting. |
| **2026-11-16** | Enable Static Prerender in TanStack Start | GitHub Pages cannot run Node.js/Cloudflare SSR; prerendering generates static HTML in `.output/public`. |
| **2026-11-16** | Move images from Lovable R2 CDN to `/public/` | Lovable's asset CDN returns 403/404 outside the editor. Storing in `/public` ensures 100% offline and standalone availability. |
| **2026-11-17** | Add SideStore as recommended iOS method | Solves the 7-day expiry issue by allowing iPhone-only refresh via LocalDevVPN without needing a PC each week. |
| **2026-11-17** | Pure React implementation for `ThemeToggle` | Radix DropdownMenu created a duplicate React instance warning during Vite SSR hydration. Pure React is lightweight and reliable. |
| **2026-11-17** | Anti-FOUC inline script in `<head>` | Evaluates theme before first paint to prevent white flash when opening the site in system dark mode. |
| **2026-11-17** | Add Google Play platform card (id `"android"`) | Prepares the UI for future store listing; currently shows "Coming soon" badge, same pattern as App Store. |
| **2026-11-17** | `detectPlatform()` highlights APK for Android, iOS·IPA for iPhone/iPad | Stores are not live yet; we highlight the available direct-install card. When a store goes live, change the return value in `detectPlatform` from `"apk"` → `"android"` or `"ios"` → `"appstore"` as appropriate. |
| **2026-11-17** | Platform detection runs client-side only inside `useEffect` | SSR has no `navigator`; running detection after hydration avoids server/client mismatch and CLS (card order stays fixed). |
| **2026-11-17** | Chose Microsoft Clarity over Google Analytics 4 | Clarity is free with no session/recording limits, includes Vebvizor-style session recordings and heatmaps, and covers all current analytics needs without GA4 overhead. GA4 can be added later if Search Console integration or ad campaigns are needed. |
| **2026-11-17** | Analytics events routed through `trackEvent()` helper in `utils.ts` | Keeps component code clean, provides a safe no-op guard when Clarity script is blocked or not yet loaded, and makes it trivial to swap or add analytics providers in one place. |
| **2026-11-17** | 4-part SideStore guide with LocalDevVPN & Shortcuts | Resolves driver issues (Apple Devices via MS Store), links LocalDevVPN from App Store, cleanly isolates CoBible IPA installation, and provides step-by-step Shortcuts automation with VPN connection for 100% wireless maintenance. |

---

## ⚠️ Known Issues & Gotchas

1. **`npm install` failure:** Bare `npm install` crashes with `Cannot read properties of null (reading 'edgesOut')`. **Fix:** Always use `npm install --legacy-peer-deps`.
2. **GitHub Pages 404 for asset directories:** GitHub Pages uses Jekyll by default, ignoring `_`-prefixed folders. **Fix:** `.output/public/.nojekyll` must be generated during build.
3. **PowerShell `&&` syntax:** Windows PowerShell fails on `&&`. **Fix:** Use `;` to chain commands in PowerShell.
4. **Vite duplicate plugins warning:** `@lovable.dev/vite-tanstack-config` already includes React, Tailwind, and tsconfig-paths. Adding them manually in `vite.config.ts` causes duplicate plugin crashes.
5. **iPadOS 13+ UA collision with macOS:** Modern iPads with Safari send a `Macintosh` User-Agent identical to macOS desktop. **Fix:** `detectPlatform()` distinguishes them via `navigator.maxTouchPoints > 1` — always pass both `ua` and `maxTouchPoints` in tests; never rely on UA alone for iPad detection.
6. **`detectPlatform()` returns `null` on SSR:** `navigator` is undefined on the server. The function guards with `typeof navigator !== "undefined"` and falls back to `""` / `0`. The `detected` state starts as `null` and is set only inside `useEffect`, so the initial SSR HTML never includes a highlighted card — this is intentional to avoid hydration mismatch.

---

## 📊 Current State

### ✅ Working Features
- Bilingual landing page (English at `/`, Russian at `/ru`).
- Dynamic release resolution from `antkeepapp/cobible-releases` with fallback to releases page.
- Comprehensive installation guides for APK, Windows, macOS, and iOS (SideStore & Sideloadly).
- Full Dark Theme support with system preference auto-detection, anti-FOUC script, and manual toggle.
- Automated CI/CD deployment via GitHub Actions to GitHub Pages.
- Responsive mobile layout with touch-friendly navigation.
- **Google Play platform card** — displayed with "Coming soon" badge; steps are pre-written, ready to activate when the store listing goes live.
- **OS-aware platform highlighting** — `detectPlatform()` reads `navigator.userAgent` and `navigator.maxTouchPoints` client-side and highlights the most relevant download card with a terracotta border, glow ring, and "For your device" / "Для вашего устройства" badge.
- **Microsoft Clarity analytics** — session recordings, heatmaps, and custom download events (`download_apk`, `download_windows`, `download_mac`, `download_ios`, `click_iloader`, `click_sideloadly`, `releases_fallback_click`) tracked via `trackEvent()` in `src/lib/utils.ts`. Project ID: `zf23mz47vo`.

### 🚧 In Progress
- Verification of live DNS propagation on `https://cobible.github.io/`.

### 📋 Planned / TODO
- Switch Google Play card from "Coming soon" to active when store listing is approved: change `detectPlatform()` return value `"apk"` → `"android"` and remove the `soon` badge logic for `"android"` id.
- Switch App Store card from "Coming soon" to active when approved: change `detectPlatform()` return value `"ios"` → `"appstore"`.
- Spanish (`/es`) and Ukrainian (`/uk`) localized routes.
- Consider adding Google Analytics 4 when SEO via Google Search Console or paid ad campaigns become a priority.

### 🐛 Known Bugs
- None currently active in codebase.
