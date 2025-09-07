import { Box, TextField , InputAdornment, Stack, Typography, Button, Link, FormGroup, Checkbox, FormControlLabel, IconButton} from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type loginFormData } from "../Validation";
import ErrorMsg from "../Components/ErrorMsg";
import { LoginList} from "../Validation/List";
import { useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import bgImage from "../assets/Images/a44e6eb6f3a4644fe33e354c679933219a0127af.jpg";
import Divider from '@mui/material/Divider';
import Root from "../Components/Divider";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import TwitterIcon from '@mui/icons-material/Twitter';
import { url } from "zod";



interface IProps{

}

const Login = ({}:IProps) => {
  const {register,handleSubmit,formState:{errors}} = useForm<loginFormData>({resolver:zodResolver(loginSchema)})
  const submitData = async(data:loginFormData)=>{
    console.log("Worked , Data: ",data)
    try {
      
    } catch (error) {
      
    }
  }
   const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show)
  };

  const renderRegisterList = LoginList.map(({ id, label, name }, idx) => (
    <Box key={idx} sx={{ width: "100%", mb: 2 }}>
      {name==="password"? 
      <TextField fullWidth label={label} type={show? "text" : "password"} id={id} variant="outlined" {...register(name)} error={!!errors[name]} sx={{ width: "100%" }} InputProps={{endAdornment:<InputAdornment position="end">{show? <VisibilityOffIcon sx={{ fontSize: "2ch", cursor: "pointer" }} onClick={()=>handleShow()}/> : <VisibilityIcon sx={{ fontSize: "2ch", cursor: "pointer" }} onClick={()=>handleShow()}/>}</InputAdornment>}}/>
      : 
      <TextField fullWidth label={label} id={id} variant="outlined" {...register(name)} error={!!errors[name]} sx={{ width: "100%" }}/>
      }
     
      {errors[name] && <Box sx={{ ml: 1 }}><ErrorMsg msg={errors[name].message} /></Box>}
    </Box>
  ));
  return (
   
    
    <Stack alignItems="center" justifyContent="center" sx={{ height: "100vh", backgroundColor: "#f0f4f8", p:2 ,backgroundImage: `url(${bgImage})`, backgroundSize: "cover",
    backgroundPosition: "center", } }>
  <Box
    component="form"
    onSubmit={handleSubmit(submitData)}
    sx={{
      p:4,
      width: { xs:"90%", sm:"400px" },
      backgroundColor:"#D9D9D9",
      borderRadius:3,
      boxShadow:3,
      display:"flex",
      flexDirection:"column"
    }}
  >
    <Typography variant="h2" sx={{ mb:3, textAlign:"center", fontWeight: "bold",
    color: "transparent",
    WebkitTextStroke: "2px transparent",
    background: "linear-gradient(90deg, #ccc5c0ff, #a39082, #8C7667)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",}}>
      EUNOIA
    </Typography>
    <Box display={"flex"} flexDirection={"column"}  >
    <Typography variant="h5" sx={{ mb:0.5, fontFamily: "initial"  , textAlign:"center", fontWeight:"bold", color:"black" }}>
      Welcome Back
    </Typography>
    <Typography variant="body1" sx={{ mb:3, textAlign:"center", fontWeight:"bold", color:"GrayText" }}>
      Please , Enter Your Details To SignIn
    </Typography>
    </Box>
    {/* Socials */}
    <Stack direction={"row"} justifyContent={"center"} gap={2} mb={2}>
     <Button variant="outlined" sx={{width:"110px" , border:"1px solid black"}  }>
    <AppleIcon sx={{color:"black"}}/>
  </Button>
<Button variant="outlined" sx={{width:"110px" , border:"1px solid black" }   }>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" style={{ width: "20px", height: "20px" }} alt="" />
  </Button>
<Button variant="outlined" sx={{width:"110px" , border:"1px solid black"}  }>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1200px-Logo_of_Twitter.svg.png" style={{ width: "20px", height: "20px" }} alt="" />  
</Button>
    </Stack>
    {/* Divider */}
    <Root sx={{mb:2}}>
  <Divider>OR</Divider>
  </Root>
    {renderRegisterList}   
    <FormGroup sx={{display:'flex',flexDirection:"row" , alignItems:"center" , justifyContent:"space-between"}}>
      <FormControlLabel control={<Checkbox  />} label="Remember me" />
      <Link href="/register" underline="always" color="#8C7667">{"Forget Password?"}</Link>
    </FormGroup>

    <Button variant="contained"  type="submit" sx={{ mt:2, py:1.5 , backgroundColor:"white",transition:"all 0.4s ease","&:hover":{boxShadow:"4px 4px 20px #8C7667"}, color:"#8C7667" }}>
      Login
    </Button>
    <Typography textAlign={"center"} marginTop={3} sx={{display:"flex", justifyContent:"center" , gap:1 , color:"#8C7667"}}>
      New To Eunoia? 
      <Link href="/register" underline="always" color="#8C7667">
      {"Create Account"}
</Link>
    </Typography>
  </Box>
</Stack>

 
 
  )
}

export default Login