import { createStore } from 'redux'

// action triggers

export const increment = () => ({ type: "INCR" })
export const decrement = () => {
	return { type: "DECR" }
}
 export const reset=()=>({type: "RESET" })
const initialState = { count: 0 }

// reducer

const counterReducer = (state = initialState, action) =>
{
    switch (action.type) {
			case "INCR":
				return { count: state.count + 1 }
			case "DECR":
            return { count: state.count - 1 }
           case "RESET": return { count: 0 }
            default:
            return state;
		}
}
const store = createStore(counterReducer);
export default store;