import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

// component imports
import Navbar from './components/navbar';

// pages
import Main_Page from './pages/main';
import Contact_Page from './pages/contact';
import Projects_Page from './pages/projects';

function App() {
	return (
		<div>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navbar/>}>
					<Route index element={<Main_Page/>}/>
					<Route path="contact" element={<Contact_Page/>}/>
					<Route path="projects" element={<Projects_Page/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
		</div>
	);	
}

export default App
