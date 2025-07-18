import { NavLink } from "react-router-dom";

const linkClass =
  "px-3 py-2 rounded-md transition-all hover:bg-indigo-200 font-medium";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap gap-4 mb-8 bg-white shadow p-4 rounded-md">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${linkClass} bg-indigo-600 text-white` : linkClass
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? `${linkClass} bg-indigo-600 text-white` : linkClass
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? `${linkClass} bg-indigo-600 text-white` : linkClass
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/counter"
        className={({ isActive }) =>
          isActive ? `${linkClass} bg-indigo-600 text-white` : linkClass
        }
      >
        Counter
      </NavLink>
      <NavLink
        to="/user/101"
        className={({ isActive }) =>
          isActive ? `${linkClass} bg-green-600 text-white` : linkClass
        }
      >
        User 101
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? `${linkClass} bg-green-600 text-white` : linkClass
        }
      >
        Dashboard
      </NavLink>
    </nav>
  );
};

export default Navbar;
