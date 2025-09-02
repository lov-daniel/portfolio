import { Box, Button } from '@mui/material'
import { Link, Element } from 'react-scroll'; 

function NavBar(props) {

    const { activeTab } = props;

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
      sx={{color: category === activeTab ? '#5481e2ff' : '#FFFFFF', fontSize: "1vw", margin: "1rem"}}> 
      
      <Link to={`${category.toLowerCase()}`} smooth={true} duration={500} offset={-70}> {category} </Link>
      
      </Button>)}
    </Box>
    </>

}

export default NavBar;