import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/2")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/2"!</div>;
}
