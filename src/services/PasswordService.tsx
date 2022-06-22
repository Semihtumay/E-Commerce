import axios from "axios"
import { IForgotPassword } from "../models/IForgetPassword"

const baseUrl='http://localhost:8090/'

const config=axios.create({
    baseURL:baseUrl,
    params:{
    },
   /* headers:{
        "Aut Bear":'asdasfasfdasdasdasfasf'
    }*/
})
export const forgotPassword=(email:string)=>{
    const sendParams={
        email:email
    }
    return config.get<IForgotPassword>('forgotPassword',{params:sendParams})
}