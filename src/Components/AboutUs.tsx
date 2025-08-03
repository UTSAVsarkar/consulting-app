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
    title: "Ex-Junior Engineer at SANY India",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFSz2jIp1XZSA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722883066434?e=1756944000&v=beta&t=I9uso2gAKhpcgE9P8j_kY8q37lFfGb5nVc-HgGWam8M",
    description:
      "Tushar drives AI-powered solutions and leads cross-functional innovation projects with bold thinking.",
    linkedin: "https://www.linkedin.com/in/tushar-yadav-81a6a8166/",
  },
  {
    name: "UTSAV SARKAR",
    title: "Ex-SDE at MAQ Software",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQG7vvXkabeY7A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722932249697?e=1756944000&v=beta&t=S3uRNHDcqnaz_2mlwcSaC7aMG1WXFEghrAxS95aqY1U",
    description:
      "Utsav bridges business goals and data insights, creating growth-focused strategies and scalable systems.",
    linkedin: "https://www.linkedin.com/in/utsav-sarkar-49892325a/",
  },
];

const AboutUs = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={4}
      py={10}
      sx={{ position: "relative", overflow: "hidden" }}
    >
      {/* Static Background Shape (no animation) */}
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
          zIndex: 0,
        }}
      />

      {/* Typing Tagline (can remove if needed) */}
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
          fontSize: '2rem',
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
          <Grid size={{xs: 12, md: 6}} key={index}>
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
    </Box>
  );
};

export default AboutUs;
