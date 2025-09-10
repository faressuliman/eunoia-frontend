export interface IRegisterList{
    name: "username"|"email"|"password"|"confirmPassword" ,
    id: string,
    type: string,
    label: string
}
export interface ILoginList{
    name: "identifier"|"password" ,
    id: string,
    type: string,
    label: string
}
export interface IErrorResponse{
    error:{
        message?:string;
    }
}

export interface IEunoia {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export interface IMeetEunoia {
    id: number;
    name: string;
    feedback: string;
    rating: number;
    avatar: string;
}