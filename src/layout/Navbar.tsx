import { AppBar, Button, Toolbar } from "@mui/material"
import {  NavLink } from "react-router-dom"
const Navbar = () => {
  return (

    <AppBar position="static">
  <Toolbar>
    <Button color="inherit" component={NavLink}  to="/" >
      Home
    </Button>
    <Button color="inherit" component={NavLink} to="/register">
    Register
    </Button>
    <Button color="inherit" component={NavLink} to="/login">
     Login
    </Button>

  </Toolbar>
</AppBar>
  )
}

export default Navbar