import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/Landing";
import { pageHead } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => pageHead("en"),
  component: () => <Landing lang="en" />,
});
