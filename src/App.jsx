import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-10 space-y-4 bg-gradient-to-br from-blue-100 to-cyan-200">
      <nav className="space-x-4 text-lg font-medium">
        <Link to="/" className="text-blue-600 hover:underline">
          Home
        </Link>
        <Link to="/about" className="text-blue-600 hover:underline">
          About
        </Link>
        <Link to="/contact" className="text-blue-600 hover:underline">
          Contact
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
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
