import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$number")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "$number"!</div>;
}
