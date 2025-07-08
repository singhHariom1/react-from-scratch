import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/Loader";
import UserCard from "./components/UserCard";
import "./index.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/");
      setUser(response.data.results[0]);
      setLoading(false);
      setError(null);
    } catch (err) {
      setError("Failed to load user. Please try again.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 to-slate-200 flex flex-col items-center justify-center px-4">
      {error && <p className="text-red-600 mb-4 font-medium">{error}</p>}
      {loading ? <Loader /> : <UserCard user={user} />}
      <button
        onClick={() => {
          setLoading(true);
          fetchUser();
        }}
        className="mt-6 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-semibold shadow-md"
      >
        Fetch New User
      </button>
    </main>
  );
};

export default App;
