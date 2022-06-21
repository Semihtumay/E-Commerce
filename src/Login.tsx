
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogin } from './services/LoginService';


function Login() {
  const navigate= useNavigate()

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const [loginError, setloginError] = useState(false)
   const [loginMessage, setloginMessage] = useState('')

   const fncSend=(evt:React.FormEvent)=>{
    evt.preventDefault()
    console.log(email,password)

    userLogin(email,password).then(res=>{
      const user=res.data
      console.log(user)
      const durum=user.status
      if(durum){
        const stData = JSON.stringify(user.result)
        sessionStorage.setItem("user",stData)
      }else{
        setloginError(true)
      }
    })
   }


  return (
    <>
    <div className='row'>
      <div className='col-sm-4'></div>
      <div className='col-sm-4 mt-3'>
        <h3>User Login</h3>
        <div style={{display:loginError === true ? 'block' : 'none'}} className="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Error! </strong>{loginMessage}
          <button type="button" className="btn-close" aria-label="Close" onClick={(evt)=>setloginError(false)}></button>
        </div>
        <form onSubmit={fncSend}>
        <div className='mt-3'>
        <input onChange={(evt)=>setEmail(evt.target.value)} type='email' className='form-control' placeholder='E-Mail'></input>
        </div>
        <div className='mt-3'>
        <input onChange={(evt)=>setPassword(evt.target.value)} type='password' className='form-control' placeholder='Password'></input>
        </div>
        <div className='mt-3'>
          <button className='btn btn-success ' type='submit'>Send</button>
        
        </div>
        </form>
      </div>
      <div className='col-sm-4'></div>
    </div>
    </>
  )
}

export default Login;