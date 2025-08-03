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
    DialogContentText,
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
                        background: "linear-gradient(90deg, #38b2ac, #81e6d9)",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                        textAlign: "center",
                        letterSpacing: "1px",
                        boxShadow: "0 8px 16px rgba(56, 178, 172, 0.3)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        "&:hover": {
                            transform: "scale(1.03)",
                            boxShadow: "0 12px 24px rgba(56, 178, 172, 0.5)",
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
                            }}
                        >
                            <Typography variant="h6" color="primary" gutterBottom>
                                {service.title}
                            </Typography>
                            <Typography>{service.description}</Typography>
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
                                        p: 2,
                                        maxWidth: 400,
                                        textAlign: "center",
                                        border: "4px solid",
                                        borderColor: '#48c4c4',
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
                                            color: '#0A1D56',
                                            marginBottom: "0.5rem"
                                        }}
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography>{service.description}</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            )}

            {/* Modal */}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {selectedService?.title}
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>{selectedService?.description}</DialogContentText>
                </DialogContent>
            </Dialog>
        </Container>
    );
}
