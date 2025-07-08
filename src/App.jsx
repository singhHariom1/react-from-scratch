import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserProfile from "./pages/UserProfile";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-10 space-y-4 bg-gradient-to-br from-blue-100 to-cyan-200">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="stats" element={<p>📈 Stats Page</p>} />
          <Route path="settings" element={<p>⚙️ Settings Page</p>} />
        </Route>
        
        {/* 👇 Fallback route */}
        <Route
          path="*"
          element={<h1 className="text-3xl font-bold">404 - Page Not Found</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
