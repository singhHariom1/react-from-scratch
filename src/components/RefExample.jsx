import { useRef, useState, useEffect } from "react";

const RefExample = () => {
  const inputRef = useRef(null);
  const prevValueRef = useRef("");

  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => {
    inputRef.current.focus(); // 💥 DOM access
  };

  useEffect(() => {
    prevValueRef.current = inputValue;
  }, [inputValue]);

  return (
    <div className="space-y-4 bg-white p-6 rounded shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold">🔍 useRef Example</h2>

      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full border p-2 rounded"
        placeholder="Type something..."
      />

      <button
        onClick={handleFocus}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Focus Input
      </button>

      <p className="text-gray-600">Current: {inputValue}</p>
      <p className="text-gray-600">Previous: {prevValueRef.current}</p>
    </div>
  );
};

export default RefExample;
