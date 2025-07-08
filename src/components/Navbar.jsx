import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="space-x-4 text-lg font-medium mb-8">
      <Link to="/" className="text-blue-600 hover:underline">
        Home
      </Link>
      <Link to="/about" className="text-blue-600 hover:underline">
        About
      </Link>
      <Link to="/contact" className="text-blue-600 hover:underline">
        Contact
      </Link>
      <Link to="/user/101" className="text-green-600 hover:underline">
        User 101
      </Link>
      <Link to="/user/202" className="text-green-600 hover:underline">
        User 202
      </Link>
    </nav>
  );
};

export default Navbar;
