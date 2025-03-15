import React, { useState, useEffect } from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Action/RegistrationAction";
import { Link, useLocation } from "react-router-dom";
const HeaderPage = () => {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false); 
  const dispatch = useDispatch();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("/today");
  useEffect(() => {
    const storedUser = localStorage.getItem("LoginUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setActiveTab(location.pathname);
  }, [location.pathname]);
  return (
    <>
      <div className="header-class">
        <ul className="nav nav-underline">
          <li className="nav-item">
            <Link 
              to="/today" 
              className={`nav-link ${activeTab === "/today" ? "active-link" : ""}`} 
              onClick={() => setActiveTab("/today")}
            >
              Today
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/Weeks" 
              className={`nav-link ${activeTab === "/Weeks" ? "active-link" : ""}`} 
              onClick={() => setActiveTab("/Weeks")}
            >
              Weeks
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/months" 
              className={`nav-link ${activeTab === "/months" ? "active-link" : ""}`} 
              onClick={() => setActiveTab("/months")}
            >
              Months
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default HeaderPage;
