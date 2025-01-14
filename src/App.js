import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signin from './components/login/Userlogin';
import OverallSheet from './components/OverallSheet/OverallSheet.js'
import './App.css';
import Navbarpage from './components/Navbar/Navbar';
import WeeklySheet from './components/WeeklyScoreSheet/WeeklySheet';
import MonthlySheet from './components/MonthlyScoreSheet/MonthlySheet';
import HomeScreen from './Screen/HomeScreen.js';
function App() {
  return (
    <div className='app-container'>
     <BrowserRouter>
    <Navbarpage/>
    <Routes>
    <Route  path='/today' Component={OverallSheet} exact/>
    <Route  path='/weeks' Component={WeeklySheet} exact/>
    <Route  path='/months' Component={MonthlySheet} exact/>
    <Route  path='/' Component={Signin} exact/>
    <Route  path='/home' Component={HomeScreen} exact/>
    </Routes>
    </BrowserRouter> 
    </div>
  );
}
export default App;