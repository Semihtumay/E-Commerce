import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {  Result } from '../models/IUser'

//(item:{bilgi:Bilgiler} => componentin beklediği şeylere props denir
function NavBar(item:{result:Result}) {
    const navigate= useNavigate()
    
    const fncClear=()=>{
        sessionStorage.removeItem('user')
    }

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <NavLink to='/dashboard' className="nav-link"> Dashboard </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to='/settings' className="nav-link"> Settings </NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><NavLink onClick={fncClear} to='/' className="nav-link"> Logout </NavLink></li>     
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled"> {item.result.firstName} {item.result.lastName}</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar