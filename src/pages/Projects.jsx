import { Typography, Box } from "@mui/material"
import { useState } from 'react'
import projects from '../constants/projectList.jsx';

import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {

  const [selectedCategory, setCategory] = useState("ALL");

  const categories = [
    "ALL",
    "FEATURED",
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",      
    backgroundImage: "url('/images/land.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: "2rem",
  }}
>
    
      <Typography
        sx={{
          textDecoration: 'underline',
          textAlign: "center",
          marginBottom: "0",
          fontSize: "2vw",
          color: '#000000ff',
        }}

        fontSize="2vw"
        color='#000000ff'>
        PROJECTS
      </Typography>

    <Box
      sx={{
          display: "flex",
          flexDirection: "column",
          width: "85vw",
          height: "85vh",
      }}
      p={2}>

      <Box sx={{
          display: "flex",
          alignItems: "flex-start", // align categories & grid at top
          gap: 2,
          height: "100%",
      }}>

        {/* categories */}
        <Box
          border="3px solid yellow"
          borderRadius={3}
          sx={{
            background: "#000000ff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignContent: "center",
            alignItems: "flex-start",
            gap: 5,
            height: "72vh",
            width: "50vw",
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

            fontSize="1.5vw"
            color='#ffffffff'>
            FILTER BY
          </Typography>

          {categories.map((category, i) => (
            <Typography key={i} sx={{ cursor: "pointer", fontSize: "1vw", color: category === selectedCategory ? "#FFD700" : "#FFFFFF" }} onClick={() => handleSelection(category)}>{category === selectedCategory ? `> ${category}` : category}</Typography>
          ))}
        </Box>

        {/* project list */}
        <Box
          border="3px solid yellow"
          borderRadius={3}
          sx={{
            display: "grid",
            background: "#000000ff",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 4,
            width: "100vw",
            height: "72vh",
            overflowY: "auto",
            gridAutoRows: 200,
            padding: 2,
          }}
        >
          {Object.values(projects).map((project, i) => (
            <ProjectCard details={project} filter={selectedCategory} key={i} />
          ))}
        </Box>

      </Box>
    </Box>

  </section>
}