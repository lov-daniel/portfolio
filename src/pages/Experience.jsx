import { Typography } from "@mui/material"

export default function Experience() {

    return <section
      id="experience"
      style={{
        height: "100vh",
        backgroundImage: "url('/images/sky.jpg')",
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
            color='#ffffff'>
            EXPERIENCE
        </Typography>

    </section>
}