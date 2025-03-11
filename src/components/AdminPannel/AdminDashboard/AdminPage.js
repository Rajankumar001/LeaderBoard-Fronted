import React, {useState } from "react";
import "./AdminPage.css"; // Import the CSS file
import AllUsers from "../AllUsers/AllUsers";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("allUsers");
  return (
    <div className="admin-container">
      {/* Left Sidebar (Switches to Top on Mobile) */}
      <div className="admin-sidebar">
        <button
          className={activeTab === "allUsers" ? "active" : ""}
          onClick={() => setActiveTab("allUsers")}
        >
          All Users
        </button>
        <button
          className={activeTab === "editUser" ? "active" : ""}
          onClick={() => setActiveTab("editUser")}
        >
          Edit User
        </button>
        <button
          className={activeTab === "deleteUser" ? "active" : ""}
          onClick={() => setActiveTab("deleteUser")}
        >
          Delete User
        </button>
        <button
          className={activeTab === "updateUser" ? "active" : ""}
          onClick={() => setActiveTab("updateUser")}
        >
          Update User
        </button>
      </div>

      {/* Right Content Section */}
      <div className="admin-content">
      {activeTab === "allUsers" && <AllUsers />}
        {activeTab === "editUser" && <AllUsers />}
        {activeTab === "deleteUser" && <AllUsers />}
        {activeTab === "updateUser" && <AllUsers />}
      </div>
    </div>
  );
};

export default AdminPage;
