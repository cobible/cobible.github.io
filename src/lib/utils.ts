import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function trackEvent(name: string) {
  if (typeof window !== "undefined") {
    const clarity = (window as unknown as { clarity?: (action: string, eventName: string) => void }).clarity;
    if (typeof clarity === "function") {
      clarity("event", name);
    }
  }
}
