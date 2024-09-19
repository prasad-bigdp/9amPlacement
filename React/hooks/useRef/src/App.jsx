import React, { useState,useRef } from 'react'

function App ()
{
  const [val, setVal] = useState('')
  const inputRef = useRef('')
  function handleClick ()
  {
    console.log("Hi")
  }
  return (
    <div>
      <h1>Controlled components - state control will be done by useState</h1>
      <input type="text" onChange={(e) => setVal(e.target.value)} />
      <p>Value: {val}</p>
      <input type="text" ref={inputRef} onChange={()=>console.log(inputRef.current.value)}/>
      <button onClick={()=>handleClick(2)}>click me</button>
    </div>
  )
}

export default App
