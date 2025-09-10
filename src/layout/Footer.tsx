import { Box, Typography, Container, Link, Stack } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#A8B5A0",
        color: "white",
        padding: {xs: "48px 0px", md: "48px 28px 30px 28px"},
        marginTop: "auto"
      }}
    >
      <Container maxWidth="xl" sx={{paddingX: "50px"}}>
        <Stack 
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 6 }} 
          sx={{ 
            justifyContent: { xs: "flex-start", md: "space-between" }, 
            alignItems: { xs: "flex-start", md: "flex-start" },
            textAlign: { xs: "left", md: "left" }
          }}
        >
          {/* Eunoia Section */}
          <Stack spacing={2} sx={{ flex: 1, maxWidth: { xs: "100%", md: "300px" } }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginBottom: { xs: "16px", md: "20px" },
                  color: "white",
                  fontSize: { xs: "20px", md: "24px" }
                }}
              >
                Eunoia
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  lineHeight: 1.6,
                  marginBottom: { xs: "8px", md: "10px" },
                  fontSize: { xs: "13px", md: "14px" }
                }}
              >
                From heavy moods to lighter hearts.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  lineHeight: 1.6,
                  marginBottom: { xs: "16px", md: "20px" },
                  fontSize: { xs: "13px", md: "14px" }
                }}
              >
                If you've got the worries, we've got the world to solve them!
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginBottom: { xs: "8px", md: "10px" },
                  color: "white",
                  fontSize: { xs: "14px", md: "16px" }
                }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: { xs: "13px", md: "14px" }
                }}
              >
                hello@eunoia.dev
              </Typography>
          </Stack>

          {/* Quick Links Section */}
          <Stack spacing={2} sx={{ flex: 1, maxWidth: { xs: "100%", md: "200px" }, alignItems: { xs: "flex-start", md: "center" } }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginBottom: { xs: "16px", md: "20px" },
                  color: "white",
                  fontSize: { xs: "20px", md: "24px" }
                }}
              >
                Quick Links
              </Typography>
              <Stack spacing={1} sx={{ alignItems: { xs: "flex-start", md: "center" } }}>
                <Link
                  href="/"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    textDecoration: "none",
                    fontSize: "15px",
                    "&:hover": {
                      color: "white",
                      textDecoration: "underline"
                    }
                  }}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    textDecoration: "none",
                    fontSize: "15px",
                    "&:hover": {
                      color: "white",
                      textDecoration: "underline"
                    }
                  }}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    textDecoration: "none",
                    fontSize: "14px",
                    "&:hover": {
                      color: "white",
                      textDecoration: "underline"
                    }
                  }}
                >
                  Contact
                </Link>
              </Stack>
          </Stack>

          {/* Our Services Section */}
          <Stack spacing={2} sx={{ flex: 1, maxWidth: { xs: "100%", md: "300px" }, alignItems: { xs: "flex-start", md: "center" } }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                marginBottom: { xs: "16px", md: "20px" },
                color: "white",
                fontSize: { xs: "20px", md: "24px" }
              }}
            >
              Our Services
            </Typography>
            <Stack spacing={1} sx={{ alignItems: { xs: "flex-start", md: "center" } }}>
                <Link
                  href="/TrackingEmotions/chat"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    textDecoration: "none",
                    fontSize: "15px",
                    "&:hover": {
                      color: "white",
                      textDecoration: "underline"
                    }
                  }}
                >
                  Chat With An AI
                </Link>
                <Link
                  href="/recommendations"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    textDecoration: "none",
                    fontSize: "14px",
                    "&:hover": {
                      color: "white",
                      textDecoration: "underline"
                    }
                  }}
                >
                  Get Recommendations
                </Link>
                <Link
                  href="/TrackingEmotions"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    textDecoration: "none",
                    fontSize: "14px",
                    "&:hover": {
                      color: "white",
                      textDecoration: "underline"
                    }
                  }}
                >
                  Track Your Emotions Easily
                </Link>
            </Stack>
          </Stack>
        </Stack>

        {/* Copyright Section */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            marginTop: { xs: "30px", md: "40px" },
            paddingTop: { xs: "16px", md: "20px" },
            textAlign: "center"
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: { xs: "11px", md: "12px" }
            }}
          >
            © 2025 Eunoia. All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;