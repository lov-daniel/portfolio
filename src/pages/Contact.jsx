import { Typography } from "@mui/material"

export default function Contact() {

    return <section
      id="contact"
      style={{
        height: "100vh",
        backgroundImage: "url('/images/cave.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
            <Typography
            sx={{
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
            fontSize="2vw"
            color='#ffffffff'>
            CONTACT ME
        </Typography>

    </section>
}