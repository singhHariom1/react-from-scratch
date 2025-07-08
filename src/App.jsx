import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold text-purple-800 mb-6 drop-shadow">
        🚀 Hello, React + Tailwind!
      </h1>

      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-purple-600 hover:bg-purple-700 active:scale-95 text-white px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-200 shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300"
      >
        You clicked me {count} {count === 1 ? "time" : "times"}
      </button>

      <p className="mt-4 text-gray-700 text-sm">
        Tailwind v4 is fully set up and styling this ✨
      </p>
    </main>
  );
}

export default App;
