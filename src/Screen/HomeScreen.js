import React from 'react'
import  HeaderPage from '../components/Header/Header'
import {Routes,Route} from 'react-router-dom';
import OverallSheet from '../components/OverallSheet/OverallSheet'
import WeeklySheet from '../components/WeeklyScoreSheet/WeeklySheet';
import MonthlySheet from '../components/MonthlyScoreSheet/MonthlySheet';
const HomeScreen = () => {
  return (
    <>
    <HeaderPage/>
    <Routes>
        <Route path='/today' element={<OverallSheet />} />
        <Route path='/weeks' element={<WeeklySheet />} />
        <Route path='/months' element={<MonthlySheet />} />
      </Routes>
    </>
  )
}

export default HomeScreen
