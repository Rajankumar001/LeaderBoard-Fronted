import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signin from './components/login/Userlogin';
import OverallSheet from './components/OverallSheet/OverallSheet.js';
import './App.css';
import Navbarpage from './components/Navbar/Navbar';
import WeeklySheet from './components/WeeklyScoreSheet/WeeklySheet';
import MonthlySheet from './components/MonthlyScoreSheet/MonthlySheet';
import HomeScreen from './Screen/HomeScreen.js';
import AdminPage from './components/AdminPannel/AdminDashboard/AdminPage.js';

function App() {
  const ProtectedRoute = ({ children }) => {
    const LoginUser = localStorage.getItem('LoginUser');
    return LoginUser ? children : <Navigate to="/" replace />;
  };

  return (
    <div className='app-container'>
      <BrowserRouter>
        <Navbarpage />
        <Routes>
          <Route path='/' element={<Signin />} exact />
          <Route path='/home' element={<ProtectedRoute><HomeScreen /></ProtectedRoute>} exact />
          <Route path='/today' element={<ProtectedRoute><OverallSheet /></ProtectedRoute>} exact />
          <Route path='/weeks' element={<ProtectedRoute><WeeklySheet /></ProtectedRoute>} exact />
          <Route path='/months' element={<ProtectedRoute><MonthlySheet /></ProtectedRoute>} exact />
          <Route path='/admin-dashboard' element={<ProtectedRoute><AdminPage /></ProtectedRoute>} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
