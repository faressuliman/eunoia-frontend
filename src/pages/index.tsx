import { Box, Button, Typography } from "@mui/material"
import bgImage from "../assets/Images/a44e6eb6f3a4644fe33e354c679933219a0127af.jpg"
import { useNavigate } from "react-router-dom";


const index = () => {
    const navigate = useNavigate();

    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>

                {/* Hero Content */}
                <Box
                    sx={{
                        textAlign: "center",
                        paddingX: "16px"
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            color: "#8C7667",
                            fontWeight: "semibold",
                            fontSize: "48px",
                            marginBottom: "16px"
                        }}
                    >
                        Welcome to <span style={{ color: "#8C7667", fontWeight: "bold" }}>EUNOIA</span>
                    </Typography>

                    <Typography variant="h5" sx={{ color: "#8C7667", fontWeight: "semibold", fontSize: "24px", marginBottom: "16px", fontStyle: "italic" }}>
                        An AI-powered calm space to talk, reflect, and feel understood
                    </Typography>

                    <Button variant="contained"
                        sx={{
                            color: "#8C7667",
                            backgroundColor: "white",
                            boxShadow: "4px 4px 20px #8C7667",
                            borderRadius: "15px",
                            fontWeight: "bold",
                            transition: "all 0.4s ease-in-out",
                            "&:hover": {
                                bgcolor: "#8C7667",
                                color: "white",
                                transform: "translateY(-4px) scale(1.05)",
                            }
                        }}
                        onClick={() => navigate("./TrackingEmotions")}
                    >
                        Start Your Journey
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default index
