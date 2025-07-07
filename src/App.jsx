import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ textAlign: "center", paddingTop: "3rem" }}>
      <h1>Hello, React!</h1>
      <button onClick={() => setCount(count + 1)}>
        You clicked me {count} times
      </button>
    </main>
  );
}

export default App;
