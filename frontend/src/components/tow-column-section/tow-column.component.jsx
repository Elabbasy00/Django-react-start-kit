import React from 'react'

import { Row, Col, Container } from 'react-bootstrap'

import './tow-column.styles.css'
function TowColumneSection({ children, img }) {
	return (
		<div className='tow-column'>
			<Container>
				<Row>
					<Col lg={6}>
						<div className='text-column'>{children}</div>
					</Col>
					<Col lg={6}>
						<div className='image-column'>
							<img alt='' src={img} />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default TowColumneSection
