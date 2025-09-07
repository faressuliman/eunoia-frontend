import { Box, TextField , InputAdornment, Stack, Typography, Button} from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type registerFormData } from "../Validation";
import ErrorMsg from "../Components/ErrorMsg";
import { RegisterList } from "../Validation/List";
import { useState } from "react";

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
        type={name === "password" || name === "confirmPassword" ? (show[name as "password" | "confirmPassword"] ? "text" : "password") : type}
        id={id}
        variant="outlined"
        {...register(name)}
        error={!!errors[name]}
        sx={{ width: "100%" }}
        InputProps={{
          endAdornment:
            (name === "password" || name === "confirmPassword") && (
              <InputAdornment position="end">
                <VisibilityIcon
                  sx={{ fontSize: "2ch", cursor: "pointer" }}
                  onClick={() => handleShow(name as "password" | "confirmPassword")}
                />
              </InputAdornment>
            )
        }}
      />
      {errors[name] && <Box sx={{ ml: 1 }}><ErrorMsg msg={errors[name].message} /></Box>}
    </Box>
  ));
  return (
   
    
    <Stack alignItems="center" justifyContent="center" sx={{ height: "100vh", backgroundColor: "#f0f4f8", p:2 }}>
  <Box
    component="form"
    onSubmit={handleSubmit(submitData)}
    sx={{
      p:4,
      width: { xs:"90%", sm:"400px" },
      backgroundColor:"white",
      borderRadius:3,
      boxShadow:3,
      display:"flex",
      flexDirection:"column"
    }}
  >
    <Typography variant="h4" sx={{ mb:3, textAlign:"center", fontWeight:"bold", color:"#1976d2" }}>
      SIGN UP
    </Typography>

    {renderRegisterList}   {/* each inner Box has width: 100% */}

    <Button variant="contained" color="primary" type="submit" sx={{ mt:2, py:1.5 }}>
      Submit
    </Button>
  </Box>
</Stack>

 
 
  )
}

export default Register