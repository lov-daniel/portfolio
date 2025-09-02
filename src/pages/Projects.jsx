import { Typography, Box } from "@mui/material"
import { useState } from 'react'

export default function Projects() {

  const [selectedCategory, setCategory] = useState();

  const categories = [
    "GAMES",
    "UTILITY",
    "ELECTRONICS",
    "SCHOOL",
    "WORK IN PROGRESS"
  ]

  const handleSelection = (category) => {
    console.log(category);
    setCategory(category);
  }

  return <section
    id="projects"
    style={{
      height: "100vh",
      backgroundImage: "url('/images/land.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}

  >
    <Typography
      sx={{
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      fontSize="2vw"
      color='#000000ff'>
      PROJECTS
    </Typography>

    <Box
      border="3px solid black"
      borderRadius={3}
      sx={{
        display: "flex",
        background: "#000000ff",
        flexDirection: "column",
        width: "150rem",
        height: "50rem",
        margin: "0 auto"
      }}
      p={2}>

      <Typography
        sx={{
          padding: "1rem",
          textDecoration: 'underline',
          alignSelf: "center",
          justifySelf: "center",
          display: "flex",
          margin: "0 auto"
        }}

        fontSize="2vw"
        color='#ffffffff'>
        INVENTORY
      </Typography>
      <Box sx={{
        display: "flex"
      }}>

        {/* categories */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            gap: 5,
            width: "33%",
          }}
          p={2}>
          {categories.map((category, i) => (
            <Typography key={i} sx={{ fontSize: "2rem", color: "#FFFFFF" }} onClick={() => handleSelection(category)}>{category === selectedCategory ? `> ${category}` : category}</Typography>
          ))}
        </Box>
        

      </Box>

    </Box>

  </section>
}