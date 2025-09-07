import type { ILoginList, IRegisterList } from "../Interfaces";

export const RegisterList : IRegisterList[] = [
  {
    name: "username",
    id: "username",
    type: "text",
    label: "Username"
  },
  {
    name: "email",
    id: "email",
    type: "email",
    label: "Email"
  },
  {
    name: "password",
    id: "password",
    type: "password",
    label: "Password"
  },
  {
    name: "confirmPassword",
    id: "confirmPassword",
    type: "password",
    label: "Confirm Password"
  }
];
export const LoginList : ILoginList[] = [
  
  {
    name: "email",
    id: "email",
    type: "email",
    label: "Email"
  },
  {
    name: "password",
    id: "password",
    type: "password",
    label: "Password"
  }
  
];
