import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
		<header className=' bg-black text-white flex justify-around text-lg py-5'>
			<Link
				to='login'
				className='  hover:bg-white hover:text-black'>
				Login
			</Link>
			<Link
				to='Signup'
				className='  hover:bg-white hover:text-black'>
				signup
			</Link>
		</header>
	)
}

export default Header
