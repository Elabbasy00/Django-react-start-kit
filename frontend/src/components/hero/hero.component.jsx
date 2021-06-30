import React from 'react'

import HeroImage from '../../assets/heroImage.svg'

import { Container } from 'react-bootstrap'
import './hero.styles.css'
function HeroSection() {
	return (
		<section id='hero' className='section-showcase'>
			<div className='showcase-wrapper'>
				<div className='hero-info'>
					<Container>
						<h1>Dawn - ‫دون‬</h1>
						<p>
							دون سطور الغد. مؤسسة بنيت للاسهام في تدوين المستقبل <br />
							عن طريق المشاركة المعرفية ونشر العلم النافع
						</p>
						<a href='#about' className='more-info'>
							Read More
						</a>
					</Container>
				</div>

				<div className='hero-img'>
					<img src={HeroImage} alt='' />
				</div>
			</div>
		</section>
	)
}

export default HeroSection
