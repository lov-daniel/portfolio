import { Box, Typography, 
        Card, CardContent,
        List, ListItem
 } from '@mui/material';

 import './pages-style/Experience.css'
import ExperienceList from '../constants/experienceList';
import { useState } from 'react';


export default function Experience(props) {
    const { setTargetPage } = props;

    const handleSelect = (profile) => {
        setTargetPage(profile)
    }

    return <div className='section-experience'> 
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
                Experience
            </Typography>


        <Box 
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center", 
                gap: 2, 
                padding: 2,
                margin: "0 auto" 
            }}
            p={2}>
        <List sx={{
            maxHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            border: "4px solid white",
            overflowX: "hidden",
            gap: 2, 
            padding: 2,
            background: "black"
            }}>
            {Object.entries(ExperienceList).map(([key, experience]) => {

                return <Card
            key={experience.id}
            sx={{
                width: "100%",
                flexShrink: 0,
                border: "3px solid #FFD700",
                backgroundColor: "#000",
                cursor: "pointer",
                "&:hover": {
                boxShadow: "0 0 20px #FFD700",
                transform: "scale(1.02)",
                transition: "all 0.2s ease-in-out",
                },
            }}
            onClick={() => handleSelect(experience.name)}
            >
                    <CardContent>
                    <Box
                        sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: { xs: "center", sm: "flex-start" },
                        textAlign: { xs: "center", sm: "left" },
                        gap: 2,
                        }}
                    >
                        {/* Image Container */}
                        <Box
                        sx={{
                            width: { xs: 120, sm: 80 },
                            height: { xs: 120, sm: 80 },
                            flexShrink: 0,
                            overflow: "hidden",
                            borderRadius: 2,
                        }}
                        >
                        <Box
                            component="img"
                            src={experience?.img}
                            sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            }}
                        />
                        </Box>

                        {/* Text Content */}
                        <Box sx={{ flex: 1 }}>
                        <Typography
                            sx={{ fontSize: { xs: "1.1rem", sm: "1rem", md: "1.1rem" } }}
                            color="#fff"
                            fontWeight="bold"
                        >
                            {experience?.name}
                        </Typography>

                        <Typography
                            sx={{ fontSize: { xs: "0.95rem", sm: "0.9rem" } }}
                            color="#ddd"
                        >
                            {experience?.organization}
                        </Typography>

                        <Typography
                            sx={{ fontSize: { xs: "0.85rem", sm: "0.85rem" } }}
                            color="#aaa"
                        >
                            {`${experience?.start} - ${experience?.end}`}
                        </Typography>
                        </Box>
                    </Box>
                    </CardContent>

                </Card>
            })}
        </List>

        </Box>
    </div>
}