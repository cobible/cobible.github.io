import { useEffect, useRef, useState } from "react";
import { Sun, Moon, Monitor, Check } from "lucide-react";
import { t, type Lang } from "@/lib/content";

export type Theme = "system" | "light" | "dark";

export function ThemeToggle({ lang }: { lang: Lang }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const stored = (localStorage.getItem("cobible-theme") as Theme) || "system";
    setThemeState(stored);

    const mql = window.matchMedia("(prefers-color-scheme: dark)");

    const updateResolved = (activeTheme: Theme) => {
      const isDark = activeTheme === "dark" || (activeTheme === "system" && mql.matches);
      document.documentElement.classList.toggle("dark", isDark);
      setResolvedTheme(isDark ? "dark" : "light");
    };

    updateResolved(stored);

    const onMediaChange = () => {
      const current = (localStorage.getItem("cobible-theme") as Theme) || "system";
      if (current === "system") {
        updateResolved("system");
      }
    };

    mql.addEventListener("change", onMediaChange);
    return () => mql.removeEventListener("change", onMediaChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const changeTheme = (next: Theme) => {
    setThemeState(next);
    localStorage.setItem("cobible-theme", next);
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const isDark = next === "dark" || (next === "system" && mql.matches);
    document.documentElement.classList.toggle("dark", isDark);
    setResolvedTheme(isDark ? "dark" : "light");
    setOpen(false);
  };

  const copy = t[lang].theme;

  return (
    <div ref={menuRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={copy.toggle}
        title={copy.toggle}
        className="inline-flex size-8 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {mounted && resolvedTheme === "dark" ? (
          <Moon className="size-4 transition-transform duration-200" />
        ) : (
          <Sun className="size-4 transition-transform duration-200" />
        )}
      </button>

      {open && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute right-0 z-50 mt-2 min-w-[8.5rem] origin-top-right rounded-2xl border border-border bg-popover/95 p-1 shadow-lg backdrop-blur"
        >
          <button
            type="button"
            role="menuitem"
            onClick={() => changeTheme("light")}
            className="flex w-full cursor-pointer items-center justify-between rounded-xl px-2.5 py-1.5 text-xs font-medium text-popover-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <span className="flex items-center gap-2">
              <Sun className="size-3.5 text-muted-foreground" />
              {copy.light}
            </span>
            {theme === "light" && <Check className="size-3.5 text-primary" />}
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => changeTheme("dark")}
            className="flex w-full cursor-pointer items-center justify-between rounded-xl px-2.5 py-1.5 text-xs font-medium text-popover-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <span className="flex items-center gap-2">
              <Moon className="size-3.5 text-muted-foreground" />
              {copy.dark}
            </span>
            {theme === "dark" && <Check className="size-3.5 text-primary" />}
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => changeTheme("system")}
            className="flex w-full cursor-pointer items-center justify-between rounded-xl px-2.5 py-1.5 text-xs font-medium text-popover-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <span className="flex items-center gap-2">
              <Monitor className="size-3.5 text-muted-foreground" />
              {copy.system}
            </span>
            {theme === "system" && <Check className="size-3.5 text-primary" />}
          </button>
        </div>
      )}
    </div>
  );
}
