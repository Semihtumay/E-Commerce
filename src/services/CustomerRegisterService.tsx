import axios from "axios"
import { IRegister } from "../models/IRegister"
//import { IUser, Role } from "../models/IUser"



const baseUrl='http://localhost:8090/'

const config=axios.create({
    baseURL:baseUrl,
    params:{
    }
})
export const userRegister=(name:string,surname:string,
    phone:string,mail:string,password:string,enabled:string,tokenExpired:string,verificationCode:string,roles:string)=>{

    const sendParams={
        firstName:name,
        lastName:surname,
        phone:phone,
        email:mail,
        password:password,
        enabled:enabled,
        tokenExpired:tokenExpired,
        verificationCode:verificationCode,
        roles:roles
    }
    return config.post<IRegister>('customer/register',sendParams)
}