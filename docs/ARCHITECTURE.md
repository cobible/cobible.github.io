# CoBible Site — Architecture & Diagrams

This document contains Mermaid diagrams illustrating the structure, data flows, and state management of the CoBible website.

---

## 1. Module Dependency Graph

```mermaid
graph TD
    Root["src/routes/__root.tsx (Root Shell & Anti-FOUC)"] --> Landing["src/components/Landing.tsx (Shared Page Component)"]
    Index["src/routes/index.tsx (Route /)"] --> Root
    Index --> Landing
    Ru["src/routes/ru.tsx (Route /ru)"] --> Root
    Ru --> Landing

    Landing --> Content["src/lib/content.ts (Dictionary & Meta)"]
    Landing --> Releases["src/lib/releases.ts (GitHub API Resolver)"]
    Landing --> Sideload["src/components/SideloadInstructions.tsx"]
    Landing --> ThemeToggle["src/components/ThemeToggle.tsx"]
    Landing --> UI_Button["src/components/ui/button.tsx"]

    Sideload --> Content
    Sideload --> UI_Accordion["src/components/ui/accordion.tsx"]
    Sideload --> UI_Button

    ThemeToggle --> Content
    ThemeToggle --> Lucide["lucide-react (Sun, Moon, Monitor, Check)"]

    Releases --> GitHubAPI["GitHub Releases Public REST API"]
    Root --> Styles["src/styles.css (Tailwind v4 + OKLCH Tokens)"]
```

---

## 2. Release Download Flow (Sequence Diagram)

```mermaid
sequenceDiagram
    autonumber
    actor User as Visitor (Browser)
    participant Page as Landing Page (React)
    participant RQ as TanStack Query (cache)
    participant GH as GitHub Releases API

    User->>Page: Visits / or /ru
    Page->>Page: Waits for hydration (hydrated = true)
    Page->>RQ: useQuery(["latest-release"])
    RQ->>GH: GET /repos/antkeepapp/cobible-releases/releases/latest
    alt API Success
        GH-->>RQ: Release JSON (tag_name, assets[])
        RQ-->>Page: Validated Release object
        Page->>Page: releaseDownloads(release) matches platform regexes
        Page-->>User: Displays active Download button with version and filename
    else API Rate Limited or Offline
        GH-->>RQ: Error response / network timeout
        RQ-->>Page: isError = true
        Page-->>User: Displays fallback button linking to GitHub Releases page
    end
```

---

## 3. Entity & Data Model (ER Diagram)

```mermaid
erDiagram
    RELEASE ||--o{ RELEASE_ASSET : contains
    RELEASE {
        string tag_name
        boolean draft
        boolean prerelease
    }
    RELEASE_ASSET {
        string name
        string browser_download_url
    }

    PLATFORM ||--|| DOWNLOAD_ITEM : resolves_to
    PLATFORM {
        string id "apk | windows | mac | ios | appstore"
        string name
        string sub_en
        string sub_ru
    }
    DOWNLOAD_ITEM {
        string platform_id
        string file_name
        string download_url
    }

    CONTENT_DICTIONARY ||--|{ LOCALE_ENTRY : provides
    CONTENT_DICTIONARY {
        string lang "en | ru"
    }
    LOCALE_ENTRY {
        object meta
        object nav
        string eyebrow
        string h1
        string lead
        object steps
        object sideload
        array faq
        object theme
    }
```

---

## 4. State Management Architecture

```mermaid
graph LR
    subgraph Client_Storage ["Client Storage"]
        LS["localStorage ('cobible-theme')"]
        SystemMedia["window.matchMedia('(prefers-color-scheme: dark)')"]
    end

    subgraph Theme_Runtime ["Theme State System"]
        HeadScript["Inline Head Script (Anti-FOUC)"]
        ThemeComponent["ThemeToggle Component"]
        DOM_HTML["document.documentElement (.dark class)"]
    end

    subgraph Server_State ["Async Server State (TanStack Query)"]
        QC["QueryClient Context"]
        RQ_Hook["useQuery(['latest-release'])"]
        GitHubCache["Releases In-Memory Cache (60s staleTime)"]
    end

    LS -.-> HeadScript
    SystemMedia -.-> HeadScript
    HeadScript --> DOM_HTML

    LS <--> ThemeComponent
    SystemMedia --> ThemeComponent
    ThemeComponent --> DOM_HTML

    QC --> RQ_Hook
    RQ_Hook <--> GitHubCache
```

---

## 5. Navigation & Route Hierarchy

```mermaid
graph TD
    RootRoute["/__root (HTML Shell, Fonts, CSS, Theme Script)"]
    
    IndexRoute["/ (English Landing)"]
    RuRoute["/ru (Russian Landing)"]
    NotFound["404 Not Found Component"]

    RootRoute --> IndexRoute
    RootRoute --> RuRoute
    RootRoute --> NotFound

    IndexRoute -. Language Switch .-> RuRoute
    RuRoute -. Language Switch .-> IndexRoute
```
