import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);

  return (
    <>
      <div className="card flex gap-4 justify-between">
        <button
          className="p-6 w-full rounded-lg bg-gray-300 text-black"
          onClick={() => setPage(1)}
        >
          tab 1
        </button>
        <button
          className="p-6 w-full rounded-lg bg-gray-300 text-black"
          onClick={() => setPage(2)}
        >
          tab 2
        </button>
        <button
          className="p-6 w-full rounded-lg bg-gray-300 text-black"
          onClick={() => setPage(3)}
        >
          tab 3
        </button>
      </div>
      <div className="bg-amber-100 p-3">
        Current Page: {page === 1 ? "1" : page === 2 ? "2" : "3"}
      </div>
    </>
  );
}

export default App;
