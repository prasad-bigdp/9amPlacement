import React from 'react'
import './Header.css'
function Header() {
  return (
    <header>
      <h2>Movie<span>FLIX</span></h2>
      <nav className="menu">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
       
    </header>
  )
}

export default Header
