import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Main from './pages/Main.jsx';
import NavBar from './components/NavBar.jsx'
import Projects from './pages/Projects.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route index element={<Main/>}/>
          <Route path="projects" element={<Projects/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
