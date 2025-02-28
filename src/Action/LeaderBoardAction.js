import axios from 'axios';
const baseUrl = "https://leaderboard-backend-2-rmx2.onrender.com/"
// const baseUrl = "http://localhost:8000/"
export const getWeeklyAction=(week_no)=>async dispatch=>{
    dispatch({type:'WEEKLY_REQUEST'})
    try{
      const response=await axios.get(`${baseUrl}api/leaderboard/${week_no}`);
      console.log(`${baseUrl}api/leaderboard/${week_no}`);
      console.log("response data",response);
 dispatch({type: 'WEEKLY_SUCCESS',payload: response.data});
    }catch(err){
       dispatch({type:'WEEKLY_ERROR',payload:err})
    }
}

export const getMonthlyAction=(month_no)=>async dispatch=>{
   dispatch({type:'MONTHLY_REQUEST'})
   try{
     const response=await axios.get(`${baseUrl}api/leaderboard/month/${month_no}`);
     console.log(`${baseUrl}api/leaderboard/month/${month_no}`);
     console.log("response data",response);
     dispatch({type: 'MONTHLY_SUCCESS',payload: response.data});
   }catch(err){
      dispatch({type:'MONTHLY_ERROR',payload:err})
   }
}

export const getOverallAction=()=>async dispatch=>{
   dispatch({type:'OVERALL_REQUEST'})
   try{
     const response=await axios.get(`${baseUrl}api/leaderboard/overall/today`);
     console.log(`${baseUrl}api/leaderboard/overall/today`);
     console.log("response data",response);
     dispatch({type: 'OVERALL_SUCCESS',payload: response.data});
   }catch(err){
      dispatch({type:'OVERALL_ERROR',payload:err})
   }
}
