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

const CustomizeFeature = () => {
  return (
    <Box sx={{ px: { xs: 3, md: 10 }, py: 8, position: "relative" }}>
      {/* Background Number */}
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
        03
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
              Customize
            </span>
          </Typography>

          <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
            We understand that every industry is unique. Our customizable platforms
            adapt to your specific needs, ensuring optimal performance and maximum
            results for your business.
          </Typography>

          {/* Show pointers after para on mobile */}
          <List sx={{ mt: 3, display: { xs: "block", md: "none" } }}>
            {[
              "Tailored workflows for every business type",
              "Seamless integration with your existing tools",
              "Flexible modules that grow with your needs",
            ].map((text, index) => (
              <ListItem key={index} disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#0A1D56" }} />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Right Side - Shape + Pointers */}
        <Grid size={{xs: 12, md: 6}} sx={{ position: "relative" }}>
          {/* Custom shape */}
          <Box
            sx={{
    position: "absolute",
    top: "-30px",
    right: "-40px",
    width: "120%",
    height: "150%",
    background: "linear-gradient(135deg, #ffafcc, #7209b7)",
    clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
    zIndex: -2,
    borderRadius: 3,
    opacity: 0.95,
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
    display: { xs: "none", md: "block" },
            }}
          />

          {/* Pointers (desktop only) */}
          <List sx={{ mt: 4, display: { xs: "none", md: "block" } }}>
            {[
              "Tailored workflows for every business type",
              "Seamless integration with your existing tools",
              "Flexible modules that grow with your needs",
            ].map((text, index) => (
              <ListItem key={index} disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#0A1D56" }} />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomizeFeature;
