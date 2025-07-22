import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const baseLinkClass = "px-3 py-2 rounded-md transition-all font-medium";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  const navBgClass = isDark
    ? "bg-gray-800 text-white shadow-md"
    : "bg-white text-black shadow";

  const activeClass = isDark
    ? "bg-green-600 text-white"
    : "bg-indigo-600 text-white";

  return (
    <nav className={`flex flex-wrap gap-4 mb-8 p-4 rounded-md ${navBgClass}`}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${baseLinkClass} ${activeClass}` : baseLinkClass
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? `${baseLinkClass} ${activeClass}` : baseLinkClass
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? `${baseLinkClass} ${activeClass}` : baseLinkClass
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/counter"
        className={({ isActive }) =>
          isActive ? `${baseLinkClass} ${activeClass}` : baseLinkClass
        }
      >
        Counter
      </NavLink>
      <NavLink
        to="/user/101"
        className={({ isActive }) =>
          isActive ? `${baseLinkClass} ${activeClass}` : baseLinkClass
        }
      >
        User 101
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? `${baseLinkClass} ${activeClass}` : baseLinkClass
        }
      >
        Dashboard
      </NavLink>

      {/* 🌗 Toggle Theme Button */}
      <button
        onClick={toggleTheme}
        className={`ml-auto px-3 py-2 rounded-md border ${
          isDark
            ? "border-white text-white hover:bg-white hover:text-black"
            : "border-black text-black hover:bg-black hover:text-white"
        } transition-all`}
      >
        {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
