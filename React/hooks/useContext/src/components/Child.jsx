import React, { useContext } from 'react'
import { myContext } from '../main'
import CounterReducer from './counterReducer'
function Child ()
{
    const value= useContext(myContext)
  return (
      <div>
          <p>GrandChild:</p>
          <p>{value}</p>
           <CounterReducer />
      
    </div>
  )
}

export default Child
