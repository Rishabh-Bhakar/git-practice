import React, { useState } from 'react'

const Todo = () => {
  const [task, settask] = useState([])
  const [newTask, setnewTask] = useState("")
  function handChangler(event){
    setnewTask(event.target.value)
  }
  function addTask(){
    if(newTask.trim() !== ""){
    settask(task=>[...task,newTask])
    setnewTask("")
    }
  }
  function deleteTask(index){
     
         const updateTask=task.filter((_,i)=> i !== index)
         settask(updateTask)
      
  }
  function MoveTaskUp(index){
    console.log("function call",index);
     const updatedTask=[...task]
    
    if(index>0){
     
      [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]];
      settask(updatedTask)
    }
   
  }
  function  MoveTaskDown(index){
    const updatedTasks=[...task]
 if(index<task.length-1){
  
  [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
  settask(updatedTasks)
 }
  }
  return (
    <>
    <div className='flex flex-col items-center'>
        <h1 className='text-center text-3xl font-bold mb-5'>TO-DO-List</h1>
        <div className='flex items-center gap-3'>
        <input type='text' value={newTask} onChange={handChangler} className='border border-gray-400 rounded px-3 py-2' placeholder='Enter a task...'  />
        <button  onClick={addTask} className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-300 cursor-pointer' >Add</button>
        </div>
        <ol className='mt-6'>
        {task.map((task,index)=>

          <li key={index} className='flex items-center justify-between w-full   border-gray-300 p-4 mb-4 rounded-xl shadow-sm '>
            <span className='font-bold text-2xl p-4 '>{task}</span>
            <div className='flex gap-3'>
            <button onClick={()=>{deleteTask(index)}} className='cursor-pointer border rounded-md bg-red-600 hover:bg-red-500'>
              Delete 
            </button>
            <button onClick={()=>{MoveTaskUp(index)}} className='cursor-pointer bg-yellow-600 hover:bg-yellow-500 rounded-md'>☝</button>
            <button onClick={()=>{MoveTaskDown(index)}} className='cursor-pointer bg-yellow-600 hover:bg-yellow-500 rounded-md'>👇</button>
          </div>
          </li>
        )}
          
        </ol>
    </div>
    </>
  )
}

export default Todo