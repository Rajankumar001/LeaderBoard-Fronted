import React,{useState}from "react";
import "./DashboardScreen.css";
import DashboardImage from "../../assets/dashboard_screen_image.jpg";
import starIcon from "../../assets/star_icon.png";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
const DashboardScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const days = ["Day-1", "Day-2", "Day-3", "Day-4", "Day-5","Day-6", "Day-7", "Day-8", "Day-9", "Day-10"];
  const visibleItems = 4; /*  number of visible day on screen !*/ 
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : days.length - visibleItems));
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < days.length - visibleItems ? prev + 1 : 0));
  };
  return (
    <>
      <div className="Dashboard-Screen-container">
        {/* screen-one shown below */}
        <div className="Dashboard-Screen-one">
          <img
            src={DashboardImage}
            className="Dashboard-Screen-image"
            alt="Dashboard"
          />
        </div>
        {/* screen-two shown below */}
        <div className="Dashboard-Screen-two">
          <div className="Dashboard-content-one">
            <p>Total Ap earned: 280</p>
            </div>
          <div className="Dashboard-content-two">
            <p>Total check-ins done: 1</p></div>
          <div className="Dashboard-content-three">
            <p>Total check-ins missed: 4</p>
          </div>
        </div>
         {/* Screen-three shown below */}
        <div className="Dashboard-Screen-three">
          <div className="Screen-three-top">
            <div className="Screen-three-icon">
              <img
                src={starIcon}
                className="screen-three-iconImage"
                alt="Star Icon"
              />
            </div>
            <div className="Screen-three-topContent">
              <h2>1</h2>
              <p>Day Streak</p>
            </div>
          </div>
          <div className="Screen-three-bottom">
              <button className="carousel-button left" onClick={prevSlide}>
              <FaChevronCircleLeft />
              </button>
              <div className="carousel-container">
        {days.slice(currentIndex, currentIndex + visibleItems).map((day, index) => (
          <div key={index} className="day-checkins">
            <div className="cross-icon">
            <i class="fa-solid fa-circle-xmark"></i>
            </div>
            <div>
            {day}
            </div>
          </div>
        ))}
      </div>
              <button className="carousel-button right" onClick={nextSlide}>
              <FaChevronCircleRight />
              </button>
          </div>
        </div>
        {/* Screen-four shown below */}
        <div className="Dashboard-Screen-four">
          <div className="grid-container">
            <div className="grid-item">
              <div className="Screen-four-icon">
                <i className="fa-solid fa-calendar-days"></i>
              </div>
              <div className="Screen-four-heading">
                <h5>Date</h5>
              </div>
              <div className="Screen-four-content">
                10/02/2025 - 10/03/2025
                </div>
            </div>
            <div className="grid-item">
              <div className="Screen-four-icon">
                <i className="fa-solid fa-hourglass-end"></i>
              </div>
              <div className="Screen-four-heading">
                <h5>Duration</h5>
              </div>
              <div className="Screen-four-content">
                <h6>32 Days</h6>
                </div>
            </div>
            <div className="grid-item">
              <div className="Screen-four-icon">
                <i className="fa-solid fa-database"></i>
              </div>
              <div className="Screen-four-heading">
                <h5>Total Ap</h5>
              </div>
              <div className="Screen-four-content">
                <h6>2650</h6>
              </div>
            </div>
            <div className="grid-item">
              <div className="Screen-four-icon">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <div className="Screen-four-heading">
                <h5>Type</h5>
              </div>
              <div className="Screen-four-content">
                <h6>Weekly</h6>
              </div>
            </div>
            <div className="grid-item">
              <div className="Screen-four-icon">
                <i className="fa-solid fa-user-check"></i>
              </div>
              <div className="Screen-four-heading">
                <h5>Check-ins</h5>
              </div>
              <div className="Screen-four-content">
                <h6>280 Ap/day</h6>
              </div>
            </div>
            <div className="grid-item">
              <div className="Screen-four-icon">
                <i className="fa-solid fa-users"></i>
              </div>
              <div className="Screen-four-heading">
                <h5>Total participants</h5>
              </div>
              <div className="Screen-four-content">
                <h6>40</h6>
              </div>
            </div>
          </div>
        </div>
        {/* Screen -five content shown below */}
        <div className="Dashboard-Screen-five">
          <h3>Details</h3>
        <div>
  <h2>🎥 Video-Thon 5.0 Challenge – Ignite Your Creativity & Become a Video Ninja! 🚀🔥</h2>
  <p>Are you ready to transform your video creation skills, boost your confidence, and unlock new opportunities? Welcome to <strong>Video-Thon 2.0</strong>, the ultimate challenge designed to help you master consistency, creativity, and content creation.</p>
  </div>
  <div>
  <h3>❓ What is Video-Thon 5.0?</h3>
  <ul>
    <li>✅ 28-day video creation challenge</li>
    <li>✅ Create and post videos daily based on pre-defined frameworks</li>
    <li>✅ Overcome fear & hesitation in front of the camera 🌟</li>
    <li>✅ Build a <strong>powerful personal brand</strong> through video content</li>
    <li>✅ Gain confidence & consistency in content creation</li>
    <li>✅ Learn new <strong>video styles & storytelling techniques</strong></li>
    <li>✅ Engage with an inspiring community of like-minded creators 👥</li>
  </ul>
  </div>
  <div>
  <h3>🔄 How It Works?</h3>
  <ol>
    <li><strong>Join a Team of 4</strong> – Work together, stay accountable & push each other to success!</li>
    <li><strong>Post Daily Videos</strong> – Follow the structured framework & unleash your creativity.</li>
    <li><strong>Fast in WhatsApp & Instagram</strong> – Build visibility & momentum.</li>
    <li><strong>Track Your Progress</strong> – Update your Google Sheet to stay on top!</li>
    <li><strong>Win Epic Rewards 🏆</strong> – Climb the <strong>Video Ninja levels</strong> & grab exciting prizes!</li>
  </ol>
  </div>
  <h3>🔹 The Video Ninja Levels & Rewards</h3>
  <ul>
    <li><strong>Video Ninja</strong> – Complete <strong>18</strong> videos (WhatsApp: 18, Instagram: 12)</li>
    <li><strong>Video Ninja Master</strong> – Complete <strong>24</strong> videos (WhatsApp: 24, Instagram: 18)</li>
    <li><strong>Video Ninja Legend</strong> – Complete <strong>28</strong> videos (WhatsApp: 28, Instagram: 25)</li>
    <li><strong>Video Ninja Supreme</strong> – Post all <strong>28/28</strong> videos on both platforms & unlock a <strong>Surprise Gift! 🎁</strong></li>
  </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardScreen;