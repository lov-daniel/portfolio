import { Typography, Box, TextField, Button } from "@mui/material"
import { useState } from "react"
import emailjs from "@emailjs/browser"

const EMAIL = "lovdaniel11@gmail.com";
const PHONE = "+1 (626) 636-6294";
const LINKEDIN = "https://www.linkedin.com/in/daniel-lov-512bb7292/";

const EMAILJS_SERVICE_ID = "service_zjzk5qb";
const EMAILJS_TEMPLATE_ID = "template_m1pfj0b";
const EMAILJS_PUBLIC_KEY = "u5u5WReuqJ92z7beq";

const contactLinks = [
    { label: "EMAIL", value: EMAIL, href: `mailto:${EMAIL}` },
    { label: "PHONE", value: PHONE, href: `tel:${PHONE.replace(/[^+\d]/g, "")}` },
    { label: "LINKEDIN", value: LINKEDIN.replace(/^https?:\/\//, ""), href: LINKEDIN },
];

export default function Contact() {

    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const handleChange = (field) => (e) => {
        setForm({ ...form, [field]: e.target.value });
    };

    const handleSend = async () => {
        setStatus("sending");
        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message,
                },
                EMAILJS_PUBLIC_KEY
            );
            setStatus("success");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            console.error("EmailJS send failed:", err);
            setStatus("error");
        }
    };

    return <section
      id="contact"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: "url('/images/cave.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}>
            <Typography
            sx={{
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xs: "6vw", sm: "4vw", md: "2vw" },
            }}
            color='#ffffffff'>
            CONTACT ME
        </Typography>

        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: { xs: "92%", sm: "80%", md: "60%" },
                gap: 2,
                padding: 2,
                margin: "0 auto",
                background: "black",
                border: "4px solid yellow"
            }}
        >
            <Typography color="yellow">
                ★ CONTACT INFO ★
            </Typography>

            {/* contact links, inventory-row style to match Experience/Projects */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, width: "100%" }}>
                {contactLinks.map((item) => (
                    <Box
                        key={item.label}
                        component="a"
                        href={item.href}
                        target={item.label === "LINKEDIN" ? "_blank" : undefined}
                        rel={item.label === "LINKEDIN" ? "noopener noreferrer" : undefined}
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            alignItems: { xs: "flex-start", sm: "center" },
                            gap: { xs: 0.25, sm: 1.5 },
                            textDecoration: "none",
                            borderLeft: "3px solid #FFD700",
                            backgroundColor: "#000",
                            padding: "0.75rem 1rem",
                            cursor: "pointer",
                            "&:hover": {
                                boxShadow: "0 0 20px #FFD700",
                                transform: "scale(1.01)",
                                transition: "all 0.2s ease-in-out",
                            },
                        }}
                    >
                        <Typography sx={{ color: "#FFD700", fontSize: { xs: "0.8rem", sm: "0.9rem" }, minWidth: "90px" }}>
                            ▸ {item.label}
                        </Typography>
                        <Typography sx={{ color: "#fff", fontSize: { xs: "0.85rem", sm: "0.95rem" } }}>
                            {item.value}
                        </Typography>
                    </Box>
                ))}
            </Box>

            {/* message form */}
            <Typography color="yellow" sx={{ mt: 3, alignSelf: "flex-start" }}>
                ★ SEND A MESSAGE ★
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}>
                <TextField
                    label="Name"
                    variant="outlined"
                    value={form.name}
                    onChange={handleChange("name")}
                    fullWidth
                    sx={textFieldStyle}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    value={form.email}
                    onChange={handleChange("email")}
                    fullWidth
                    sx={textFieldStyle}
                />
                <TextField
                    label="Message"
                    variant="outlined"
                    value={form.message}
                    onChange={handleChange("message")}
                    multiline
                    rows={4}
                    fullWidth
                    sx={textFieldStyle}
                />
                <Button
                    onClick={handleSend}
                    disabled={!form.email || !form.message || status === "sending"}
                    sx={{
                        alignSelf: { xs: "stretch", sm: "flex-start" },
                        fontSize: { xs: "0.85rem", sm: "1rem" },
                        color: "#FFD700",
                        border: "2px solid #FFD700",
                        borderRadius: 0,
                        "&:hover": {
                            background: "#FFD700",
                            color: "#000",
                        },
                        "&.Mui-disabled": {
                            color: "#555",
                            border: "2px solid #555",
                        },
                    }}
                >
                    {status === "sending" ? "▸ SENDING..." : "▸ SEND MESSAGE"}
                </Button>

                {status === "success" && (
                    <Typography sx={{ color: "#00ff88", fontSize: "0.9rem" }}>
                        ✓ Message sent — thanks, I'll get back to you soon.
                    </Typography>
                )}
                {status === "error" && (
                    <Typography sx={{ color: "#ff5555", fontSize: "0.9rem" }}>
                        ✕ Something went wrong sending that — try emailing me directly instead.
                    </Typography>
                )}
            </Box>
        </Box>

    </section>
}

const textFieldStyle = {
    "& .MuiInputBase-input": { color: "#fff" },
    "& .MuiInputLabel-root": { color: "#aaa" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#FFD700" },
    "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "#555" },
        "&:hover fieldset": { borderColor: "#FFD700" },
        "&.Mui-focused fieldset": { borderColor: "#FFD700" },
    },
};