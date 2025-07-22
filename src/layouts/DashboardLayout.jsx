import { Outlet, NavLink } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-6/12">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-800 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold">📊 Dashboard</h2>
        <div className="flex flex-col space-y-2">
          <NavLink
            to="stats"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 underline" : "text-white"
            }
          >
            Stats
          </NavLink>
          <NavLink
            to="settings"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 underline" : "text-white"
            }
          >
            Settings
          </NavLink>
          <NavLink
            to="profile"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 underline" : "text-white"
            }
          >
            Profile
          </NavLink>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10 bg-indigo-50">
        <Outlet /> {/* <- All nested dashboard routes render here */}
      </main>
    </div>
  );
};

export default DashboardLayout;
