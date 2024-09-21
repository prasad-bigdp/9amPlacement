import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset } from "./store/store.jsx"
function App() {
	const c = useSelector((state) => state.count)
	const dispatch = useDispatch()
	return (
		<div>
			<p>Count:{c}</p>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			<button onClick={() => dispatch(reset())}>reset</button>
		</div>
	)
}

export default App
