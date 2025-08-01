import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import InsightsIcon from "@mui/icons-material/Insights";

const AnalyzeFeature = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const bulletPoints = [
    "Gain actionable insights from your data",
    "Drive smarter decisions with analytics",
    "Visualize trends and performance clearly",
  ];

  const BulletList = () => (
    <List sx={{ mt: 4 }}>
      {bulletPoints.map((text, idx) => (
        <ListItem key={idx} sx={{ pl: 0 }}>
          <ListItemIcon sx={{ minWidth: "36px" }}>
            <InsightsIcon
              sx={{
                color: "#071110",
                transition: "all 0.3s",
                "&:hover": { color: "#ffb703" },
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
  );

  return (
    <Box sx={{ px: { xs: 3, md: 10 }, py: 8, position: "relative" }}>
      {/* Background Number */}
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "4.5rem", sm: "6rem", md: "8rem" },
          fontWeight: "bold",
          color: "#040f31ff",
          textAlign: { xs: "center", md: "left" },
          position: { xs: "relative", md: "absolute" },
          top: { xs: 0, md: "-40px" },
          left: { xs: 0, md: "10%" },
          zIndex: -1,
          mb: { xs: 4, md: 0 },
        }}
      >
        02
      </Typography>

      <Grid container spacing={6} alignItems="center">
        {/* Left Column - Bullet List (Desktop Only) */}
        {!isMobile && (
          <Grid size={{xs: 12, md: 6}} sx={{ position: "relative" }}>
            {/* Stylized Background Shape */}
            <Box
              sx={{
                position: "absolute",
                top: "-30px",
                left: "-30px",
                width: "110%",
                height: "140%",
                background: "linear-gradient(135deg, #ffd166, #fcbf49)",
                clipPath: "ellipse(70% 100% at 40% 50%)",
                zIndex: -2,
                borderRadius: 2,
                opacity: 0.9,
              }}
            />
            <BulletList />
          </Grid>
        )}

        {/* Right Column - Text */}
        <Grid size={{xs: 12, md: 6}}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: "#0A1D56" }}>
            We{" "}
            <span
              style={{
                color: "#0A1D56",
                borderBottom: "5px solid #FFD700",
              }}
            >
              Analyze
            </span>
          </Typography>

          <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
            Unlock valuable insights and make informed decisions with our powerful
            data analytics solutions. Dive deep into your data to drive strategic
            actions and achieve your business goals.
          </Typography>

          {/* Bullet List (Mobile Only) */}
          {isMobile && <BulletList />}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnalyzeFeature;
