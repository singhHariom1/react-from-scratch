import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">📊 Dashboard</h1>
      <div className="flex justify-center space-x-4 mb-4">
        <NavLink to="stats" className="text-blue-600 hover:underline">
          Stats
        </NavLink>
        <NavLink to="settings" className="text-blue-600 hover:underline">
          Settings
        </NavLink>
        <NavLink to="profile" className="text-blue-600 hover:underline">
          Profile
        </NavLink>
      </div>
      <Outlet /> {/* This is where the child routes will be rendered */}
    </div>
  );
};

export default Dashboard;
