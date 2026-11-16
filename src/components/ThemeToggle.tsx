import { useEffect, useState } from "react";
import { Sun, Moon, Monitor, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { t, type Lang } from "@/lib/content";

export type Theme = "system" | "light" | "dark";

export function ThemeToggle({ lang }: { lang: Lang }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

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

  const changeTheme = (next: Theme) => {
    setThemeState(next);
    localStorage.setItem("cobible-theme", next);
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const isDark = next === "dark" || (next === "system" && mql.matches);
    document.documentElement.classList.toggle("dark", isDark);
    setResolvedTheme(isDark ? "dark" : "light");
  };

  const copy = t[lang].theme;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
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
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[8.5rem] rounded-2xl border border-border bg-popover/95 p-1 shadow-lg backdrop-blur"
      >
        <DropdownMenuItem
          onClick={() => changeTheme("light")}
          className="flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-1.5 text-xs font-medium focus:bg-accent focus:text-accent-foreground"
        >
          <span className="flex items-center gap-2">
            <Sun className="size-3.5 text-muted-foreground" />
            {copy.light}
          </span>
          {theme === "light" && <Check className="size-3.5 text-primary" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeTheme("dark")}
          className="flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-1.5 text-xs font-medium focus:bg-accent focus:text-accent-foreground"
        >
          <span className="flex items-center gap-2">
            <Moon className="size-3.5 text-muted-foreground" />
            {copy.dark}
          </span>
          {theme === "dark" && <Check className="size-3.5 text-primary" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeTheme("system")}
          className="flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-1.5 text-xs font-medium focus:bg-accent focus:text-accent-foreground"
        >
          <span className="flex items-center gap-2">
            <Monitor className="size-3.5 text-muted-foreground" />
            {copy.system}
          </span>
          {theme === "system" && <Check className="size-3.5 text-primary" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
