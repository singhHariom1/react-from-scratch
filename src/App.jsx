import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserProfile from "./pages/UserProfile";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import UseReducerCounter from "./pages/UseReducerCounter";
import { useTheme } from "./context/ThemeContext";
import Profile from "./components/Profile";
import Performance from "./pages/Performance";

function App() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-start p-10 space-y-4 transition-colors duration-500 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
          : "bg-gradient-to-br from-blue-100 to-cyan-200 text-black"
      }`}
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/counter" element={<UseReducerCounter />} />
        <Route path="/performance" element={<Performance />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route
            path="stats"
            element={<p className="text-xl">📈 Stats Page</p>}
          />
          <Route
            path="settings"
            element={<p className="text-xl">⚙️ Settings Page</p>}
          />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route
          path="*"
          element={<h1 className="text-3xl font-bold">404 - Page Not Found</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
