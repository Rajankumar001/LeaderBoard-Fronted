import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthlyAction } from '../../Action/LeaderBoardAction';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Button } from 'react-bootstrap';
import  image2 from '../../assets/leader_board_img.png'
import HeaderPage from '../Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import svg_1 from '../../assets/svg_1.png';
import svg_2 from '../../assets/svg_2.png';
import svg_3 from '../../assets/svg_3.png';
import './MonthlySheet.css';
import Loader from '../loader';
import DashboardScreen from '../Screens/DashboardScreen';
const MonthlySheet = () => {
    const dispatch = useDispatch();
    const monthlyScore = useSelector((state) => state.getMonthlyScore);
    const { MonthlyScore, loading, error } = monthlyScore;
    const storedLoginUser = localStorage.getItem('LoginUser');
    const LoginUser = storedLoginUser ? JSON.parse(storedLoginUser) : null;
    console.log("monthlystate",monthlyScore);
    console.log("MonthlyScore",MonthlyScore);
    const [selectedMonth, setSelectedMonth] = useState(2);
    useEffect(() => {
        dispatch(getMonthlyAction(selectedMonth));
    }, [dispatch, selectedMonth]);

    const handleMonthClick = (month) => {
        setSelectedMonth(month);
    };
    const handleclick=(month_no)=>{
                dispatch(getMonthlyAction(month_no))
             }
             const getUserRankingData = () => {
                if (MonthlyScore && LoginUser) {
                    return MonthlyScore.find(row => row.Name === LoginUser.name);
                }
                return null;
            };
        
            const userRankingData = getUserRankingData();
    return (
        <>
          {/* <HeaderPage/> */}
          <div className='Monthly-Dashboard-container'>
            <DashboardScreen/>
          <div className='Monthly-main-container'>
            <HeaderPage/>
            <div className="Monthly-container">
                <div className='Mobile-responsive-monthly'>
         <ButtonGroup aria-label="Basic example">
        <Button onClick={() => handleclick(1)} className='responsive-button-monthly'>Month 1</Button>
        <Button onClick={() => handleclick(2)}className='responsive-button-monthly'>Month 2</Button>
    </ButtonGroup>
    </div> 
                <div className="sidebar ">
                    {[...Array(2)].map((_, index) => {
                        const month = 2 - index;
                        return (
                            <button
                                key={index}
                                className={`month-button ${selectedMonth === month ? 'active' : ''} month-leaderboard-button`}
                                onClick={() => handleMonthClick(month)}
                            >
                                Month {month}

                            </button>
                        );
                    })}
                </div>
                <div className="Monthly-rank">
                    {loading ? (
                       <Loader/>
                    ) : error ? (
                        <p className="error">Error: {error}</p>
                    ) : (
                        <table>
                             <div>{userRankingData ? (
                            <div className='rank-container'>
                                <div className='rank-counting'>{MonthlyScore.indexOf(userRankingData)}</div>
                                <div className='rank-name-container'>{userRankingData.Name}</div>
                                <div className='rank-score-container'>{userRankingData.Score}</div>
                            </div>
                            ) : (
                                <div>
                                    <p>User is not present</p>
                                </div>
                            )}</div>
                                {MonthlyScore &&  MonthlyScore.length > 0 ? (
                                  MonthlyScore.slice(0,11).map((row, index) => (
                                    index > 0 && (
                                        <div className={index === 1 || index === 2 || index === 3 ? 'rank-top-container' : 'rank-container'}> 
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
                                        <td colSpan="3">No data available for Month {selectedMonth}</td>
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

export default MonthlySheet;
