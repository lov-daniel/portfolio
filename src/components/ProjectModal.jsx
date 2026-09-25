import { Modal, Typography, Box, Button } from "@mui/material";

export default function ProjectModal({ details, handleClose, open }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "92%", sm: "85%", md: "75%" },
          maxHeight: { xs: "85%", sm: "80%", md: "75%" },
          bgcolor: "#000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: 24,
          outline: "none",
          overflowY: "auto",
        }}
      >
        {/* header */}
        <Box
          sx={{
            width: "100%",
            flexShrink: 0,
            py: { xs: 1.5, sm: 2 },
            display: "flex",
            bgcolor: "yellow",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              marginLeft: { xs: "8px", sm: "10px" },
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              color: "#000",
            }}
          >
            + PROJECT DETAILS
          </Typography>

          <Button
            sx={{
              marginLeft: "auto",
              marginRight: { xs: "6px", sm: "10px" },
              fontSize: { xs: "0.9rem", sm: "1.2rem", md: "1.5rem" },
              minWidth: "auto",
              color: "red",
            }}
            onClick={handleClose}
          >
            [X] CLOSE
          </Button>
        </Box>

        {/* content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            alignItems: { xs: "center", sm: "flex-start" },
            textAlign: { xs: "center", sm: "left" },
            padding: "2vw",
            paddingBottom: "3vw",
          }}
        >
          {details?.img && (
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
                src={details.img}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          )}

          <Box
            sx={{
              marginLeft: { xs: 0, sm: details?.img ? "1rem" : 0 },
              marginTop: { xs: 2, sm: 0 },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "flex-start" },
              width: "100%",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: "1.15rem", sm: "1.3rem", md: "1.5rem" },
              }}
            >
              {details?.name}
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: "#ddd",
                maxWidth: { xs: "100%", sm: "700px" },
                fontSize: { xs: "0.9rem", sm: "1rem" },
                lineHeight: 1.6,
              }}
            >
              {details?.description}
            </Typography>

            {details?.tags?.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  gap: 1,
                  mt: 2,
                  maxWidth: { xs: "100%", sm: "700px" },
                }}
              >
                {details.tags.map((tag) => (
                  <Typography
                    key={tag}
                    sx={{
                      display: "inline-block",
                      lineHeight: 1.2,
                      fontSize: { xs: "0.7rem", sm: "0.8rem" },
                      padding: "3px 8px",
                      color: "#FFD700",
                      background: "#1a1a2e",
                      border: "1px solid #FFD700",
                    }}
                  >
                    {tag}
                  </Typography>
                ))}
              </Box>
            )}

            {details?.repo && details.repo !== "N/A" && (
              <Button
                href={details.repo}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mt: 3,
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  color: "#FFD700",
                  border: "2px solid #FFD700",
                  borderRadius: 0,
                  "&:hover": {
                    background: "#FFD700",
                    color: "#000",
                  },
                }}
              >
                ▸ VIEW REPO
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}