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

interface Props {
    num: string,
    feature: string,
    para: string,
    points: string[],
}

const FeatureSelection = (props: Props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const BulletList = () => (
        <List sx={{ mt: 4 }}>
            {props.points.map((text, idx) => (
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
                    color: "#fff",
                    textAlign: { xs: "center", md: "left" },
                    position: { xs: "relative", md: "absolute" },
                    top: { xs: 0, md: "-40px" },
                    left: { xs: 0, md: "10%" },
                    zIndex: -1,
                    mb: { xs: 4, md: 0 },
                }}
            >
                {props.num}
            </Typography>

            <Grid container spacing={6} alignItems="center">
                {/* Left Column - Bullet List (Desktop Only) */}
                {!isMobile && (
                    <Grid size={{ xs: 12, md: 6 }} sx={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {/* Stylized Background Shape */}
                        <Box
                            sx={{
                                position: "absolute",
                                top: "-30px",
                                left: "-30px",
                                width: "110%",
                                height: "140%",
                                background: "#48c4c4",
                                clipPath: "ellipse(70% 100% at 40% 50%)",
                                zIndex: -2,
                                borderRadius: 2,
                                opacity: 0.9,
                                animation: "float 3s ease-in-out infinite",
                            }}
                        />
                        <BulletList />
                    </Grid>
                )}

                {/* Right Column - Text */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                        sx={{
                            p: 3,
                            borderRadius: 2,
                            background: "#fff",
                            border: "4px solid",
                            borderImageSlice: 1,
                            borderColor: '#48c4c4',
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%", // ensure full height for vertical centering
                            textAlign: "center", // center the text
                        }}
                    >
                        <Typography variant="h4" sx={{ fontWeight: 800, color: "#0A1D56" }}>
                            We{" "}
                            <span
                                style={{
                                    color: "#0A1D56",
                                    borderBottom: "5px solid #d4d200",
                                }}
                            >
                                {props.feature}
                            </span>
                        </Typography>

                        <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
                            {props.para}
                        </Typography>

                        {/* Bullet List (Mobile Only) */}
                        {isMobile && <BulletList />}
                    </Box>
                </Grid>

            </Grid>

            {/* Floating animation keyframe */}
            <style>
                {`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
            `}
            </style>
        </Box>
    );
};

export default FeatureSelection;