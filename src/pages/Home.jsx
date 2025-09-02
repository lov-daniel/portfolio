import { Box, Typography } from '@mui/material'
import Navbar from '../components/NavBar.jsx';

import About from './About.jsx';
import Projects from './Projects.jsx';
import Experience from './Experience.jsx';
import Contact from './Contact.jsx';

export default function Home() {

    return <>
        <Box>
            <Navbar activeTab="HOME"/>
            <About/>
            <Experience/>
            <Projects/>
            <Contact/>
        </Box>

    </>
}