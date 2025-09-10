import { Box, Button, Stack, Typography, Avatar } from "@mui/material"
import bgImage from "../assets/Images/a44e6eb6f3a4644fe33e354c679933219a0127af.jpg"
import { useNavigate } from "react-router-dom";
import { eunoiaData, meetEunoiaData } from "../data";
import type { IEunoia, IMeetEunoia } from "../Interfaces";
import { Smile, Target, MessageCircle, Star } from "lucide-react";


const index = () => {
    const navigate = useNavigate();

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "Smile":
                return <Smile size={32} color="#8C7667" />;
            case "Target":
                return <Target size={32} color="#8C7667" />;
            case "MessageCircle":
                return <MessageCircle size={32} color="#8C7667" />;
            default:
                return <Smile size={32} color="#8C7667" />;
        }
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                size={16}
                fill={index < rating ? "#FFD700" : "transparent"}
                color="#FFD700"
            />
        ));
    };

    const renderEunoia = eunoiaData.map((item: IEunoia, index: number) => (
        <Stack
            key={index}
            spacing={2}
            sx={{
                alignItems: "center",
                padding: { xs: "24px 16px", md: "30px 20px" },
                borderRadius: "15px",
                boxShadow: "0 4px 20px rgba(140, 118, 103, 0.1)",
                backgroundColor: "white",
                border: "1px solid rgba(140, 118, 103, 0.1)",
                textAlign: "center",
                width: { xs: "100%", md: "320px" },
                maxWidth: "350px",
                flex: { xs: "none", md: 1 }
            }}
        >
            <Box
                sx={{
                    width: { xs: "50px", md: "60px" },
                    height: { xs: "50px", md: "60px" },
                    borderRadius: "50%",
                    backgroundColor: "rgba(140, 118, 103, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                {getIcon(item.icon)}
            </Box>
            <Typography
                variant="h6"
                sx={{
                    color: "#8C7667",
                    fontWeight: "bold",
                    fontSize: { xs: "14px", md: "16px" }
                }}
            >
                {item.title}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    color: "#666",
                    lineHeight: 1.5,
                    fontSize: { xs: "13px", md: "14px" }
                }}
            >
                {item.description}
            </Typography>
        </Stack>
    ));

    const renderMeetEunoia = meetEunoiaData.map((item: IMeetEunoia, index: number) => (
        <Stack
            key={index}
            spacing={2}
            sx={{
                padding: { xs: "20px 16px", md: "30px 20px" },
                borderRadius: "15px",
                boxShadow: "0 4px 20px rgba(140, 118, 103, 0.1)",
                backgroundColor: "white",
                border: "1px solid rgba(140, 118, 103, 0.1)",
                width: { xs: "calc(100% - 32px)", md: "450px" },
                maxWidth: { xs: "350px", md: "500px" },
                flex: { xs: "none", md: 1 }
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar
                    src={item.avatar}
                    alt={item.name}
                    sx={{ width: { xs: 40, md: 50 }, height: { xs: 40, md: 50 } }}
                />
                <Typography
                    variant="h6"
                    sx={{
                        color: "#8C7667",
                        fontWeight: "bold",
                        fontSize: { xs: "14px", md: "16px" }
                    }}
                >
                    {item.name}
                </Typography>
            </Box>
            <Typography
                variant="body2"
                sx={{
                    color: "#666",
                    lineHeight: 1.6,
                    fontSize: { xs: "13px", md: "14px" }
                }}
            >
                {item.feedback}
            </Typography>
            <Box sx={{ display: "flex", gap: 0.5 }}>
                {renderStars(item.rating)}
            </Box>
        </Stack>
    ));

    return (
        <>
            {/* Hero Section */}
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

                <Box
                    sx={{
                        textAlign: "center",
                        paddingX: { xs: "20px", sm: "40px", md: "16px" },
                        maxWidth: "800px",
                        width: "100%"
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            color: "#8C7667",
                            fontWeight: "semibold",
                            fontSize: { xs: "32px", sm: "40px", md: "48px" },
                            marginBottom: { xs: "12px", md: "16px" },
                            textAlign: "center"
                        }}
                    >
                        Welcome to <span style={{ color: "#8C7667", fontWeight: "bold" }}>EUNOIA</span>
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{
                            color: "#8C7667",
                            fontWeight: "semibold",
                            fontSize: { xs: "18px", sm: "20px", md: "24px" },
                            marginBottom: { xs: "20px", md: "24px" },
                            fontStyle: "italic",
                            textAlign: "center",
                            maxWidth: "600px",
                            margin: "0 auto"
                        }}
                    >
                        An AI-powered calm space to talk, reflect, and feel understood
                    </Typography>

                    <Button 
                        variant="contained"
                        sx={{
                            color: "#8C7667",
                            backgroundColor: "white",
                            boxShadow: "4px 4px 20px #8C7667",
                            borderRadius: "15px",
                            fontWeight: "bold",
                            transition: "all 0.4s ease-in-out",
                            fontSize: { xs: "14px", md: "16px" },
                            padding:"10px 24px",
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

             {/* Why Eunoia Section */}
             <Box
                 sx={{
                     padding: { xs: "40px 20px", md: "60px 20px" },
                     backgroundColor: "#f8f9fa",
                     display: "flex",
                     flexDirection: "column",
                     alignItems: "center",
                     justifyContent: "center"
                 }}
             >
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: "center",
                        color: "#8C7667",
                        fontWeight: "bold",
                        fontSize: { xs: "28px", sm: "32px", md: "36px" },
                        marginBottom: { xs: "30px", md: "40px" },
                    }}
                >
                    Why Eunoia?
                </Typography>
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 3, md: 4 }}
                    sx={{
                        maxWidth: "1200px",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    {renderEunoia}
                </Stack>
            </Box>

             {/* Meet Eunoia Section */}
             <Box
                 sx={{
                     padding: { xs: "40px 16px", md: "60px 20px" },
                     backgroundColor: "white",
                     display: "flex",
                     flexDirection: "column",
                     alignItems: "center",
                     justifyContent: "center"
                 }}
             >
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: "center",
                        color: "#8C7667",
                        fontWeight: "bold",
                        fontSize: { xs: "28px", sm: "32px", md: "36px" },
                        marginBottom: { xs: "12px", md: "16px" }
                    }}
                >
                    Meet Eunoia
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        textAlign: "center",
                        color: "#666",
                        marginBottom: { xs: "30px", md: "40px" },
                        maxWidth: "600px",
                        margin: "0 auto",
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: 1.6,
                        paddingX: { xs: "20px", md: "0" },
                    }}
                >
                    Your personal AI companion for mental wellness and motivation.
                    Eunoia listens, understands, and helps you reflect on your emotions with empathy.
                </Typography>
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 3, md: 4 }}
                    sx={{
                        maxWidth: "1000px",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    {renderMeetEunoia}
                </Stack>
            </Box>

        </>
    )
}

export default index
