import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import './App.css'
import { BrowserRouter, Routes, Link, Route } from "react-router-dom"
import Login from "./Login/Login"
import Signup from "./Signup/Signup"
function App() {
  return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path='login'
						element={<Login />}></Route>
					<Route
						path=''
						element={<Login />}></Route>
					<Route
						path='Signup'
						element={<Signup />}></Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
