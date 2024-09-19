import React, { createContext,useState } from 'react'
import Parent from './Parent'
import { myContext } from '../main'
function GrandParent ()
{
    const [val, setVal] = useState('')
  return (
      <div>
          <p>GrandParent:</p>
          <input type="text" onChange={(e) => setVal(e.target.value)} />
          <myContext.Provider value={val}>
              <Parent />
          </myContext.Provider>      
    </div>
  )
}
export default GrandParent
