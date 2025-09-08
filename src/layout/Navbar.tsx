import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material"
import {  NavLink } from "react-router-dom"
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
const Navbar = () => {
  return (

//     <AppBar position="static">
//   <Toolbar>
//     <Button color="inherit" component={NavLink}  to="/" >
//       Home
//     </Button>
//     <Button color="inherit" component={NavLink} to="/register">
//     Register
//     </Button>
//     <Button color="inherit" component={NavLink} to="/login">
//      Login
//     </Button>
//     <Button color="inherit" component={NavLink} to="/TrackingEmotions">
//      TrackingEmotions
//     </Button>

//   </Toolbar>
// </AppBar>

<AppBar>
  <Toolbar>
    <IconButton size="medium" color="warning">
      <CatchingPokemonIcon/>
    </IconButton>
    <Typography sx={{flexGrow:1}}>EUNOIA</Typography>
    <Stack direction={"row"} component={"nav"}>
      <Button color="inherit" >Pricing</Button>
      <Button color="inherit">Pricing</Button>
      <Button color="inherit">Pricing</Button>
      <Button color="inherit" component={NavLink} to="/TrackingEmotions">TrackingEmotions</Button>
      
    </Stack>
    
  </Toolbar>
</AppBar>
  )
}

export default Navbar