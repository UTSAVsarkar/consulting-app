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
    num: string;
    feature: string;
    para: string;
    points: string[];
}

const FeatureSelection = (props: Props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const BulletList = () => (
        <List sx={{ mt: 1, pl: 2 }}>
            {props.points.map((text, idx) => (
                <ListItem key={idx} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: "36px" }}>
                        <InsightsIcon sx={{ color: "#d4d200" }} />
                    </ListItemIcon>
                    <ListItemText
                        primary={text}
                        primaryTypographyProps={{
                            sx: {
                                fontSize: isMobile ? "1.05rem" : '1.5rem',
                                fontWeight: 500,
                                color: "#48c4c4",
                            },
                        }}
                    />
                </ListItem>
            ))}
        </List>
    );

    return (
        <Box
            sx={{
                px: { xs: 0, md: 0 },
                py: 8,
                width: "100%",
            }}
        >
            <Grid
                container
                columns={12}
                sx={{
                    width: "100%",
                    margin: 0,
                    padding: 0,
                    borderRadius: 0,
                }}
            >
                {/* Top Left */}
                <Grid
                    size={{
                        xs: 12,
                        md: 6
                    }}
                    sx={{
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: { xs: "200px", md: "300px" },
                        backgroundColor: "rgba(255, 255, 255, 0.06)",
                        backdropFilter: "blur(8px)",
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: "6rem", md: "10rem" },
                            color: '#48c4c4'
                        }}
                    >
                        {props.num}
                    </Typography>
                </Grid>

                {/* Top Right */}
                <Grid
                    size={{
                        xs: 12,
                        md: 6
                    }}
                    sx={{
                        backgroundColor: "black",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pl: { xs: 2, md: 4 },
                        height: { xs: "200px", md: "300px" },
                        border: isMobile ? '1px solid black' : '',
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 800,
                            color: "white",
                        }}
                    >
                        We{" "}
                        <br />
                        <span
                            style={{
                                color: "white",
                                borderBottom: "5px solid #d4d200",
                            }}
                        >
                            {props.feature}
                        </span>
                    </Typography>
                </Grid>

                {/* Bottom Left */}
                <Grid
                    size={{
                        xs: 12,
                        md: 6
                    }}
                    sx={{
                        backgroundColor: "black",
                        display: "flex",
                        alignItems: isMobile ? '' : "center",
                        justifyContent: isMobile ? '' : "center",
                        textAlign: "center",
                        p: 3,
                        height: { xs: "200px", md: "300px" },
                        border: isMobile ? '1px solid black' : ''
                    }}
                >
                    <Typography variant="body1" sx={{ color: "white", fontSize: isMobile ? "1.1rem" : '1.5rem' }}>
                        {props.para}
                    </Typography>
                </Grid>

                {/* Bottom Right */}
                <Grid
                    size={{
                        xs: 12,
                        md: 6
                    }}
                    sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.06)",
                        backdropFilter: "blur(8px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        height: { xs: "200px", md: "300px" },
                    }}
                >
                    <BulletList />
                </Grid>
            </Grid>
        </Box>
    );
};

export default FeatureSelection;
