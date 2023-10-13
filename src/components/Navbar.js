import React from 'react'
//import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom'
import logo from "./Logo1.jpg";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light" style={{  height: '100px'}}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/"> 
          {<img src={logo} alt="logo" style={{height:'100px'}}/>  }
          </NavLink>
          &nbsp;
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" style={{fontSize:"20px",fontFamily:'sans-serif', fontWeight:'revert-layer'}}>Home</a>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp; 
              <li className="nav-item" >
                <a className="nav-link" href="/Delete" style={{fontSize:"20px",fontFamily:'sans-serif', fontWeight:'revert-layer'}}>Delete</a>
              </li> 
              &nbsp; &nbsp; &nbsp; &nbsp; 
              <li className="nav-item">
                <a className="nav-link" href="/Search" style={{fontSize:"20px",fontFamily:'sans-serif', fontWeight:'revert-layer'}}>Search</a>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp; 

              <li className="nav-item">
                <a className="nav-link" href="/Update" style={{fontSize:"20px",fontFamily:'sans-serif', fontWeight:'revert-layer'}}>Update</a>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp; 

              <li className="nav-item">
                <a className="nav-link" href="/Signup" style={{fontSize:"20px",fontFamily:'sans-serif', fontWeight:'revert-layer'}}>Registration</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
