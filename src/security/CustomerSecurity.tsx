import React from 'react'
import { Navigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { Result } from '../models/IUser'

function CustomerSecurity(item:{component:JSX.Element}) {
    const control=()=>{
        const stSession=sessionStorage.getItem("user")
        if(stSession){
            try{
                const results:Result=JSON.parse(stSession)
                return results
            }catch(error){
                sessionStorage.removeItem('user')
                return null
            }
        }else{
            return null
        }
    }

    const customerControl=control()

  return (
        customerControl===null
        ?
        <Navigate to='/'/>
        :
        <><NavBar result={customerControl}/>{item.component}</>
  )
}

export default CustomerSecurity