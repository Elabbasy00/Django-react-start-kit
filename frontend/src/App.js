import React from 'react'

import TopNav from './components/navbar/navbar.component'

import Footer from './components/footer/footer.components'

import { Route } from 'react-router-dom'
import HomePage from './pages/Home/home-page'
// axios.defaults.withCredentials = true

function App() {
	return (
		<div>
			<TopNav />

			<Route component={HomePage} to='/' />

			<Footer />
		</div>
	)
}

export default App
