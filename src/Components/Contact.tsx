import React, { useState } from "react";
import {
    Grid,
    Typography,
    TextField,
    Button,
    Paper,
    Container,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    CircularProgress,
    Box,
} from "@mui/material";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        subject: '',
    });

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);

        const url = "https://script.google.com/macros/s/AKfycbya4z3x9QFspjmuus_ojhfu7s4V-xHAqzPBlWnV7e341OzJuu_jCS8xr_-L7YeCMd5l/exec"
        const params = new URLSearchParams(formData).toString();

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params,
        })
            .then((res) => res.text())
            .then(() => {
                setLoading(false);
                setOpen(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    subject: '',
                });
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    };

    return (
        <Container maxWidth="sm">
            <Paper
                elevation={3}
                sx={{
                    borderRadius: 4,
                    p: { xs: 3, sm: 5 },
                    background: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    gutterBottom
                    align="center"
                    sx={{
                        position: "relative",
                        mb: 4,
                        "&::after": {
                            content: '""',
                            display: "block",
                            width: 60,
                            height: 3,
                            backgroundColor: "#1976d2",
                            margin: "8px auto 0",
                            borderRadius: 2,
                        },
                    }}
                >
                    Get in Touch
                </Typography>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                label="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined"
                                required
                                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3, bgcolor: "#fff" } }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                label="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined"
                                required
                                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3, bgcolor: "#fff" } }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                label="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined"
                                required
                                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3, bgcolor: "#fff" } }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                label="Phone"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="📞 ▼"
                                fullWidth
                                variant="outlined"
                                required
                                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3, bgcolor: "#fff" } }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <TextField
                                label="Type your message here"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                fullWidth
                                multiline
                                rows={4}
                                variant="outlined"
                                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3, bgcolor: "#fff" } }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={loading}
                                sx={{
                                    mt: 2,
                                    py: 1.3,
                                    borderRadius: 3,
                                    fontWeight: "bold",
                                    fontSize: "1rem",
                                    textTransform: "none",
                                    background: "linear-gradient(to right, #1976d2, #42a5f5)",
                                    "&:hover": {
                                        background: "linear-gradient(to right, #1565c0, #2196f3)",
                                    },
                                }}
                            >
                                {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Submit"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>

            {/* Modal Dialog */}
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{
                    sx: {
                        borderRadius: 4,
                        px: { xs: 2, sm: 4 },
                        py: 3,
                        background: "rgba(30, 30, 30, 0.85)",
                        backdropFilter: "blur(12px)",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                        maxWidth: "sm",
                        mx: 2,
                        color: "#f1f1f1",
                    },
                }}
            >
                <DialogTitle
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mb: 1,
                        px: 0,
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#d4d200',
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: 20,
                            fontWeight: 'bold',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
                        }}
                    >
                        ✓
                    </Box>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            color: '#48c4c4',
                            fontSize: '1.25rem',
                        }}
                    >
                        Message Sent Successfully
                    </Typography>
                </DialogTitle>

                <DialogContent
                    sx={{
                        fontSize: 16,
                        color: 'wheat',
                        px: 0,
                        pt: 1,
                        pb: 2,
                    }}
                >
                    Thank you for reaching out! We've received your message and will get back to you shortly.
                </DialogContent>

                <DialogActions
                    sx={{
                        px: 0,
                        pt: 1,
                    }}
                >
                    <Button
                        onClick={() => setOpen(false)}
                        fullWidth
                        sx={{
                            color: '#ffffff',
                            backgroundColor: '#66bb6a',
                            fontWeight: 600,
                            borderRadius: 2,
                            py: 1.2,
                            textTransform: 'none',
                            fontSize: '1rem',
                            '&:hover': {
                                backgroundColor: '#43a047',
                            },
                        }}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Contact;
