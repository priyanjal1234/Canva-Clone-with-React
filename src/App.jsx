import React from 'react'
import { Routes,Route } from "react-router-dom";
import Landing from './pages/Landing';
import Design from './pages/Design';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Landing />}/>
        <Route path='/design' element = {<Design />}/>
      </Routes>
    </div>
  )
}

export default App
