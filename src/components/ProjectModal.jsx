import { Modal, Typography, Box, Button } from "@mui/material";

export default function ProjectModal({ details, handleClose, open }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute", // important
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // centers the box
          width: "75%",
          height: "75%",
          bgcolor: "#ffffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 4,
          boxShadow: 24,
          outline: "none",
        }}
      >
        <Typography sx={{}}>{details.name}</Typography>
        <Typography sx={{ mt: 2 }}>{details.description}</Typography>
      </Box>
    </Modal>
  );
}
