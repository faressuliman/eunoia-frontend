import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Chat", path: "/TrackingEmotions/chat" },
  { label: "Emotions", path: "/TrackingEmotions" }
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  return (
    <>
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          zIndex: 1100,
          marginTop: "15px"
        }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: "bold", color: "white" }}>
              EUNOIA
            </Typography>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 2 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.label}
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                      fontSize: "15px",
                      transition: "all 0.3s ease-in-out",
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: '#8C7667',
                      }
                    }}
                    color="inherit"
                    onClick={() => navigate(link.path)}
                  >
                    {link.label}
                  </Button>
                ))}
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: 'white',
                    borderColor: '#8C7667',
                    color: '#8C7667',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    transition: "all 0.2s ease-in-out",
                    '&:hover': {
                      backgroundColor: '#8C7667',
                      color: 'white',
                      boxShadow: '0 4px 12px rgba(140, 118, 103, 0.3)'
                    }
                  }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                edge="end"
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate(link.path);
                    setOpen(false);
                  }}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/login");
                  setOpen(false);
                }}
              >
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
