import React from 'react'

import './carousel.styles.css'

import { Carousel } from 'react-bootstrap'

import BlogCard from '../blog-card/blog-card.components'

const CarouselComponent = ({ children }) => {
	return (
		<div className='custom-carousel'>
			<Carousel>{children}</Carousel>
		</div>
	)
}

export default CarouselComponent
