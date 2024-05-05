import React from 'react'

const Button =({name,color,hello}) =>{
    console.log(name);
  return (
    <>
    <button onClick={()=>hello(888)} className={color}>{name}</button>
    </>
  )
}

export default Button