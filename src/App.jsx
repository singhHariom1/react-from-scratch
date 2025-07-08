import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import UserCard from "./components/UserCard";
import "./index.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Failed to fetch user", err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 to-slate-200 flex items-center justify-center px-4">
      {loading ? <Loader /> : <UserCard user={user} />}
    </main>
  );
};

export default App;
