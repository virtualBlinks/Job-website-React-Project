import React, { useState } from 'react'


const Addtodo =({additem})=> {
  const [newTodo, setnewTodo] = useState("")
  return (
    <>
    <div>Addtodo</div>
    <input onChange={(e)=>(setnewTodo(e.target.value))} className='my-2 form-control' type="text" placeholder='Enter Todo Items'/>
    <button onClick={()=>additem(newTodo)} className='btn btn-primary w-100'>Add Item</button>
   </> 
 )
}

export default Addtodo