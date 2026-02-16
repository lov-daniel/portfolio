import { Box, Typography } from '@mui/material'

export default function ExperienceCard(props) {
    
    const { details } = props;

    console.log(details)

    return (
        
        <Box>
            <Typography 
            sx={{display: "flex", border: "solid white 5px", alignContent: "center", gap:"1.5vw", fontSize: { xs: "2vw", sm: "vw", md: "1vw" }}}
            color='#ffffffff'>
                {details.img ? 
                    <Box
                        component="img"
                        src={details.img}
                        alt={details.organization}
                        sx={{
                            borderRight: "solid white 5px",
                            width: { xs: "30%", sm: "20%", md: "10%" },
                            height:"100%",
                            marginBottom: { xs: 2, md: 0 },
                        }}/> : <></>}
                <Box>
                    <Typography sx={{fontSize: { xs: "2vw", sm: "1vw", md: "1vw" }}}>
                        {details.name}
                        <br/>
                        {details.organization}
                    </Typography>
                    <Box>
                        {details.start} — {details.end}
                    </Box>
                </Box>
            </Typography>
        </Box>
    );
}