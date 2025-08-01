import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    Paper,
    Divider,
    Container,
} from "@mui/material";

const Contact = () => {
    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Container maxWidth="lg">
                <Paper elevation={1} sx={{ borderRadius: 3, overflow: "hidden" }}>
                    <Grid container>
                        {/* Left Form */}
                        <Grid
                            size={{ xs: 12, md: 7 }}
                            sx={{
                                p: { xs: 3, sm: 4 },
                                bgcolor: "#f8fafc",
                            }}
                        >
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                Reach out to us
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField label="First Name *" fullWidth />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField label="Last Name *" fullWidth />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField label="Email *" fullWidth />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField label="Phone" fullWidth placeholder="📞 ▼" />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField
                                        label="Type your message here"
                                        fullWidth
                                        multiline
                                        rows={4}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 1, py: 1.2, fontWeight: "bold" }}
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Right Contact Info */}
                        <Grid
                            size={{ xs: 12, md: 5 }}
                            sx={{
                                bgcolor: "#f1f5f9",
                                p: 4,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                Contact
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <Typography>
                                500 Terry Francine Street
                                <br />
                                San Francisco, CA 94158
                            </Typography>
                            <Typography sx={{ mt: 2 }}>
                                Tel: 123-456-7890
                                <br />
                                Email: info@mysite.com
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};

export default Contact;
