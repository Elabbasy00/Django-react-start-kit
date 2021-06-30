import React, { useEffect, useRef, useState } from 'react'

import { NavLink, Link } from 'react-router-dom'

import './navbar.styles.css'

import Logo from '../../assets/logo1.png'
import { FaHome } from 'react-icons/fa'
import { NavDropdown, Dropdown, DropdownButton, Nav, Navbar, Container } from 'react-bootstrap'
function TopNav() {
	const navHumb = useRef(null)
	const toggle = useRef(null)
	function toggleNav() {
		// Show Nav
		var navItems = navHumb.current.children
		navHumb.current.classList.toggle('active')

		// Transform Hamburger into 'X'
		toggle.current.classList.toggle('active')

		for (var i = 0, ii = navItems.length; i < ii; i++) {
			navItems[i].classList.toggle('active')
		}
	}

	return (
		<div>
			<div className='small-nav'>
				<div className='brand'>
					<Link className='navbar-brand' to='/'>
						<img alt='logo' src={Logo} width='80' height='80' />
					</Link>
				</div>

				<nav ref={navHumb} className=' nav'>
					<Dropdown>
						<Dropdown.Toggle id='dropdown-basic'>
							<FaHome /> Dawn-دون
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Link className='dropdown-item' to='#action/3.1'>
								Action
							</Link>
							<NavDropdown.Divider />

							<Link className='dropdown-item' to='#action/3.2'>
								Another action
							</Link>
						</Dropdown.Menu>
					</Dropdown>
					<Link to='/' className='nav__link'>
						Home
					</Link>
					<Link to='/home' className='nav__link '>
						Blog
					</Link>
					<Link to='/story' className='nav__link '>
						Our Story
					</Link>
					<Link to='/contact' className='nav__link '>
						Team
					</Link>
					<Link to='/contact' className='nav__link '>
						Projects
					</Link>
					<Link to='/contact' className='nav__link '>
						Contact Us
					</Link>
				</nav>

				<div ref={toggle} onClick={toggleNav} className='hamburger'>
					<span className='hamburger__patty'></span>
					<span className='hamburger__patty'></span>
					<span className='hamburger__patty'></span>
				</div>
			</div>
			<div className='large-nav'>
				<Navbar collapseOnSelect expand='lg' bg='#fff'>
					<Container>
						<Navbar.Brand href='#home'>
							<img alt='logo' src={Logo} width='80' height='80' />
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='responsive-navbar-nav' />
						<Navbar.Collapse id='responsive-navbar-nav'>
							<Nav className='m-auto'>
								<Dropdown>
									<Dropdown.Toggle id='dropdown-basic'>
										<FaHome /> Dawn-دون
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<Link className='dropdown-item' to='#action/3.1'>
											Action
										</Link>
										<NavDropdown.Divider />

										<Link className='dropdown-item' to='#action/3.2'>
											Another action
										</Link>
									</Dropdown.Menu>
								</Dropdown>
							</Nav>
							<Nav>
								<Link className='nav-link' to='#deets'>
									Home
								</Link>
								<Link className='nav-link' to='#memes'>
									Blog
								</Link>
								<Link className='nav-link' to='#deets'>
									Our Story
								</Link>
								<Link className='nav-link' to='#memes'>
									Team
								</Link>
								<Link className='nav-link' to='#deets'>
									Projects
								</Link>
								<Link className='nav-link' to='#memes'>
									Contact Us
								</Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		</div>
	)
}

export default TopNav
