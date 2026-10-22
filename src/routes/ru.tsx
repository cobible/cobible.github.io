import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/Landing";
import { pageHead } from "@/lib/content";

export const Route = createFileRoute("/ru")({
  head: () => pageHead("ru"),
  component: () => <Landing lang="ru" />,
});
