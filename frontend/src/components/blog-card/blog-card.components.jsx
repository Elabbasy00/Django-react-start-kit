import React from 'react'

import './blog-card.styles.css'

import { Container, Row, Col } from 'react-bootstrap'

const BlogCard = () => {
	return (
		<div className='blog-card'>
			<Container>
				<Row>
					<Col lg={6}>
						<div className='blog-info'>
							<h2>Sed ut perspiciatis unde omnis</h2>
							<p>
								Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
								consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
								quisquam est, qui dolorem.
							</p>
						</div>
					</Col>
					<Col lg={6}>
						<div className='blog-img'>
							<img
								className='d-block w-100'
								src='https://via.placeholder.com/250'
								alt='First slide'
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default BlogCard
