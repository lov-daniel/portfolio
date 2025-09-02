import { Box, Button } from '@mui/material'

function NavBar(props) {

    const { activeTab } = props;

    const categories = [
      "HOME",
      "PROJECTS",
      "CONTACT ME"
    ]

    return <>

    <Box sx={{display: "flex"}}>
      {categories.map((category, i) => 
      <Button
      key={i}
      href={`#${category.toLowerCase()}`}
      sx={{color: category === activeTab ? '#5481e2ff' : '#FFFFFF', fontSize: "1vw", margin: "1rem"}}> {category} 
      </Button>)}
    </Box>
    </>

}

export default NavBar;