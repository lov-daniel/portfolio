import { useMediaQuery, useTheme, Box, Typography, Button, IconButton, Link } from "@mui/material";
import './pages-style/Experience.css'

import experience from '../constants/experienceList.jsx';
import ExperienceCard from "../components/ExperienceCard.jsx";

export default function Experience() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return <section
        id="experience"
        className="section-experience"
    >
        {/* Header */}
        <Typography
            sx={{
                padding: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xs: "6vw", sm: "4vw", md: "2vw" }
            }}
            color='#ffffff'>
            EXPERIENCE
        </Typography>

        {/* Save File Container */}
        <Box border="3px solid black" sx={{
            width: "85%",
            maxWidth: "100rem",
            margin: "0 auto",
        }}>
            <Box border="3px solid white">

                <Box
                    border={"3px solid black"}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        background: "#000000"
                    }}>
                    {Object.values(experience).map((experience, i) => (
                        <ExperienceCard details={experience} key={i} />
                    ))}
                </Box>

            </Box>

        </Box>

    </section>
}