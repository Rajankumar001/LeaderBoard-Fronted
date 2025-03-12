import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getOverallAction } from "../../Action/LeaderBoardAction";
import image2 from "../../assets/leader_board_img.png";
import "bootstrap/dist/css/bootstrap.min.css";
import svg_1 from "../../assets/svg_1.png";
import svg_2 from "../../assets/svg_2.png";
import svg_3 from "../../assets/svg_3.png";
import Loader from "../loader";
import HeaderPage from "../Header/Header";
import "./OverallSheet.css";
import DashboardScreen from "../Screens/DashboardScreen";
const OverallSheet = () => {
  const dispatch = useDispatch();
  const Score = useSelector((state) => state.getOverallScore);
  const { OverallScore, loading, error } = Score;
  const [LoginUser, setLoginUser] = useState(null);
  useEffect(() => {
    console.log("entered in overallsheet");
    const storedLoginUser = localStorage.getItem("LoginUser");
    console.log("localstorage get Item", localStorage.getItem("LoginUser"));
    if (storedLoginUser) {
      setLoginUser(JSON.parse(storedLoginUser));
    }
  }, []);
  const getUserRankingData = () => {
    if (OverallScore && LoginUser) {
      return OverallScore.find((row) => row.Name === LoginUser.name);
    }
    return null;
  };
  const userRankingData = getUserRankingData();
  useEffect(() => {
    dispatch(getOverallAction());
  }, [dispatch]);
  return (
    <>
      <div className="overall-Dashboard-container">
        <DashboardScreen />
        <div className="overall-main-container">
          <HeaderPage />
          <div className="overall-container">
            <div className="overall-rank">
              {loading ? (
                <Loader />
              ) : error ? (
                <p className="error">Error: {error}</p>
              ) : (
                <table className="overall-table">
                  <div>
                    {userRankingData ? (
                      <div className="overall-rank-container">
                        <div className="rank-counting">
                          {OverallScore.indexOf(userRankingData)}
                        </div>
                        <div className="rank-name-container">
                          {LoginUser.name}
                        </div>
                        <div className="rank-score-container">
                          {userRankingData.Score}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <p>User is not present</p>
                      </div>
                    )}
                  </div>
                  {OverallScore && OverallScore.length > 0 ? (
                    OverallScore.slice(0, 11).map(
                      (row, index) =>
                        index > 0 && (
                          <div
                            className={
                              index === 1 || index === 2 || index === 3
                                ? "overall-rank-top-container"
                                : "overall-rank-container"
                            }
                          >
                            {index === 1 || index === 2 || index === 3 ? (
                              <div className="medal-icon">
                                {index === 1 && (
                                  <img src={svg_1} alt="Gold Medal" />
                                )}
                                {index === 2 && (
                                  <img src={svg_2} alt="Silver Medal" />
                                )}
                                {index === 3 && (
                                  <img src={svg_3} alt="Bronze Medal" />
                                )}
                              </div>
                            ) : (
                              <div className="rank-counting">{index}</div>
                            )}
                            <div className="rank-name-container">
                              <p>{row.Name}</p>
                            </div>
                            <div
                              className={
                                index === 1 || index === 2 || index === 3
                                  ? "rank-top-score-container"
                                  : "rank-score-container"
                              }
                            >
                              {row.Score}
                            </div>
                          </div>
                        )
                    )
                  ) : (
                    <tr>
                      <td colSpan="3">No data available for today</td>
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
export default OverallSheet;
