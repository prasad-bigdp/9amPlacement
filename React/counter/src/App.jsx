import React from 'react'
import './App.css';
import { useState } from 'react';
import Counter from './Counter';
function App ()
{
  let [c,setC]= useState(0)
  function incr ()
  {
    setC(++c)
  }
  function display (msg)
  {
    alert(msg)
  }
  return (
    <div>
      <Counter c={c} setC={setC} incr={incr} display={display} />
    </div>
  )
}

export default App
