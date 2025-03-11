import React from 'react';
import './DashboardScreen.css';
 // Separate CSS for Dashboard-Screen-five
import DashboardImage from '../../assets/dashboard_screen_image.jpg';
import starIcon from '../../assets/star_icon.png';

const DashboardScreen = () => {
  return (
    <>
      <div className='Dashboard-Screen-container'>
        <div className='Dashboard-Screen-one'>
          <img src={DashboardImage} className='Dashboard-Screen-image' alt="Dashboard" />
        </div>

        <div className='Dashboard-Screen-two'>
          <div className='Dashboard-content-one'>Total Ap earned: 280</div>
          <div className='Dashboard-content-two'>Total check-ins done: 1</div>
          <div className='Dashboard-content-three'>Total check-ins missed: 4</div>
        </div>

        <div className='Dashboard-Screen-three'>
          <div className='Screen-three-top'>
            <div className='Screen-three-icon'>
              <img src={starIcon} className='screen-three-iconImage' alt="Star Icon" />
            </div>
            <div className='Screen-three-topContent'>
              <h2>1</h2>
              <p>Day Streak</p>
            </div>
          </div>
          <div className='Screen-three-bottom'></div>
        </div>

        <div className='Dashboard-Screen-four'>
          <div className="grid-container">
            <div className="grid-item">
              <div className='Screen-four-icon'>
                <i className="fa-solid fa-calendar-days"></i>
              </div>
              <div className='Screen-four-heading'><h5>Date</h5></div>
              <div className='Screen-four-content'>10/02/2025 - 10/03/2025</div>
            </div>
            <div className="grid-item">
              <div className='Screen-four-icon'>
                <i className="fa-solid fa-hourglass-end"></i>
              </div>
              <div className='Screen-four-heading'><h5>Duration</h5></div>
              <div className='Screen-four-content'>32 Days</div>
            </div>
            <div className="grid-item">
              <div className='Screen-four-icon'>
                <i className="fa-solid fa-database"></i>
              </div>
              <div className='Screen-four-heading'><h5>Total Ap</h5></div>
              <div className='Screen-four-content'>2650</div>
            </div>
            <div className="grid-item">
              <div className='Screen-four-icon'>
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <div className='Screen-four-heading'><h5>Type</h5></div>
              <div className='Screen-four-content'>Weekly</div>
            </div>
            <div className="grid-item">
              <div className='Screen-four-icon'>
                <i className="fa-solid fa-user-check"></i>
              </div>
              <div className='Screen-four-heading'><h5>Check-ins</h5></div>
              <div className='Screen-four-content'>280 Ap/day</div>
            </div>
            <div className="grid-item">
              <div className='Screen-four-icon'>
                <i className="fa-solid fa-users"></i>
              </div>
              <div className='Screen-four-heading'><h5>Total participants</h5></div>
              <div className='Screen-four-content'>40</div>
            </div>
          </div>
        </div>
        <div className='Dashboard-Screen-five'>
          
        </div>
      </div>
    </>
  );
};

export default DashboardScreen;
