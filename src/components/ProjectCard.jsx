import { Box, Typography } from "@mui/material";
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
            <Box
                onClick={handleOpen}
                sx={{
                    width: "100%",
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "flex-start", sm: "center" },
                    justifyContent: "space-between",
                    gap: 1,
                    borderLeft: "3px solid #FFD700",
                    backgroundColor: "#000",
                    cursor: "pointer",
                    padding: "0.75rem 1rem",
                    "&:hover": {
                        boxShadow: "0 0 20px #FFD700",
                        transform: "scale(1.01)",
                        transition: "all 0.2s ease-in-out",
                    },
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Typography sx={{ color: "#FFD700", fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                        ▸
                    </Typography>
                    <Typography sx={{ color: "#fff", fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                        {details.name}
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, pl: { xs: "1.75rem", sm: 0 } }}>
                    {details.tags.map((tag) => (
                        <Typography
                            key={tag}
                            sx={{
                                display: "inline-block",
                                lineHeight: 1.2,
                                fontSize: { xs: "0.65rem", sm: "0.7rem" },
                                padding: "2px 6px",
                                color: "#FFD700",
                                background: "#1a1a2e",
                                border: "1px solid #FFD700",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {tag}
                        </Typography>
                    ))}
                </Box>
            </Box>
        </>
    );
}