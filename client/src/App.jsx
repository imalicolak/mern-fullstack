import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'

export default function App() {
	return (
		<BrowserRouter className=''>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/about'
					element={<About />}
				/>
				<Route
					path='/sign-in'
					element={<Signin />}
				/>
				<Route
					path='/sign-up'
					element={<Signup />}
				/>
				<Route
					path='/profile'
					element={<Profile />}
				/>
			</Routes>
		</BrowserRouter>
	)
}
