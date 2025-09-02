import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { useState } from 'react';

import Home from './pages/Home.jsx';
import Start from './pages/Start.jsx'
import Projects from './pages/Projects.jsx'


function App() {
  const [targetPage, setTargetPage] = useState("start");

  const pageMap = {
    "start": <Start setTargetPage={setTargetPage}/>,
    "home": <Home setTargetPage={setTargetPage}/>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={pageMap[targetPage]}/>
        <Route path="home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
