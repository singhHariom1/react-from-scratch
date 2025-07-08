import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Counter from "./components/Counter";
import TailwindBanner from "./components/TailwindBanner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex flex-col items-center justify-center px-4">
      <Header />
      <Counter count={count} setCount={setCount} />
      <TailwindBanner />
    </main>
  );
}

export default App;
