import React from 'react'

const Displaytodo=({allTodo})=> {
  return (
    <>
    <div>Displaytodo</div>
    {allTodo.map((todo)=>(
      <h1>{todo}</h1>
    ))}
 </>
  )
}

export default Displaytodo