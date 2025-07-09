import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isLoggedIn, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isLoggedIn) {
      login();
      navigate("/dashboard");
    } else {
      logout();
    }
  };

  return (
    <div className="space-y-4 text-center">
      <h1 className="text-3xl font-bold">🏠 Home Page</h1>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        {isLoggedIn ? "Logout" : "Login → Go to Dashboard"}
      </button>
    </div>
  );
};

export default Home;
