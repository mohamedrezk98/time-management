import React, { useContext, useEffect, useState } from 'react'
import { taskContext } from '../Context/TaskContext'

export default function Edit() {
  const [title, setTitle] = useState('')
  const [decription, setDecription] = useState("")
  const {editTask ,item} = useContext(taskContext)
 
 useEffect(()=>{
   if(item !== null){
    setTitle(item.title)
    setDecription(item.decription)
   }

 },[item])
  const handleUpdate = (e) => {
    e.preventDefault();
    editTask({ title: title, decription: decription, id:item.id })
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
    <form action="" className=' border-3' onSubmit={handleUpdate}>
      <h1 className=' text-center my-3'>Edit Task</h1>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-md-12   my-2 ">
            <label className="  form-label  my-2 ">Title</label>
            <input required value={title} className='form-control' onChange={handleChange} type="text" placeholder='Enter task title ' />

          </div>
          <div className="col-md-12 my-2">
            <label className=" form-label my-2 "> Decription</label>
            <textarea required  rows={3}  onChange={handleDecription} value={decription} className='form-control' type="text" placeholder='Enter task decription  ' />
            <button className=' btn bg-primary-subtle  border-0 my-4 rounded-2 w-100 py-1 fs-5 ' type='submit'> Update   </button>
          </div>
        </div>
      </div>




    </form>

  </>


  )
}
