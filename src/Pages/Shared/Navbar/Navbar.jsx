import { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import lottie from 'lottie-web';
import logo from '../../../../public/logo.json';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
  const logoContainerRef = useRef(null);
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: logoContainerRef.current,
      animationData: logo,
      loop: true,
      autoplay: true,
    });

    return () => {
      anim.destroy();
    };
  }, []);

  const hanldeLogOut = () => {
    logOut();
    Swal.fire({
      icon: 'success',
      title: 'Logout Successful',
      text: 'You have been logged out successfully.',
      showConfirmButton: true,
      confirmButtonText: 'OK',
    });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/instructors">Instructors</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link>Log Out</Link>
                </li>
                <li>
                  <Link to="/image">Image</Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            <li>
              <Link
                to="/contact"
                className="btn bg-[#7971ea] hover:bg-[#1c4b82] border-[#7971ea] text-white font-semibold"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl md:relative absolute top-0 right-0"
        >
          <span className=" w-16 h-10" ref={logoContainerRef}></span>
          <h3>LingoCamp</h3>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/instructors">Instructors</Link>
          </li>
          <li>
            <Link to="/classes">Classes</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button onClick={hanldeLogOut}>Log Out</button>
              </li>
              <li>
                <Link to="/image">Image</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          <li>
            <Link
              to="/contact"
              className="btn bg-[#7971ea] hover:bg-[#1c4b82] border-[#7971ea] text-white font-semibold"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
