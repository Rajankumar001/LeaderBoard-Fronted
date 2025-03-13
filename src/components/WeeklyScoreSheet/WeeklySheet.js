import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getWeeklyAction } from '../../Action/LeaderBoardAction';
import  image2 from '../../assets/leader_board_img.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import svg_1 from '../../assets/svg_1.png';
import svg_2 from '../../assets/svg_2.png';
import svg_3 from '../../assets/svg_3.png';
import HeaderPage from '../Header/Header.js'
import './WeeklySheet.css';
import Loader from '../loader';
import DashboardScreen from '../Screens/DashboardScreen.js';
const WeeklySheet = () => {
    const dispatch = useDispatch();
    const weeklyScore = useSelector((state) => state.getWeeklyScore);
    const { Score, loading, error } = weeklyScore;
    const storedLoginUser = localStorage.getItem('LoginUser');
    const LoginUser = storedLoginUser ? JSON.parse(storedLoginUser) : null;
    console.log("weeklystate",weeklyScore);
    console.log("Score",Score);
    const [selectedWeek, setSelectedWeek] = useState(9);
   
    useEffect(() => {
        dispatch(getWeeklyAction(selectedWeek));
    }, [dispatch, selectedWeek]);

    const handleWeekClick = (week) => {
        setSelectedWeek(week);
    };
     const handleclick=(week_no)=>{
            dispatch(getWeeklyAction(week_no))
         }
         const getUserRankingData = () => {
            if (Score && LoginUser) {
                return Score.find(row => row.Name === LoginUser.name);
            }
            return null;
        };
        const userRankingData = getUserRankingData();
    return (
        <>
        <div className='Weekly-Dashboard-container'>
            <DashboardScreen/>
            <div className='Weekly-main-container'>
                <HeaderPage/>
            <div className="Weekly-container">
    <div className='Mobile-responsive'>
        <ButtonGroup aria-label="Basic example">
        <Button onClick={() => handleclick(1)} className='responsive-button'>Week 1</Button>
        <Button onClick={() => handleclick(2)}className='responsive-button'>Week 2</Button>
        <Button onClick={() => handleclick(3)}className='responsive-button'>Week 3</Button>
        <Button onClick={() => handleclick(4)} className='responsive-button'>Week 4</Button>
        <Button onClick={() => handleclick(5)} className='responsive-button'>Week 5</Button>
        <Button onClick={() => handleclick(6)} className='responsive-button'>Week 6</Button>
        <Button onClick={() => handleclick(7)} className='responsive-button'>Week 7</Button>
        <Button onClick={() => handleclick(8)} className='responsive-button'>Week 8</Button>
        <Button onClick={() => handleclick(9)}className='responsive-button'>Week 9</Button>
        </ButtonGroup>
    </div> 
      <div className='sidebar'>
                    {[...Array(9)].map((_, index) => {
                        const week = 9 - index;
                        return (
                            <button
                                key={index}
                                className={`week-button ${selectedWeek === week ? 'active' : ''} week-leaderboard-button`}
                                onClick={() => handleWeekClick(week)}
                            >
                                Week {week}

                            </button>
                        );
                    })}
                    
                </div>
                <div className="weekly-rank">
                    {loading ? (
                       <Loader/>
                    ) : error ? (
                        <p className="error">Error: {error}</p>
                    ) : (
                        <table>
                            <div>{userRankingData ? (
                            <div className='Weekly-rank-container'>
                                <div className='rank-counting'>{Score.indexOf(userRankingData)}</div>
                                <div className='rank-name-container'>{LoginUser.name}</div>
                                <div className='rank-score-container'>{userRankingData.Score}</div>
                            </div>
                            ) : (
                                <div>
                                    <p>poor network connection !</p>
                                </div>
                            )}</div>
                                {Score &&  Score.length > 0 ? (
                                  Score.slice(0,11).map((row, index) => (
                                    index > 0 && (
                                        <div className={index === 1 || index === 2 || index === 3 ? 'Weekly-rank-top-container' : 'Weekly-rank-container'}> 
                                       { index === 1 || index === 2 || index === 3 ? (
                                    <div className="medal-icon">
                                  {index === 1 && <img src={svg_1} alt="Gold Medal" />}
                                    {index === 2 && <img src={svg_2} alt="Silver Medal" />}
                                   {index === 3 && <img src={svg_3} alt="Bronze Medal" />}
                                  </div>
                                  ) : (
                                     <div className="rank-counting">
                                   {index}
                                      </div>
                                           )}
                                                                          
                                            <div className='rank-name-container'>
                                               <p>{row.Name}</p>
                                            </div>
                                            <div className={index === 1 || index === 2 || index === 3 ? 'rank-top-score-container' : 'rank-score-container'}>
                                              {
                                                row.Score
                                              }
                                            </div>
                                        </div>
                                    )
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3">No data available for Week {selectedWeek}</td>
                                    </tr>
                                )}
                        </table>
                    )}
                </div>
            </div>
            </div>
            </div>
            </>
    );
};

export default WeeklySheet;
