import React, { createContext, useEffect, useState } from 'react'
export const taskContext = createContext(0)

export default function TaskContextProvider({children}) {
    const [tasks, setTasks] = useState( JSON.parse(localStorage.getItem('taskList'))||[] )
    useEffect(()=>{
        localStorage.setItem('taskList',JSON.stringify(tasks))
    },[tasks])
    const [item, setItem] = useState(null  )

    const deleteItem=(id)=>{
        const newTask=tasks.filter((item)=>item.id !==id)
        
        setTasks(newTask)
    }
    const editTask=(task)=>{
        const editTasks =tasks.map((item)=>{
              return item.id===task.id?task:item
            
                
        })
        setTasks(editTasks)
        setItem(null)
        
    }
    const addTask=(task,decription)=>{
        setTasks([...tasks,task])
    }
    const findItem=(id)=>{
       const task=tasks.find((item)=> item.id===id)
       setItem(task)
     
    }


    return <taskContext.Provider value={{ tasks, addTask,deleteItem ,findItem,item,editTask}}>
        {children}

    </taskContext.Provider>
}
