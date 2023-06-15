import { Link, Outlet } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const Dashboard = () => {
  return (
    <section>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <Link to="/">
                <p className="font-bold text-xl bg-gray-300 text-gray-500 py-2 px-3 w-30 rounded-md">
                  LingoHome
                </p>
              </Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                  <Link to="/dashboard/mycourses">My Courses</Link>
                </li>
                <li>
                  <Link to="/dashboard/history">My Purchases</Link>
                </li>
                <li>
                  <Link to="/dashboard/addclass">Add a new class</Link>
                </li>
                <li>
                  <Link to="/dashboard/myclasses">My Classes</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Page content here */}
          <Fade cascade>
            <Outlet />
          </Fade>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard/mycourses">My Courses</Link>
            </li>
            <li>
              <Link to="/dashboard/history">My Purchases</Link>
            </li>
            <li>
              <Link to="/dashboard/addclass">Add a new class</Link>
            </li>
            <li>
              <Link to="/dashboard/myclasses">My Classes</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
