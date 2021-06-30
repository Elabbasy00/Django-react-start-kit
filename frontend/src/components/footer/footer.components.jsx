import React from 'react'
import Logo from '../../assets/logo-final-08.png'
import { Link } from 'react-router-dom'

import './footer.styles.css'
const Footer = () => {
	return (
		<div>
			<footer className=' py-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-md'>
							<img alt='logo' src={Logo} width='90' height='120' />

							<small className='d-block mt-3 mb-3 text-muted'>© 2017–2021</small>
						</div>

						<div className='col-6 col-md'>
							<h5>Resources</h5>
							<ul className='list-unstyled text-small'>
								<li>
									<Link clLinkssName='link-secondary' to='#'>
										Business
									</Link>
								</li>
								<li>
									<Link className='link-secondary' to='#'>
										Education
									</Link>
								</li>
								<li>
									<Link className='link-secondary' to='#'>
										Government
									</Link>
								</li>
								<li>
									<Link className='link-secondary' to='#'>
										Gaming
									</Link>
								</li>
							</ul>
						</div>
						<div className='col-6 col-md'>
							<h5>About</h5>
							<ul className='list-unstyled text-small'>
								<li>
									<Link className='link-secondary' to='#'>
										Team
									</Link>
								</li>
								<li>
									<Link className='link-secondary' to='#'>
										Locations
									</Link>
								</li>
								<li>
									<Link className='link-secondary' to='#'>
										Privacy
									</Link>
								</li>
								<li>
									<Link className='link-secondary' to='#'>
										Terms
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer
