import React, { useContext, useState } from 'react'
import { taskContext } from '../Context/TaskContext'
import Edit from './Edit';


export default function AllTasks() {
  const { tasks, deleteItem, findItem, item } = useContext(taskContext);
  const [check, isChecked] = useState("unchecked")

  const handleClicked = (index) => {
    const newChecked = [...tasks]
    newChecked[index].checked = !newChecked[index].checked
    isChecked(newChecked)
  }

  
  return (<>

    {item ? <Edit /> : " "}
    <div className="container   border border-primary-black my-3 ">
      <div className="row my-4 ">
        <h2 className='text-center'>AllTasks</h2>
        <ul className='  list-unstyled col-md-12 m-auto'>

          {tasks.length ? tasks.map((item, index) => {
            return (
              <li className='border border-primary-black my-1  p-2 d-flex justify-content-between  align-items-center border-dark-subtle' key={index}>

                <div className="contain  d-flex align-items-center">
                  <div className=' p-1 m-1'>
                  < input  className='p-3' onChange={() => {handleClicked(index) }}  value={item.check} checked={item.check} type="checkbox"/>
                  </div>
                  <div >

                    <h4  style={{ textDecoration: item.checked ? "line-through" : "none" }}>{item.title}</h4>
                    <p style={{ textDecoration: item.checked ? "line-through" : "none" }}> {item.decription}</p>
                  </div>
                </div>




                <div className='d-flex align-items-center'>

                  <button className='  btn btn-outline-success  px-4' onClick={() => findItem(item.id)}>Edit</button>
                  <button className='mx-1 btn btn-outline-danger my-2' onClick={() => deleteItem(item.id)}>Delete</button>
                </div>
              </li>
            )
          }) : <h4 className='text-center text-info  '>No Tasks Found </h4>}

        </ul>
      </div>
    </div>



  </>

  )
}
