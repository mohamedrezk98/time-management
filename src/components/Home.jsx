import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container   my-5 ">
      <div className="row my-4  text-center">
        <h1 className='text-center'>Time Management Website</h1>
        <div className="con show my-2 fs-1 f">
          <p className='fs-4 my-4'>welcome to Time Management   Website where you can add tasks  edit task and mark completed tasks  </p>
       
          <ul className="navbar-nav my-5   ">
                            
                            <li className="nav-item my-2">
                                <NavLink className="nav-link bg-primary-subtle " aria-current="/Addtask" to="/addtask">Add task</NavLink>
                            </li>

                            <li className="nav-item  my-2">
                                <NavLink className="nav-link  bg-primary-subtle " aria-current="/Alltasks" to="/Alltasks">AllTasks</NavLink>
                            </li>
                           



                        </ul>

        </div>
       
      </div>
    </div>
  )
}
