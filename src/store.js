import {legacy_createStore,combineReducers,applyMiddleware} from 'redux'
import {thunk }from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension';
import { SigninReducer } from './Reducer/RegistrationReducer';
import { getOverallScore, getWeeklyScore } from './Reducer/LeaderboardReducer';
import { getMonthlyScore } from './Reducer/LeaderboardReducer';


 const rootReducer=combineReducers({
    SigninReducer:SigninReducer,
    getWeeklyScore: getWeeklyScore,
    getMonthlyScore:getMonthlyScore,
    getOverallScore:getOverallScore,
 })
 const currentUser=localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')):null;
 const initialstate={
   otpVerifyReducer:{
      currentUser:currentUser
   }
 }
 const Middleware=[thunk];
 const store=legacy_createStore(
    rootReducer,
    initialstate,
    applyMiddleware(...Middleware)
 )
 export default store;