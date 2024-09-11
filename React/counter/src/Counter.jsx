import React from 'react'

function Counter({c,incr,display}) {
  return (
		<div className='counter'>
			<p>count:{c}</p>
			<div id='buttons'>
				<button onClick={incr}>+</button>
				<button>-</button>
				<button>reset</button>
          </div>
          <button onClick={() =>
          {
              display("i'm from child")
          }}>trigger parent</button>
		</div>
	)
}

export default Counter
