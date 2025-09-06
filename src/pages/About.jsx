import { Box, Typography } from "@mui/material";
import './pages-style/About.css'

export default function About() {
    return (
        <section
            id="home"
            style={{
                minHeight: "100vh",
                maxHeight: "50rem",
                width: "100%",
                backgroundImage: "url('/images/space.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Heading */}
            <Typography
                sx={{
                    padding: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: { xs: "6vw", sm: "4vw", md: "2vw" },
                }}
                color="#ffffff"
            >
                ABOUT ME
            </Typography>

            {/* Content container */}
            <Box
                border={"3px solid white"}
                sx={{
                    display: "flex",
                    backgroundColor: "#000000ff",
                    flexDirection: { xs: "column", md: "row" },
                    maxHeight: "40rem",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "80%",
                    maxWidth: "80rem",
                    margin: "0 auto",
                    padding: 2,
                }}
            >
                {/* Profile picture */}
                <Box
                    component="img"
                    src="/profile-photo.jpg"
                    alt="Profile photo"
                    sx={{
                        width: { xs: "50%", sm: "30%", md: "20%" },
                        height: "auto",
                        borderRadius: "8px",
                        marginBottom: { xs: 2, md: 0 },
                    }}
                />

                {/* Text content */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        width: "100%",
                        maxWidth: "50rem",
                        padding: 2,
                        textAlign: { xs: "center", md: "left" },
                    }}
                >
                    <Typography sx={{
                         color: "#FFFFFF", 
                         fontSize: { xs: "2.25vw", sm: "1vw", md: "1vw" }
                         }}>
                        I’m <span className="name">Daniel Lov</span>, a passionate software
                        developer with a love for retro games, electronics, and hands-on
                        projects.
                    </Typography>
                    <Typography sx={{
                         color: "#FFFFFF",
                         fontSize: { xs: "2.25vw", sm: "1vw", md: "1vw" }
                         }}>
                        Here, you’ll find a mix of web development, embedded systems
                        experiments, and fun tech experiments, all presented in a style
                        inspired by classic arcade games.
                    </Typography>
                    <Typography sx={{ 
                        color: "#FFFFFF",
                        fontSize: { xs: "2.25vw", sm: "1vw", md: "1vw" }
                         }}>
                        From building custom controllers and microcontroller projects to
                        creating interactive web apps, I like to turn ideas into tangible
                        experiences. Explore, play, and see what I’ve been building!
                    </Typography>
                </Box>
            </Box>
        </section>
    );
}
