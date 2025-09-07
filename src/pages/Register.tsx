import { Box, TextField , InputAdornment, Stack, Typography, Button, Divider, Link} from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type registerFormData } from "../Validation";
import ErrorMsg from "../Components/ErrorMsg";
import { RegisterList } from "../Validation/List";
import { useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AppleIcon from '@mui/icons-material/Apple';
import Root from "../Components/Divider";
import bgImage from "../assets/Images/a44e6eb6f3a4644fe33e354c679933219a0127af.jpg";
interface IProps{

}

const Register = ({}:IProps) => {
  const {register,handleSubmit,formState:{errors}} = useForm<registerFormData>({resolver:zodResolver(registerSchema)})
  const submitData = async(data:registerFormData)=>{
    console.log("Worked , Data: ",data)
    try {
      
    } catch (error) {
      
    }
  }
   const [show, setShow] = useState({ password: false, confirmPassword: false });
  const handleShow = (name: "password" | "confirmPassword") => {
    setShow(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const renderRegisterList = RegisterList.map(({ id, label, name, type }, idx) => (
    <Box key={idx} sx={{ width: "100%", mb: 2 }}>
    <TextField
      fullWidth
      label={label}
      type={
        name === "password" || name === "confirmPassword"
          ? show[name as "password" | "confirmPassword"]
            ? "text"
            : "password"
          : type
      }
      id={id}
      variant="outlined"
      {...register(name)}
      error={!!errors[name]}
      sx={{ width: "100%" }}
      InputProps={{
        endAdornment:
          (name === "password" || name === "confirmPassword") && (
            <InputAdornment position="end">
              {show[name as "password" | "confirmPassword"] ? (
                <VisibilityOffIcon
                  sx={{ fontSize: "2ch", cursor: "pointer" }}
                  onClick={() => handleShow(name as "password" | "confirmPassword")}
                />
              ) : (
                <VisibilityIcon
                  sx={{ fontSize: "2ch", cursor: "pointer" }}
                  onClick={() => handleShow(name as "password" | "confirmPassword")}
                />
              )}
            </InputAdornment>
          )
      }}
    />
    {errors[name] && (
      <Box sx={{ ml: 1 }}>
        <ErrorMsg msg={errors[name].message} />
      </Box>
    )}
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
      Create Your Account
    </Typography>
    <Typography variant="body1" sx={{ mb:3, textAlign:"center", fontWeight:"bold", color:"GrayText" }}>
       Please enter your details to sign up
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

    {renderRegisterList}   {/* each inner Box has width: 100% */}

    

    <Button variant="contained"  type="submit" sx={{ mt:2, py:1.5 , backgroundColor:"white",transition:"all 0.4s ease","&:hover":{boxShadow:"4px 4px 20px #8C7667"} , color:"#8C7667" , }}>
     SignUP
    </Button>
    <Typography textAlign={"center"} marginTop={3} sx={{display:"flex", justifyContent:"center" , gap:1 , color:"#8C7667"}}>
      Already Have An Account? 
      <Link href="/login" underline="always" color="#8C7667">
      {"LogIn"}
</Link>
    </Typography>
  </Box>
  
</Stack>

 
 
  )
}

export default Register