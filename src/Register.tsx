
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userRegister } from './services/CustomerRegisterService'

function Register() {

    const navigate= useNavigate()

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [enabled, setEnabled] = useState('true')
    const [tokenExpired, setTokenExpire] = useState('true')
    const [verificationCode, setVerificationCode] = useState('')
    const [roles, setRoles] = useState('')



    const [loginError, setloginError] = useState(false)
    const [loginMessage, setloginMessage] = useState('')

    const fncRegister=(evt:React.FormEvent)=>{
        evt.preventDefault()
        console.log(name,surname,phone,email,password)
    


    userRegister(name,surname,phone,email,password,enabled,tokenExpired,verificationCode,roles).then(res=>{
        const user=res.data
        console.log(user)
        
      
    })
}


  return (
    <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4 mt-3'>
            <h3>Register</h3>
            <div style={{display:loginError===true ? 'block' : 'none'}} className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Error! </strong>{loginMessage}
                <button type="button" className="btn-close" aria-label="Close" onClick={(evt)=>setloginError(false)}></button>
            </div>
            <form onSubmit={fncRegister}>
            <div className='mt-3'>
                <input required onChange={(evt)=>setName(evt.target.value)} className='form-control' placeholder='Name'></input>           
             </div>
            <div className='mt-3'>
            <input required onChange={(evt)=>setSurname(evt.target.value)} className='form-control' placeholder='Surname'></input>
            </div>
            <div className='mt-3'>
                <input required onChange={(evt)=>setPhone(evt.target.value)} className='form-control' placeholder='Phone Number'></input>           
             </div>
            <div className='mt-3'>
            <input required onChange={(evt)=>setEmail(evt.target.value)} type='email' className='form-control' placeholder='E-Mail'></input>
            </div>
            <div className='mt-3'>
            <input required onChange={(evt)=>setPassword(evt.target.value)} type='password' className='form-control' placeholder='Password'></input>
            </div>
            <div className='mt-3'>
            <button className='btn btn-success' type='submit'>Register</button>
            <a onClick={(evt)=>navigate('/')} role='button' className='btn btn-danger'>Login</a>
            </div>
            </form>
        </div>
        <div className='col-sm-4'></div>
    </div>
  )
}

export default Register