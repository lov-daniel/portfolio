import { Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";

import ProjectModal from "./ProjectModal";

export default function ProjectCard({ details, filter }) {

    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    if (!details.tags.includes(filter) && filter !== "ALL") {
        return;
    }

    return (
        <>
            <ProjectModal details={details} open={openModal} handleClose={handleClose} />
            <Card
                sx={{
                    width: "100%",
                    aspectRatio: "1 / 1", 
                    backgroundColor: "#ffffffff",
                    borderRadius: 2,
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    cursor: "pointer",
                    "&:hover": {
                        boxShadow: "0 0 20px #FFD700",
                        transform: "scale(1.05)",
                        transition: "all 0.2s ease-in-out",
                    },
                }}
                onClick={handleOpen}
            >
                <CardContent>
                    <Typography sx={{ textAlign: "left", fontSize: "0.65vw" }}>
                        {details.name}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}
