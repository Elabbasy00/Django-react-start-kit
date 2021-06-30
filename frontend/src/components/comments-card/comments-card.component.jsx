import React from 'react'

import './comments-card.styles.css'

import { Card, Col, Row } from 'react-bootstrap'
const CommentsCard = () => {
	return (
		<div className='comments-card'>
			<Row className='justify-content-center'>
				<Col lg={6}>
					<div className='client-replay'>
						<img src='https://via.placeholder.com/150' alt='First slide' />
						<span>22 Jun 2021</span>
						<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia </p>
					</div>
				</Col>
			</Row>
		</div>
	)
}

export default CommentsCard
