import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/3")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/3"!</div>;
}
