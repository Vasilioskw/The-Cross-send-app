import React, { useState } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import'./Navbar.css'
import Dropdown from './Dropdown'

function Navbar() {
return(
		<>
			<nav className="navbar">
				<Link to='/' 
				className='navbar-logo'>
					Commercial Real estate in one place
				</Link> 
			</nav>
  </>
  );
}

export default Navbar;