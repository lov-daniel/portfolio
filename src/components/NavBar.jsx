import { Box, Button } from '@mui/material'
import { Link } from 'react-scroll'; 
import { useState } from 'react';

export default function NavBar() {

    const [activeTab, setActiveTab] = useState("HOME")

    const handleChange = (category) => {
      setActiveTab(category);
    };

    const categories = [
      "HOME",
      "EXPERIENCE",
      "PROJECTS",
      "CONTACT"
    ]

    return <>

    <Box sx={{background: "#000000ff", display: "flex", position: "sticky", top: "0"}}>
      {categories.map((category, i) => 
      <Button
      key={i}
      sx={{color: category === activeTab ? '#5481e2ff' : '#FFFFFF', fontSize: { xs: "2.5vw", sm: "1vw", md: "1vw" }, margin: "1rem"}}> 
      
      <Link to={`${category.toLowerCase()}`} onClick={() => handleChange(category)} smooth={true} duration={500} offset={-70}> {category} </Link>
      
      </Button>)}
    </Box>
    </>
}