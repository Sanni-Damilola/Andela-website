import React from 'react'

import {BrowserRouter, Route, Routes} from "react-router-dom"
import AboutComp from './Components/AboutComp'
import BusinessComp from './Components/BusinessComp'
import Header from './Components/Header'
import LandingComp from './Components/LandingComp'
import TechnologyExpertsComp from './Components/TechnologyExpertsComp'
// import Home from './Components/Home'
// import About from './Components/About'
// import Contact from './Components/Contact'

const App = () => {
  return (
   <BrowserRouter>
      <Header  />
      <Routes>
        <Route path='/' element={<LandingComp />}/>
        <Route path='expert' element={<TechnologyExpertsComp />}/>
        <Route path='business' element={<BusinessComp />}/>
        <Route path='about' element={<AboutComp />}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App