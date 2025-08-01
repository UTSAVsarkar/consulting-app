import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const AutomationFeature = () => {
  return (
    <Box sx={{ px: { xs: 3, md: 10 }, py: 8, position: "relative" }}>
      {/* Large 01 Background Number */}
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "4.5rem", sm: "6rem", md: "8rem" },
          fontWeight: "bold",
          color: "#040f31ff",
          textAlign: { xs: "center", md: "right" },
          position: { xs: "relative", md: "absolute" },
          top: { xs: 0, md: "-40px" },
          right: { xs: 0, md: "10%" },
          zIndex: -1,
          mb: { xs: 4, md: 0 },
        }}
      >
        01
      </Typography>

      <Grid container spacing={6} alignItems="center">
        {/* Left Side - Text */}
        <Grid size={{xs: 12, md: 6}}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: "#0A1D56" }}>
            We{" "}
            <span
              style={{
                color: "#0A1D56",
                borderBottom: "5px solid #FFD700",
              }}
            >
              Automate
            </span>
          </Typography>

          <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
            Our automation solutions are tailored to simplify complex processes,
            saving time and resources for businesses. Experience seamless operations
            and increased efficiency with our innovative automation tools.
          </Typography>
        </Grid>

        {/* Right Side */}
        <Grid size={{xs: 12, md: 6}} sx={{ position: "relative" }}>
          {/* Stylized Arrow Background */}
          <Box
            sx={{
              position: "absolute",
              top: "-30px",
              right: "-30px",
              width: "110%",
              height: "140%",
              background: "linear-gradient(135deg, #2ec4b6, #00bfa5)",
              clipPath: "polygon(40% 0, 100% 0%, 70% 100%, 0% 100%)",
              zIndex: -2,
              borderRadius: 2,
              opacity: 0.9,
              display: { xs: "none", md: "block" }, // hide arrow on mobile
            }}
          />

          {/* Bullet List */}
          <List sx={{ mt: 4 }}>
            {[
              "Simplify complex business processes",
              "Save time and resources efficiently",
              "Boost productivity through automation",
            ].map((text, idx) => (
              <ListItem key={idx} sx={{ pl: 0 }}>
                <ListItemIcon sx={{ minWidth: "36px" }}>
                  <CheckCircleIcon
                    sx={{
                      color: "#071110",
                      transition: "all 0.3s",
                      "&:hover": { color: "#2ec4b6" },
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      color: "#0A1D56",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AutomationFeature;
