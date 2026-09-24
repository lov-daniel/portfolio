import { Box, Typography, 
        Card, CardContent,
        List, ListItem
 } from '@mui/material';

 import './pages-style/Experience.css'
import ExperienceList from '../constants/experienceList';
import ExperienceCard from "../components/ExperienceCard.jsx"

export default function Experience(props) {
    const { setTargetPage } = props;

    const handleSelect = (profile) => {
        setTargetPage(profile)
    }

    return <div className='experience'> 
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
                width: { xs: "100%", sm: "4vw", md: "66%" },
                gap: 2, 
                padding: 2,
                margin: "0 auto", 
                background: "black",
                border: "4px solid yellow"
            }}
            p={2}>
            <Typography
            color='yellow'>
                ★ QUEST LOG ★
            </Typography>
            <Box
            sx={{
                display: 'flex', 
                alignItems: 'center', 
                gap: 1,
                width: { xs: "100%", sm: "4vw", md: "66%" },
            }}
            >
            <Typography sx={{fontSize: { xs: "1.1rem", sm: "1rem", md: "1.1rem" }, color: '#ffd700', display: "inline"}}>
                LVL 21
            </Typography>
            <Box sx={{ flex: 1, height: '10px', background: '#1a1a2e', border: '1px solid #444' }}>
                <Box sx={{
                height: '100%',
                width: '72%',
                background: 'repeating-linear-gradient(90deg, #ffd700 0px, #ffd700 8px, #c8a800 8px, #c8a800 10px)'
                }} />
            </Box>

            <Typography sx={{ fontSize: '13px', color: '#666' }}>
                2800 / 4000 XP
            </Typography>
            </Box>

        <List sx={{
            maxHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            width: "100%",
            overflowX: "hidden",
            gap: 2, 
            padding: 2,
            background: "black",
            scrollbarWidth: 'none',

            /* Hide scrollbar - IE/Edge */
            msOverflowStyle: 'none',

            /* Hide scrollbar - Chrome/Safari */
            '&::-webkit-scrollbar': {
            display: 'none',
            },
            }}>
            {Object.entries(ExperienceList).map(([key, experience]) => {
                return (
                    <ExperienceCard
                        key={key}
                        experience={experience}
                        onSelect={() => handleSelect(experience)}
                    />
                )
            })}
        </List>
        <Typography
        color='white'
        sx={{
            textAlign: "left",
            alignSelf: 'flex-start',
            width: "100%",
            display: "block"
        }}>
            ▲ ▼ SELECT QUEST
        </Typography>
        </Box>
    </div>
}