import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/1")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/1"!</div>;
}
