import { Typography } from "@mui/material"

export default function Projects() {

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

    </section>
}