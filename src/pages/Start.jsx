import { Box, Typography, Card, 
         CardContent
 } from '@mui/material';

import selectAudio from '../assets/click.wav'
import { useState } from 'react';


export default function Start(props) {
    const { setTargetPage } = props;
    const [audio] = useState(new Audio(selectAudio))

    const handleSelect = (profile) => {
        audio.play()
        setTargetPage(profile)
    }

    const profiles = {
        "profile1": {
            id: 1,
            name: "Daniel Lov",
            img: "/profile-photo.jpg",
            age: 20,
            year: "Junior",
            school: "UC San Diego",
            description: "Welcome to my portfolio — a playful, interactive space where creativity meets code!",
            targetPage: "home"
        },

        "profile2": {
            id: 2,
            name: "PROJECT SPACE",
            description: "Here, you’ll find a mix of web development, embedded systems experiments, and fun tech experiments, all presented in a style inspired by classic arcade games.",
            targetPage: "projects"
        },

        "profile3": {
            id: 3
        }
    }

    return <>
        <Typography
            sx={{
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
            fontSize="2vw"
            color='#ffffff'>
            SELECT YOUR PROFILE
        </Typography>


        <Box 
            border="1px solid white"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center", 
                gap: 2, 
                padding: 2,
                width: "100rem",
                margin: "0 auto" 
            }}
            p={2}>
        
        {Object.entries(profiles).map(([key, profile]) => {

            return <Card
          key={profile.id}
          sx={{
            width: "100%",
            border: "3px solid #FFD700",
            backgroundColor: "#000",
            cursor: "pointer",
            "&:hover": {
              boxShadow: "0 0 20px #FFD700",
              transform: "scale(1.05)", // slight pop effect
              transition: "all 0.2s ease-in-out",
            },
          }}
          onClick={() => handleSelect(profile.targetPage)}
        >
                <CardContent>
                        {profile?.name === "Daniel Lov" ? 
                        <Box sx={{display: "flex", gap: "1rem"}}>
                            <img style={{ height: "auto", width: "15%", display: "block", borderRadius: "4px", }}src="/profile-photo.jpg"></img>
                            <Box>
                                <Typography fontSize="1vw" color='#FFFFFF'> {profile?.name} </Typography>
                                <Typography fontSize="1vw" color='#FFFFFF'> {`Age ${profile?.age}`} </Typography>
                                <Typography fontSize="1vw" color='#FFFFFF'> {`${profile?.year} @ ${profile?.school} (Computer Science)`} </Typography>
                                <Typography sx={{paddingTop: "1rem"}}fontSize="1vw" color='#FFFFFF'> {profile?.description} </Typography>
                            </Box>
                        </Box>
                        :
                        profile?.name === "PROJECT SPACE" ?
                        <Box sx={{display: "flex", gap: "1rem"}}>
                            <img style={{ height: "auto", width: "15%", display: "block", borderRadius: "4px", }}src="/space-invader.png"></img>
                            <Box>
                                <Typography fontSize="1vw" color='#FFFFFF'> {profile?.name} </Typography>
                                <Typography sx={{paddingTop: "1rem"}}fontSize="1vw" color='#FFFFFF'> {profile?.description} </Typography>
                            </Box>
                        </Box>
                        :
                        <Typography fontSize="1.5vw" color='#FFFFFF'>
                        "EMPTY PROFILE"
                        </Typography>
                        }
                </CardContent>
            </Card>
        })}

        </Box>
    </>
}