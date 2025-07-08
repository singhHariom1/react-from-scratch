import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login, then navigate
    navigate("/user/999");
  };

  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl font-bold">🏠 Home Page</h1>
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Simulate Login → Go to User 999
      </button>
    </div>
  );
};

export default Home;
