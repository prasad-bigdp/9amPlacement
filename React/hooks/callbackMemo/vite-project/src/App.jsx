import React from 'react'
import { useState } from 'react'
import { useCallback } from 'react'

function App ()
{
  const [count,setCount]=useState(0)
  function add (a, b)
  {
    console.log(a+b)
  }
  let x=useCallback(() => add(5, 6), [count])
 
  return (
    <div>
      <p>{ count }</p>
      <button onClick={() => { x }}>+</button>
    </div>
  )
}

export default App
