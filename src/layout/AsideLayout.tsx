import { Outlet } from "react-router"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Aside from "../Components/Aside"
import { Box } from "@mui/material"

interface IProps{

}

const AsideLayout = ({}:IProps) => {
  return (
    <div>
        <Navbar/>
        <Footer/>
        <Aside/>
        <Box sx={{ p: 20 , ml:"200px" }}>
        <Outlet />
        </Box>
    </div>
  )
}

export default AsideLayout