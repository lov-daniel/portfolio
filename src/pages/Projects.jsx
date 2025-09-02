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
      backgroundImage: "url('/images/land.jpg')",
      backgroundSize: "cover",
      justifyContent: "center",
      alignItems: "center",
      backgroundPosition: "center",
    }}

  >

    <Box
      border="3px solid black"
      borderRadius={3}
      sx={{
        display: "flex",
        background: "#000000ff",
        flexDirection: "column",
        justifySelf: "center",
        width: "85vw",
        height: "85vh",
        margin: "auto"
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
        PROJECTS
      </Typography>
      <Box sx={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        flexGrow: 1
      }}>

        {/* categories */}
        <Box
          border="3px solid white"
          borderRadius={3}
          sx={{
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

            fontSize="2vw"
            color='#ffffffff'>
            FILTER BY
          </Typography>

          {categories.map((category, i) => (
            <Typography key={i} sx={{ cursor: "pointer", fontSize: "2rem", color: category === selectedCategory ? "#FFD700" : "#FFFFFF" }} onClick={() => handleSelection(category)}>{category === selectedCategory ? `> ${category}` : category}</Typography>
          ))}
        </Box>

        {/* project list */}
        <Box
          border="3px solid white"
          borderRadius={3}
          sx={{
            display: "grid",
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