import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createContext } from "react"
let myContext = createContext()
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<myContext.Provider value="secret message">
			<App />
		</myContext.Provider>
	</StrictMode>,
)

export {myContext}