import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import'./Navbar.css';
import Dropdown from './Dropdown';


function Navbar() {
	const [click, setClick]= useState(false);
	const [dropdown, setDropdown] = useState(false); 

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

return(
	<>
		<nav className="navbar">
			<Link to='/' className='navbar-logo'>
				Commercial Real estate in one place
			</Link> 
			<div className='menu-icon' onClick={handleClick}>
				<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
			</div>	
			<ul className={click ? 'nav-menu active' : 'nav-menu'}>
				<li className='nav-item'>
					<Link to='/'className='nav-links' onClick={closeMobileMenu}>
						Home
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/email' className='nav-links' onClick={closeMobileMenu}>
						Email <i className='fas fa-caret-down' />
					</Link>
					{dropdown && <Dropdown />}
				</li>
				<li className='nav-item'>
					<Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
						Profile
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/account' className='nav-links' onClick={closeMobileMenu}>
						Account
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
						login / Sign up
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/faq' className='nav-links' onClick={closeMobileMenu}>
						FAQ
					</Link>
				</li>
			</ul>
			<Button />
		</nav>
  	</>
  );
}

export default Navbar;