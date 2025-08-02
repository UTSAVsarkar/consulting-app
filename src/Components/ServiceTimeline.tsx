import React from "react";
import {
    Box,
    Typography,
    Paper,
    Container,
    useMediaQuery,
    useTheme,
    Stack,
} from "@mui/material";
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from "@mui/lab";

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
        title: "Digital Transformation",
        description: "Adopt AI, IoT, and data platforms for smart operations.",
    },
    {
        title: "Digital Transformation",
        description: "Adopt AI, IoT, and data platforms for smart operations.",
    },
];

export default function ServiceTimeline() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            {/* Top Centered Box */}
            <Box display="flex" justifyContent="center" alignItems="center" mb={6}>
                <Paper
                    elevation={4}
                    sx={{
                        px: 4,
                        py: 2,
                        bgcolor: "#48c4c4",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "1.25rem",
                        textAlign: "center",
                    }}
                >
                    Our Services
                </Paper>
            </Box>

            {/* Mobile View: Just Boxes */}
            {isMobile ? (
                <Stack spacing={4}>
                    {services.map((service, idx) => (
                        <Paper
                            key={idx}
                            elevation={3}
                            sx={{
                                p: 3,
                                textAlign: "center",
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
                // Desktop View: Timeline
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
                                    sx={{
                                        p: 2,
                                        maxWidth: 400,
                                        textAlign: "center",
                                        border: "4px solid",
                                        borderColor: '#48c4c4',
                                    }}
                                >
                                    <Typography variant="h6" component="h3" color="primary"
                                        style={{
                                            color: '#0A1D56',
                                        }}>
                                        <span
                                            style={{
                                                color: "#0A1D56",
                                                borderBottom: "2px solid #d4d200",
                                            }}
                                        >
                                            {service.title}
                                        </span>
                                    </Typography>
                                    <Typography>{service.description}</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            )}
        </Container>
    );
}
