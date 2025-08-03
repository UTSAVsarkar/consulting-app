import {
    Box,
    Grid,
    Typography,
    IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Typewriter } from "react-simple-typewriter";

const teamMembers = [
    {
        name: "TUSHAR YADAV",
        title: "Chief Innovation Officer",
        image: "https://i.pravatar.cc/150?img=1",
        description:
            "Tushar drives AI-powered solutions and leads cross-functional innovation projects with bold thinking.",
        linkedin: "https://linkedin.com/in/tusharyadav",
    },
    {
        name: "UTSAV SARKAR",
        title: "EX-SDE @ MAQ Software",
        image: "https://i.pravatar.cc/150?img=2",
        description:
            "Utsav bridges business goals and data insights, creating growth-focused strategies and scalable systems.",
        linkedin: "https://linkedin.com/in/utsavsarkar",
    },
];

const AboutUs = () => {
    return (
        <Box
            className="section"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            px={4}
            py={10}
            sx={{ position: "relative", overflow: "hidden" }}
        >
            {/* Floating glowing background shape */}
            <Box
                sx={{
                    position: "absolute",
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    top: "-120px",
                    left: "-100px",
                    filter: "blur(100px)",
                    opacity: 0.3,
                    animation: "floatBlob 12s ease-in-out infinite alternate",
                    zIndex: 0,
                }}
            />

            {/* Typing Tagline */}
            <Typography
                variant="subtitle1"
                align="center"
                sx={{
                    color: "#bbb",
                    fontStyle: "italic",
                    mb: 6,
                    zIndex: 2,
                    whiteSpace: "nowrap",
                    minHeight: "2em",
                    fontSize: '2rem'
                }}
            >
                <Typewriter
                    words={["Who we are?", "What we do?", "Why it matters?"]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                />
            </Typography>

            {/* Cards */}
            <Grid container spacing={4} maxWidth="md" justifyContent="center" zIndex={2}>
                {teamMembers.map((member, index) => (
                    <Grid size={{ xs: 12, md: 6 }} key={index}>
                        <Box
                            sx={{
                                backgroundColor: "rgba(255, 255, 255, 0.06)",
                                borderRadius: 4,
                                p: 4,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                border: "1px solid rgba(255,255,255,0.15)",
                                boxShadow: "0 0 20px rgba(255,255,255,0.05)",
                                backdropFilter: "blur(10px)",
                                transition: "transform 0.4s ease",
                                opacity: 0,
                                transform: "translateY(20px)",
                                animation: `fadeIn 1s ease ${index * 0.4 + 0.5}s forwards`,
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow: "0 0 30px rgba(153, 102, 255, 0.4)",
                                    borderColor: "#9966ff",
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={member.image}
                                alt={member.name}
                                sx={{
                                    width: 120,
                                    height: 120,
                                    borderRadius: "50%",
                                    border: "4px solid white",
                                    objectFit: "cover",
                                    mb: 2,
                                }}
                            />
                            <Typography variant="h6" sx={{ color: "white", fontWeight: 600 }}>
                                {member.name}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                sx={{ color: "#b19cd9", mb: 2 }}
                            >
                                {member.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                align="center"
                                sx={{ color: "#ccc", mb: 1 }}
                            >
                                {member.description}
                            </Typography>
                            <IconButton
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener"
                                sx={{ color: "#0e76a8", mt: 1 }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {/* Animations */}
            <style>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 26ch }
        }

        @keyframes blink {
          50% { border-color: transparent }
        }

        @keyframes floatBlob {
          0% { transform: translateY(0px) }
          100% { transform: translateY(40px) }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </Box>
    );
};

export default AboutUs;
