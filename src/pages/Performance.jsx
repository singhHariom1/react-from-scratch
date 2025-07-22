import React, { useState, useCallback } from "react";
import MemoExample from "../components/MemoExample";

const Performance = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="space-y-4 text-center">
      <h2 className="text-2xl font-bold">🚀 Performance Optimization</h2>
      <p className="text-lg">Count: {count}</p>
      <button
        onClick={increment}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Increment
      </button>

      {/* Child memoized component */}
      <MemoExample />
    </div>
  );
};

export default Performance;
