import React, { useContext, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/3.jpg'
export default function Navbar() {
  
    return (
        <>
            <nav className="navbar navbar-expand-lg  py-2 bg-body-tertiary ">
                <div className="container-fluid mx-2">
                    <NavLink className="navbar-brand" to="/home">
                        <img  style={{width:'150px' ,height:"50px"}} src={logo} alt="" />

                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2  mb-lg-0">
                            <li className="nav-item ">

                                <NavLink className="nav-link " aria-current="/home" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link " aria-current="/Addtask" to="/addtask">Add task</NavLink>
                            </li>

                            <li className="nav-item ">
                                <NavLink className="nav-link " aria-current="/Alltasks" to="/Alltasks">AllTasks</NavLink>
                            </li>
                           



                        </ul>
                        <ul className="navbar-nav ms-aut mb-2 mb-lg-0 align-items-center">
                      

                         
                            <li className="nav-item ">
                                <NavLink className="nav-link  bg-main rounded-2  mx-2" aria-current="/" to="/Signin">logout</NavLink>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}


