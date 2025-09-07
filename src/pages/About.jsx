import { useMediaQuery, useTheme, Box, Typography, Button, IconButton, Link } from "@mui/material";
import './pages-style/About.css'

export default function About() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    console.log("isMobile", isMobile);

    return (
        <section
            id="home"
            className="section-about"
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
                        width: { xs: "50%", sm: "40%", md: "30%" },
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
                        fontSize: { xs: "2.4vw", sm: "1vw", md: "0.75vw", }
                    }}>
                        I’m <span className="name">Daniel Lov</span>, a passionate software
                        developer with a love for retro games, electronics, and hands-on
                        projects.
                    </Typography>
                    <Typography sx={{
                        color: "#FFFFFF",
                        fontSize: { xs: "2.4vw", sm: "1vw", md: "0.75vw" }
                    }}>
                        I'm a junior at UC San Diego studying computer science with ambitions in web development and embedded systems firmware development.
                    </Typography>

                    {/* Media box */}
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        gap: isMobile ? 2 : 5
                    }}>

                        <Button
                            size={ isMobile ? "large" : "small"}
                            variant="outlined"
                            component={Link}
                            href="./resume.pdf"
                            sx={{
                                color: "#ffffff",
                                maxWidth: isMobile ? "5rem" : "20rem",
                                fontSize: {xs: "2.4vw", md: "0.75vw"}
                            }}
                        >
                            Open Resume
                        </Button>

                        {!isMobile && <Box sx={{ flexGrow: 1 }} />}

                            <a className="media-container" target="blank" href="https://github.com/lov-daniel"><img className="media-button" src="./icons/github.png"></img> </a>
                            <a className="media-container" target="blank" href="https://www.linkedin.com/in/daniel-lov-512bb7292/"> <img className="media-button" src="./icons/linkedin.png"/> </a>
                    </Box>

                </Box>
            </Box>
        </section>
    );
}
