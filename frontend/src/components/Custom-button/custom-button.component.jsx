import React from 'react'

import './custom-button.styles.css'
const CustomButton = ({ children, ...props }) => {
	return (
		<button className='custom-button' {...props}>
			{children}
		</button>
	)
}

export default CustomButton
