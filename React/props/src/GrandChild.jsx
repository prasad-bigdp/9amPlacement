import React from 'react'
import { useContext } from 'react'
import { myContext } from './main'
function GrandChild ()
{
    const secret = useContext(myContext)
  return (
    <div>
          <p>grand child: {secret}</p>
    </div>
  )
}

export default GrandChild
