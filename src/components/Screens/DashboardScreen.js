import React from 'react'
import './DashboardScreen.css';
import DashboardImage from '../../assets/dashboard_screen_image.jpg'
const DashboardScreen = () => {
  return (
    <>
      <div className='Dashboard-Screen-container'>
       <div className='Dashboard-Screen-one'>
        <img src={DashboardImage} className='Dashboard-Screen-image'></img>
       </div>
       <div className='Dashboard-Screen-two'>
        <div className='Dashboard-content-one'>Total Ap earned:280</div>
        <div className='Dashboard-content-two'>Total check-ins done:1</div>
        <div className='Dashboard-content-three'>Totalchacek-ins missed:4</div>
       </div>
       <div className='Dashboard-Screen-three'>
        <h5>Day Streak 1</h5>
        <p>
        There had to be a better way. That's all Nancy could think as she sat at her desk staring at her computer screen. She'd already spent five years of her life in this little cubicle staring at her computer doing "work" that didn't seem to matter to anyone including her own boss. There had to be more to her life than this and there had to be a better way to make a living. That's what she was thinking when the earthquake struck.
        </p>
       </div>
       <div className='Dashboard-Screen-four'>
       <div className="grid-container">
            <div className="grid-item">Item 1</div>
            <div className="grid-item">Item 2</div>
            <div className="grid-item">Item 3</div>
            <div className="grid-item">Item 4</div>
            <div className="grid-item">Item 5</div>
            <div className="grid-item">Item 6</div>
          </div>
       </div>
       <div className='Dashboard-Screen-four'>
       <div className="grid-container">
            <div className="grid-item">Item 1</div>
            <div className="grid-item">Item 2</div>
            <div className="grid-item">Item 3</div>
            <div className="grid-item">Item 4</div>
            <div className="grid-item">Item 5</div>
            <div className="grid-item">Item 6</div>
          </div>
       </div>
       <div className='Dashboard-Screen-four'>
       <div className="grid-container">
            <div className="grid-item">Item 1</div>
            <div className="grid-item">Item 2</div>
            <div className="grid-item">Item 3</div>
            <div className="grid-item">Item 4</div>
            <div className="grid-item">Item 5</div>
            <div className="grid-item">Item 6</div>
          </div>
       </div>
       <div className='Dashboard-Screen-four'>
       <div className="grid-container">
            <div className="grid-item">Item 1</div>
            <div className="grid-item">Item 2</div>
            <div className="grid-item">Item 3</div>
            <div className="grid-item">Item 4</div>
            <div className="grid-item">Item 5</div>
            <div className="grid-item">Item 6</div>
          </div>
       </div>
       <div className='Dashboard-Screen-four'>
       <div className="grid-container">
            <div className="grid-item">Item 1</div>
            <div className="grid-item">Item 2</div>
            <div className="grid-item">Item 3</div>
            <div className="grid-item">Item 4</div>
            <div className="grid-item">Item 5</div>
            <div className="grid-item">Item 6</div>
          </div>
       </div>
      </div>
    </>
  )
}

export default DashboardScreen
