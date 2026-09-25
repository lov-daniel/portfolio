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
    setCategory(category);
  }

  return <section
  id="projects"
  style={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",      
    backgroundImage: "url('/images/land.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: "2rem",
    paddingBottom: "2rem",
  }}
>
    
      <Typography
        sx={{
          textDecoration: 'underline',
          textAlign: "center",
          marginBottom: "1rem",
          fontSize: { xs: "6vw", sm: "4vw", md: "2vw" },
          color: '#000000ff',
        }}
        color='#000000ff'>
        PROJECTS
      </Typography>

    <Box
      sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "95vw", md: "85vw" },
          minHeight: { xs: "auto", md: "85vh" },
      }}
      p={2}>

      <Box sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
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
            flexDirection: { xs: "row", md: "column" },
            justifyContent: "flex-start",
            alignContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
            gap: { xs: 2, md: 5 },
            height: { xs: "auto", md: "72vh" },
            width: { xs: "100%", md: "22%" },
            overflowX: { xs: "auto", md: "visible" },
            flexShrink: 0,
          }}
          p={2}>

          <Typography
            sx={{
              padding: { xs: "0.25rem", md: "1rem" },
              textDecoration: 'underline',
              alignSelf: "center",
              justifySelf: "center",
              display: "flex",
              margin: { xs: 0, md: "0 auto" },
              fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.5vw" },
              flexShrink: 0,
            }}
            color='#ffffffff'>
            FILTER BY
          </Typography>

          {categories.map((category, i) => (
            <Typography
              key={i}
              sx={{
                cursor: "pointer",
                whiteSpace: "nowrap",
                flexShrink: 0,
                fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1vw" },
                color: category === selectedCategory ? "#FFD700" : "#FFFFFF"
              }}
              onClick={() => handleSelection(category)}
            >
              {category === selectedCategory ? `> ${category}` : category}
            </Typography>
          ))}
        </Box>

        {/* project list */}
        <Box
          border="3px solid yellow"
          borderRadius={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            background: "#000000ff",
            gap: 2,
            width: { xs: "100%", md: "78%" },
            height: { xs: "60vh", md: "72vh" },
            overflowY: "auto",
            overflowX: "hidden",
            padding: 2,
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
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