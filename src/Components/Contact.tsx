import {
    Grid,
    Typography,
    TextField,
    Button,
    Paper,
    Container,
} from "@mui/material";

const Contact = () => {
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

                    <Grid container spacing={2}>
                        {[
                            { label: "First Name", sm: 6 },
                            { label: "Last Name", sm: 6 },
                            { label: "Email", sm: 6 },
                            { label: "Phone", sm: 6, placeholder: "📞 ▼" },
                        ].map((field, idx) => (
                            <Grid key={idx} size={{xs: 12, sm: field.sm}}>
                                <TextField
                                    label={field.label}
                                    placeholder={field.placeholder || ""}
                                    fullWidth
                                    variant="outlined"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: 3,
                                            bgcolor: "#fff",
                                        },
                                    }}
                                    required
                                />
                            </Grid>
                        ))}

                        <Grid size={{xs: 12}}>
                            <TextField
                                label="Type your message here"
                                fullWidth
                                multiline
                                rows={4}
                                variant="outlined"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: 3,
                                        bgcolor: "#fff",
                                    },
                                }}
                            />
                        </Grid>

                        <Grid size={{xs: 12}}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
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
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
    );
};

export default Contact;
