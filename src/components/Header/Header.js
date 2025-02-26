import React, { useState, useEffect } from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Action/RegistrationAction";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa"; 

const HeaderPage = () => {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown toggle
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("LoginUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      <div className="header-class">
        <ul className="nav nav-underline">
          <li className="nav-item">
            <Link to="/today" className="nav-link">
              Today
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Weeks" className="nav-link">
              Weeks
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/months" className="nav-link">
              Months
            </Link>
          </li>

          {user ? (
            <>
              {/* Desktop View */}
              <li className="User-Name d-none d-md-block">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title={user.name || "User"}
                  menuVariant=""
                  className="user-dropdown"
                >
                  <button
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                    className="logout-button"
                  >
                    Logout
                  </button>
                </NavDropdown>
              </li>

              {/* Mobile View */}
              <li className="d-md-none mobile-view">
                <button
                  className="user-icon-button"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <FaUser size={30} className="person-icon-design"/>
                </button>
                {showDropdown && (
                  <div className="mobile-dropdown-mobile">
                    <p className="user-name">{user.name}</p>
                    <button
                      onClick={() => {
                        dispatch(logoutUser());
                        setShowDropdown(false);
                      }}
                      className="logout-button-mobile"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </li>
            </>
          ) : null}
        </ul>
      </div>
    </>
  );
};

export default HeaderPage;
