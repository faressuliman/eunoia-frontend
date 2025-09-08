import { Box, Typography, Container, Link } from "@mui/material";
import Grid from '@mui/material/GridLegacy';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#A8B5A0",
        color: "white",
        padding: "48px 0 30px 0",
        marginTop: "auto"
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6} sx={{ justifyContent: "space-between", alignItems: "flex-start" }}>
          {/* Eunoia Section */}
          <Grid item xs={12} md={3.5}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                marginBottom: "20px",
                color: "white"
              }}
            >
              Eunoia
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: 1.6,
                marginBottom: "10px"
              }}
            >
              From heavy moods to lighter hearts.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: 1.6,
                marginBottom: "20px"
              }}
            >
              If you've got the worries, we've got the world to solve them!
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "10px",
                color: "white",
                fontSize: "16px"
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.8)"
              }}
            >
              hello@eunoia.dev
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} md={3.5} sx={{ textAlign: { xs: "left", md: "center" } }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                marginBottom: "20px",
                color: "white"
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: { xs: "flex-start", md: "center" } }}>
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
            </Box>
          </Grid>

          {/* Our Services Section */}
          <Grid item xs={12} md={3.5} sx={{ textAlign: { xs: "left", md: "center" } }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                marginBottom: "20px",
                color: "white"
              }}
            >
              Our Services
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: { xs: "flex-start", md: "center" } }}>
              <Link
                href="/TrackingEmotions/chat"
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
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            marginTop: "40px",
            paddingTop: "20px",
            textAlign: "center"
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "12px"
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
