import { z } from "zod"
// 1️⃣ Capital letter
const capitalRegex = /[A-Z]/;

// 2️⃣ Number
const numberRegex = /\d/;

// 3️⃣ Special character
const specialCharRegex = /[@$!%*?&]/;

// 4️⃣ Lowercase letter
const lowercaseRegex = /[a-z]/;


export const registerSchema =  z.object({
    username:z.string().trim().min(3,{message:"min username length is 3"})
    .max(15,{message:"you canot exceed 15 char"}).trim()
   .regex(/^(?![._])(?!.*[._]$)[a-zA-Z0-9._]{3,20}$/, {
    message: "Username must be 3-20 chars, only letters, numbers, . and _ , cannot start or end with . or _",
  }),
    email:z.string().trim().email({message:"please enter a valid email"}),
    password:z.string().trim().regex(capitalRegex,{message:"Password must contain at least one uppercase letter"})
    .regex(numberRegex,{message:"Password must contain at least one number"})
    .regex(lowercaseRegex,{message:"Password must contain at least one lowercase letter"})
    .regex(specialCharRegex,{message:"Password must contain at least one special character"})
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must not exceed 20 characters")
  ,
    confirmPassword:z.string().trim().regex(capitalRegex,{message:"Password must contain at least one uppercase letter"})
    .regex(numberRegex,{message:"Password must contain at least one number"})
    .regex(lowercaseRegex,{message:"Password must contain at least one lowercase letter"})
    .regex(specialCharRegex,{message:"Password must contain at least one special character"})
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must not exceed 20 characters")

    
})
.refine((data)=>data.password===data.confirmPassword , {
    message:"password doesnot match",
    path:["confirmPassword"]

})
export const loginSchema =  z.object({
   
    identifier:z.string().trim().min(1,{message:"Email is required"}).email({message:"please enter a valid email"}),
    password: z.string().trim().min(1, { message: "Password is required" }).min(3,"Min password length is 3"),
   
})


export type registerFormData = z.infer<typeof registerSchema>
export type loginFormData = z.infer<typeof loginSchema>