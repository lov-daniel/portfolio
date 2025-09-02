import { Box, Typography } from '@mui/material'
import './pages-style/About.css';

export default function About() {

    return <section
      id="home"
      style={{
        height: "100vh",
        backgroundImage: "url('/images/space.jpg')",
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
            ABOUT ME
        </Typography>
        <Box
            border="3px solid white"
            sx={{
                display: "flex",
                alignItems: "center",
                width: "100rem",
                margin: "0 auto"
            }}
            p={2}>
            <img style={{ height: "auto", width: "25%", display: "block", borderRadius: "4px", alignContent: "center" }} src="/profile-photo.jpg"></img>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    width: "100rem",
                }}
                p={2}>
                <Typography sx={{ color: "#FFFFFF" }}>I’m <span className="name" >Daniel Lov</span>, a passionate software developer with a love for retro games, electronics, and hands-on projects.</Typography>
                <Typography sx={{ color: "#FFFFFF", paddingTop: "1rem" }}>Here, you’ll find a mix of web development, embedded systems experiments, and fun tech experiments, all presented in a style inspired by classic arcade games.</Typography>
                <Typography sx={{ color: "#FFFFFF", paddingTop: "1rem" }}>From building custom controllers and microcontroller projects to creating interactive web apps, I like to turn ideas into tangible experiences. Explore, play, and see what I’ve been building!</Typography>
            </Box>
        </Box>

    </section>
}