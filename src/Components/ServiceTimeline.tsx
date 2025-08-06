import React, { useState } from "react";
import {
    Box,
    Typography,
    Paper,
    Container,
    useMediaQuery,
    useTheme,
    Stack,
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from "@mui/lab";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Dummy service data
const services = [
    {
        title: "Engineering & Manufacturing",
        description: "Optimize production workflows, enhance quality, and drive efficiency.",
    },
    {
        title: "Procurement & Sourcing",
        description: "Leverage global vendor networks and strategic sourcing expertise.",
    },
    {
        title: "Supply Chain & Quality",
        description: "End-to-end visibility, quality audits, and logistics support.",
    },
    {
        title: "Digital Transformation",
        description: "Adopt AI, IoT, and data platforms for smart operations.",
    },
    {
        title: "Sustainability & Compliance",
        description: "Integrate green practices, monitor ESG metrics, and ensure regulatory compliance.",
    },
    {
        title: "Workforce & Capability Building",
        description: "Empower teams through targeted training, upskilling, and change management.",
    },
];


export default function ServiceTimeline() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [open, setOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<{ title: string; description: string } | null>(null);

    const handleOpen = (service: { title: string; description: string }) => {
        setSelectedService(service);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedService(null);
    };

    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            {/* Heading */}
            <Box display="flex" justifyContent="center" alignItems="center" mb={6}>
                <Paper
                    elevation={6}
                    sx={{
                        px: 5,
                        py: 2.5,
                        borderRadius: "16px",
                        color: "#48c4c4",
                        fontWeight: "bold",
                        fontSize: "3rem",
                        textAlign: "center",
                        letterSpacing: "1px",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        backgroundColor: "rgba(255, 255, 255, 0.06)",
                        backdropFilter: "blur(8px)",
                        "&:hover": {
                            transform: "scale(1.05)",
                        },
                    }}
                >
                    Our Services
                </Paper>
            </Box>

            {/* Mobile view */}
            {isMobile ? (
                <Stack spacing={4}>
                    {services.map((service, idx) => (
                        <Paper
                            key={idx}
                            elevation={3}
                            onClick={() => handleOpen(service)}
                            sx={{
                                p: 3,
                                textAlign: "center",
                                cursor: "pointer",
                                backgroundColor: "rgba(255, 255, 255, 0.06)",
                                backdropFilter: "blur(10px)",
                            }}
                        >
                            <Typography variant="h6" color="primary" gutterBottom sx={{
                                color: '#48c4c4',

                            }}>
                                {service.title}
                            </Typography>
                            <Typography sx={{ color: 'wheat' }}>{service.description}</Typography>
                        </Paper>
                    ))}
                </Stack>
            ) : (
                // Desktop Timeline view
                <Timeline position="alternate">
                    {services.map((service, idx) => (
                        <TimelineItem key={idx}>
                            <TimelineSeparator>
                                <TimelineDot color="primary" style={{ background: '#48c4c4' }} />
                                {idx !== services.length - 1 && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent sx={{ display: "flex", justifyContent: "center" }}>
                                <Paper
                                    elevation={3}
                                    onClick={() => handleOpen(service)}
                                    sx={{
                                        backgroundColor: "rgba(255, 255, 255, 0.06)",
                                        backdropFilter: "blur(10px)",
                                        p: 2,
                                        maxWidth: 400,
                                        textAlign: "center",
                                        cursor: "pointer",
                                        transition: "transform 0.3s ease",
                                        "&:hover": {
                                            transform: "scale(1.05)",
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        style={{
                                            color: '#48c4c4',
                                            marginBottom: "0.5rem",
                                        }}
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography style={{ color: 'wheat' }}>{service.description}</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            )}

            {/* Modal */}
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="sm"
                scroll="body"
                PaperProps={{
                    sx: {
                        backgroundColor: "#1a1a1d", // Clean dark background (no blur)
                        borderRadius: 4,
                        px: { xs: 2, sm: 4 },
                        py: { xs: 3, sm: 4 },
                        color: "white",
                        boxShadow: "0 0 20px rgba(72, 196, 196, 0.25)",
                    },
                }}
            >
                <DialogTitle
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontWeight: "bold",
                        color: "#48c4c4",
                        fontSize: { xs: "1.5rem", sm: "1.8rem" },
                    }}
                >
                    {selectedService?.title}
                    <IconButton onClick={handleClose}>
                        <CloseIcon sx={{ color: "white" }} />
                    </IconButton>
                </DialogTitle>

                <DialogContent>
                    <Typography
                        sx={{
                            fontSize: "1rem",
                            color: "wheat",
                            mb: 3,
                            lineHeight: 1.8,
                        }}
                    >
                        {selectedService?.description}
                    </Typography>

                    <Stack spacing={3}>
                        <Box>
                            <Typography variant="subtitle1" sx={{ color: "#48c4c4", mb: 1 }}>
                                What You’ll Gain
                            </Typography>
                            <Stack spacing={1}>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <CheckCircleIcon sx={{ color: "#48c4c4" }} />
                                    <Typography sx={{ color: "wheat" }}>
                                        Streamlined processes with measurable impact
                                    </Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <CheckCircleIcon sx={{ color: "#48c4c4" }} />
                                    <Typography sx={{ color: "wheat" }}>
                                        Custom strategies aligned with your goals
                                    </Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <CheckCircleIcon sx={{ color: "#48c4c4" }} />
                                    <Typography sx={{ color: "wheat" }}>
                                        Scalable solutions built for growth
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>

                        <Box>
                            <Typography variant="subtitle1" sx={{ color: "#48c4c4", mb: 1 }}>
                                Why Choose Us?
                            </Typography>
                            <Typography sx={{ color: "wheat", fontSize: "0.95rem", lineHeight: 1.6 }}>
                                We combine innovation with proven methods to ensure your organization is
                                future-ready. Our team works closely with you to design practical, high-impact
                                solutions that deliver consistent value.
                            </Typography>
                        </Box>
                    </Stack>
                </DialogContent>
            </Dialog>
        </Container>
    );
}
