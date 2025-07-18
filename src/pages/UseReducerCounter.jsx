import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    case "double":
      return { count: state.count * 2 };
    default:
      throw new Error("Unknown action type");
  }
}

const UseReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-6 bg-white rounded-2xl shadow-xl text-center space-y-4 w-full max-w-sm mx-auto">
      <h1 className="text-2xl font-bold text-gray-700">
        🧠 useReducer Counter
      </h1>
      <p className="text-4xl font-mono">{state.count}</p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl"
        >
          ➕ Increment
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
        >
          ➖ Decrement
        </button>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="mt-2 bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-xl"
        >
          🔁 Reset
        </button>
        <button
          onClick={() => dispatch({ type: "double" })}
          className="mt-2 bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-xl"
        >
          2️⃣ Double
        </button>
      </div>
    </div>
  );
};

export default UseReducerCounter;
