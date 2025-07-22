// src/components/MemoExample.jsx
import React, { useState, useCallback, useMemo } from "react";
import HeavyComponent from "./HeavyComponent";

function slowCalculation(num) {
  console.log("Running slow calculation...");
  for (let i = 0; i < 1e9; i++) {} // Simulate delay
  return num * 2;
}

function MemoExample() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(5);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const expensiveValue = useMemo(() => slowCalculation(value), [value]);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">
        🔁 Performance Optimization Demo
      </h2>

      <div className="flex gap-4">
        <button
          onClick={increment}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          Increment Count
        </button>

        <button
          onClick={() => setValue((prev) => prev + 1)}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Change Expensive Value
        </button>
      </div>

      <p>🔢 Count: {count}</p>
      <p>💡 Expensive Computation Result: {expensiveValue}</p>

      <HeavyComponent value={value} />
    </div>
  );
}

export default MemoExample;
