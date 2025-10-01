import { Box, Typography } from '@mui/material'

export default function ExperienceCard(props) {
    
    const { details } = props;

    console.log(details)

    return (
        
        <Box>
            <Typography 
            sx={{fontSize: { xs: "3vw", sm: "2vw", md: "1vw" }}}
            color='#ffffffff'>
                {details.img ? <img src={details.img}/> : <></>}
                {details.name} — {details.organization}
            </Typography>
        </Box>
    );
}