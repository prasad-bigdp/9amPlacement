
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Header from './Header'
import Footer from './Footer'
import Layout from './Layout'
import Product from './Product'
import Dashboard from './Dashboard'
function App() {

  return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route
						path=''
						element={<Home />}
					/>
					<Route
						path='/home'
						element={<Home />}
					/>
					<Route
						path='/about'
						element={<About />}
					/>
					<Route
						path='/product/:id'
						element={<Product />}
					/>
					<Route
						path='/dashboard'
						element={<Dashboard />}
					/>
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

export default App
