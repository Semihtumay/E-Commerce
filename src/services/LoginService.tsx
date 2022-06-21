import axios from "axios"
import { IUser } from "../models/IUser"



const baseUrl='http://localhost:8090/'

const config=axios.create({
    baseURL:baseUrl,
    params:{
    },
   /* headers:{
        "Aut Bear":'asdasfasfdasdasdasfasf'
    }*/
})
export const userLogin=(email:string,password:string)=>{
    const sendParams={
        username:email,
        password:password,
    }
    return config.post<IUser>('login',sendParams)
    //return config.post('userLogin.php',header,sendParams)
}