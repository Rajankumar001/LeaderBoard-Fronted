import axios from 'axios';
const baseUrl = "https://leaderboard-backend-1-1hjr.onrender.com/";
export const SigninAction=(user)=>async dispatch=>{
  dispatch({type:'SIGNIN_REQUEST'})
  try{
      const response=await axios.post(`${baseUrl}api/User/signin`,user);
      console.log("API Response:", response.data);
      dispatch({type:'SIGNIN_SUCCESS',payload:response.data})
      // window.location.href='/today'
   
  }catch(error){
     dispatch({type:'SIGNIN_ERROR',payload:error.message})
  }
}
export const logoutUser=()=>dispatch=>{
  localStorage.clear();
  window.location.href='/'
}
