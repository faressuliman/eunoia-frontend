export interface IRegisterList{
    name: "username"|"email"|"password"|"confirmPassword" ,
    id: string,
    type: string,
    label: string
}
export interface ILoginList{
    name: "email"|"password" ,
    id: string,
    type: string,
    label: string
}