import React, { useContext, useEffect, useState } from 'react'
import { taskContext } from '../Context/TaskContext'
import AllTasks from './AllTasks'
import Edit from './Edit'

export default function AddTask() {
  const [title, setTitle] = useState('')
  const [decription, setDecription] = useState("")
  const { addTask, item } = useContext(taskContext)
  useEffect(() => {
    if (item !== null) {
      setTitle(item.title)
      setDecription(item.decription)
    }


  }, [item])
 
  const handlesubmit = (e) => {
    e.preventDefault();
    addTask({ title: title, decription: decription, id: Math.floor(Math.random() * 100000) })
    setDecription('')
    setTitle('')
  }

  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleDecription = (e) => {
    setDecription(e.target.value)


  }

  return (<>
     <form action="" className=' border-3' onSubmit={handlesubmit}>
      <h1 className=' text-center my-3'>Add Task</h1>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-md-12   my-2 ">
            <label className="  form-label  my-2 ">Title</label>
            <input required value={title} className='form-control' onChange={handleChange} type="text" placeholder='Enter task title ' />

          </div>
          <div className="col-md-12 my-2">
            <label className=" form-label my-2 "> Decription</label>
            <textarea required  rows={3}  onChange={handleDecription} value={decription} className='form-control' type="text" placeholder='Enter task decription  ' />
            <button className=' btn bg-primary-subtle  border-0 my-4 rounded-2 w-100 py-1 fs-5 ' type='submit'> submit   </button>
          </div>
        </div>
      </div>



    </form>:


  </>


  )
}
