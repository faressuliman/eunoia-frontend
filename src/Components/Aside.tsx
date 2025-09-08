import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import { NavLink } from "react-router";
interface IProps{

}

const Aside = ({}:IProps) => {
  return (
    <Drawer anchor="left" variant="permanent" >
        <Box sx={{width:"200px" }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={NavLink} end to="/TrackingEmotions" sx={{"&.active":{backgroundColor:"red"}}}>
                        <ListItemIcon>
                            <HomeFilledIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    
                </ListItem>
                <ListItem disablePadding >
                    <ListItemButton component={NavLink} to="/TrackingEmotions/chat" sx={{"&.active":{backgroundColor:"red"}}}>
                        <ListItemIcon>
                            <HomeFilledIcon/>
                        </ListItemIcon>
                        <ListItemText primary="chat"/>
                    </ListItemButton>
                    
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/TrackingEmotions/profile" sx={{"&.active":{backgroundColor:"red"}}}>
                        <ListItemIcon>
                            <HomeFilledIcon/>
                        </ListItemIcon>
                        <ListItemText primary="profile"/>
                    </ListItemButton>
                    
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeFilledIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItemButton>
                    
                </ListItem>
            </List>
        </Box>
    </Drawer>
  )
}

export default Aside