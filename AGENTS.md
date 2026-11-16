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

- All site copy for both languages lives in src/lib/content.ts (en at /, ru at /ru); the shared page is src/components/Landing.tsx — keeps languages in sync.
- App screenshots shown on the site must match the page language: shots and verseShots in src/lib/content.ts are keyed per language, so never reuse one language's screenshot on the other language's page.
- Resolve public release downloads through a client-only React Query request to GitHub's latest stable release API; match platform suffixes rather than versioned filenames, and fall back to the latest release page when unavailable so no credentials or backend are required.
