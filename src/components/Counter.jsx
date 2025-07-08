const Counter = ({ count, setCount }) => {
  return (
    <button
      onClick={() => setCount((prev) => prev + 1)}
      className="bg-purple-600 hover:bg-purple-700 active:scale-95 text-white px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-200 shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300"
    >
      You clicked me {count} {count === 1 ? "time" : "times"}
    </button>
  );
};

export default Counter;
