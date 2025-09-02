import { Box, Typography } from '@mui/material'
import Navbar from '../components/NavBar.jsx';

import About from './About.jsx';
import Projects from './Projects.jsx';

export default function Home() {

    return <>
        <Navbar activeTab="HOME"/>
        <Box>
            <About/>
            <Projects/>
        </Box>

    </>
}