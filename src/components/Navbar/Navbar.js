import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Action/RegistrationAction";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Navbar.css';

function Navbarpage() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state

  useEffect(() => {
    const storedUser = localStorage.getItem("LoginUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <nav className="navbar navbar-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="">Angel-Thon 5.0<span> LeaderBoard</span></a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="dropdown-menu-custom">
            <ul className="dropdown-list">
              {!user ? (
                <li className="dropdown-item">
                  <Link className="nav-link" to="/">Login</Link>
                </li>
              ) : (
                <>
                  <li className="dropdown-item">{user.name}</li>
                  <li className="dropdown-item">
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        dispatch(logoutUser());
                        setUser(null);
                        setDropdownOpen(false);
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbarpage;
