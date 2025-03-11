import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getOverallAction } from '../../../Action/LeaderBoardAction';
import './AllUsers.css';
const AllUsers = () => {
  const dispatch = useDispatch();
  const Users = useSelector((state) => state.getOverallScore);
  const { OverallScore, loading, error } = Users;

  useEffect(() => {
    dispatch(getOverallAction());
  }, [dispatch]);

  return (
    <div>
      <h2>All Users</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <table border="1" cellPadding="10" className="table-container">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {OverallScore && OverallScore.length > 0 ? (
              OverallScore.map((user, index) => (
                <tr key={index}>
                  <td>{user.Name}</td>
                  <td>{user.Email}</td>
                  <td>{user.Mobile}</td>
                  <td>
                    <button onClick={() => console.log("Edit", user)}>Edit</button>
                    <button onClick={() => console.log("Delete", user)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllUsers;
