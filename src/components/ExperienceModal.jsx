import { Modal, Typography, Box, Button } from "@mui/material";

export default function ExperienceModal({ details, handleClose, open }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute", // important
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // centers the box
          width: { xs: "92%", sm: "85%", md: "75%" },
          maxHeight: { xs: "85%", sm: "80%", md: "75%" },
          bgcolor: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: 24,
          outline: "none",
          overflowY: "auto",
        }}
      >
        <Box
            sx={{
                width: "100%",
                flexShrink: 0,
                py: { xs: 1.5, sm: 2 },
                display: "flex",
                bgcolor: "yellow",
                alignItems: "center"
            }}>
            <Typography sx={{
                marginLeft: { xs: "8px", sm: "10px" },
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" }
            }}> 
                + QUEST DETAILS
            </Typography>

            <Button sx={{
                marginLeft: "auto",
                marginRight: { xs: "6px", sm: "10px" },
                fontSize: { xs: "0.9rem", sm: "1.2rem", md: "1.5rem" },
                minWidth: "auto",
                color: "red"
            }} onClick={handleClose}>
                [X] CLOSE
            </Button>
        </Box>
        <Box
        sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            justifyContent: "flex-start",
            alignItems: { xs: "center", sm: "flex-start" },
            textAlign: { xs: "center", sm: "left" },
            padding: "2vw",
            paddingBottom: "3vw",
        }}
        >
        <Box
        sx={{
            width: { xs: 120, sm: 150, md: 200 },
            aspectRatio: "1 / 1",
            overflow: "hidden",
            borderRadius: 2,
            flexShrink: 0,
        }}
        >
        <Box
            component="img"
            src={details?.img}
            sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            }}
        />
        </Box>
        <Box sx={{
            marginLeft: { xs: 0, sm: "1rem" },
            marginTop: { xs: 2, sm: 0 },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" },
            width: "100%",
        }}>
        <Box sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: 1,
        }}>
        <Typography sx={{
            color: "white",
            fontSize: { xs: "1.15rem", sm: "1.3rem", md: "1.5rem" }
        }}>{details?.name}</Typography>
        {
            details?.status === "current" ?
                <Typography sx={{ display: 'inline-block', lineHeight: 1.2, fontSize:{ xs: "0.75rem", sm: "0.75rem" }, padding: '2px 6px', background: '#002211', color: '#00ff88', border: '1px solid #00ff88' }}>IN PROGRESS</Typography>
            :
            details?.status === "upcoming" ?
            <Typography sx={{
                    display: 'inline-block',
                    lineHeight: 1.2,
                    fontSize: { xs: "0.75rem", sm: "0.75rem" },
                    padding: '2px 6px',
                    background: '#002211', 
                    color: '#205fd3',
                        border: '1px solid #205fd3',
                        animation: 'blink 1.2s step-end infinite',
                        '@keyframes blink': {
                            '50%': { opacity: 0.4 }
                        }}}>
                        INCOMING
            </Typography>
            :
            <Typography sx={{ display: 'inline-block', lineHeight: 1.2, fontSize: { xs: "0.75rem", sm: "0.75rem" }, padding: '2px 6px', background: '#002211', color: '#00ff88', border: '1px solid #00ff88' }}>COMPLETED</Typography>
        }
        </Box>
        <Typography sx={{
            color: "grey",
            fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" }
        }}>{details?.organization} · {details?.start} - {details?.end}</Typography>
        <Typography sx={{ mt: 2, color: "white", maxWidth: { xs: "100%", sm: "700px" }, fontSize: { xs: "0.9rem", sm: "1rem" }, lineHeight: 1.6 }}>{details?.description}</Typography>
        {details?.technologies?.length > 0 && (
            <Box sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: { xs: "center", sm: "flex-start" },
                gap: 1,
                mt: 2,
                maxWidth: { xs: "100%", sm: "700px" },
            }}>
                {details.technologies.map((tech) => (
                    <Typography
                        key={tech}
                        sx={{
                            display: "inline-block",
                            lineHeight: 1.2,
                            fontSize: { xs: "0.7rem", sm: "0.8rem" },
                            padding: "3px 8px",
                            color: "#ffd700",
                            background: "#1a1a2e",
                            border: "1px solid #ffd700",
                        }}
                    >
                        {tech}
                    </Typography>
                ))}
            </Box>
        )}
        </Box>
        </Box>
      </Box>
    </Modal>
  );
}