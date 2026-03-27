import { Box, Typography, 
        Card, CardContent,
        List, ListItem
 } from '@mui/material';

 import './pages-style/Experience.css'
import ExperienceList from '../constants/experienceList';

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
                {/* ill */}
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

                return <Card
            key={experience.id}
            sx={{
                width: "100%",
                flexShrink: 0,
                borderLeft: "3px solid #FFD700",
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
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
                        <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography
                            sx={{ fontSize: { xs: "1.1rem", sm: "1rem", md: "1.1rem" } }}
                            color="#fff"
                            fontWeight="bold"
                        >
                            {experience?.name}
                        </Typography>
                        {
                            experience?.status === "current" ?
                                <Typography sx={{ display: 'inline-block', fontSize:{ xs: "0.75rem", sm: "0.75rem" }, padding: '2px 6px', background: '#002211', color: '#00ff88', border: '1px solid #00ff88' }}>IN PROGRESS</Typography>
                            :
                            experience?.status === "upcoming" ?
                            <Typography sx={{
                                 display: 'inline-block',
                                  fontSize: { xs: "0.75rem", sm: "0.75rem" },
                                   padding: '2px 6px',
                                    background: '#002211', 
                                    color: '#205fd3',
                                     border: '1px solid #205fd3',
                                       animation: 'blink 1.2s step-end infinite',
                                        '@keyframes blink': {
                                            '50%': { opacity: 0.4 }
                                        }}}>
                                        NEW QUEST
                            </Typography>
                            :
                            <Typography sx={{ display: 'inline-block', fontSize: { xs: "0.75rem", sm: "0.75rem" }, padding: '2px 6px', background: '#002211', color: '#00ff88', border: '1px solid #00ff88' }}>COMPLETED</Typography>
                        }
                        </Box>

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
                        <Typography sx={{ color: '#ffd700', whiteSpace: 'nowrap' }}>
                        +200 EXP
                        </Typography>
                        </Box>
                    </CardContent>
                </Card>
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