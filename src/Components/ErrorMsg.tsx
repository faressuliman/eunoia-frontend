import { Typography } from "@mui/material"

interface IProps{
msg:string | undefined;
}

const ErrorMsg = ({msg}:IProps) => {
  return (
    msg? <Typography color="error">{msg}</Typography> : null
  )
}

export default ErrorMsg