import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [page, setPage] = useState(1);

  return (
    <React.Fragment>
      <div className="card flex gap-4 justify-between">
        <Link to="/1" className="p-6 w-full rounded-lg bg-gray-300 text-black">
          tab 1
        </Link>

        <Link to="/2" className="p-6 w-full rounded-lg bg-gray-300 text-black">
          tab 2
        </Link>

        <Link to="/3" className="p-6 w-full rounded-lg bg-gray-300 text-black">
          tab 3
        </Link>
      </div>
      <Outlet />
    </React.Fragment>
  );
}
