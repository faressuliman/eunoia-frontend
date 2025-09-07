import { forwardRef} from "react";
import { TextField as MuiTextField,  type TextFieldProps } from "@mui/material";

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  return <MuiTextField inputRef={ref} {...props} />;
});

export default TextField;
