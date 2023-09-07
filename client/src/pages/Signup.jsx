import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Signup = () => {
	// SAVE VALUES IN STATE
	const [formData, setFormData] = useState({})
	// LOG ERROR MESSAGES
	const [error, setError] = useState(false)
	// VALIDATE FORM DATA
	const [loading, setLoading] = useState(false)

	// HANDLE CHANGE
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value })
	}
	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			setLoading(true)
			setError(false)
			const res = await fetch('/api/auth/signup', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			})

			const data = await res.json()
			console.log(data)
			setLoading(false)
			if (data.success === false) {
				setError(true)
				return
			}
		} catch (error) {
			console.error('Error:', error)
			setLoading(false)
			setError(true)
		}
	}

	return (
		<>
			<div className='p-10  max-w-sm mx-auto bg-[#ffa500] rounded-2xl  my-24'>
				<h1 className='text-3xl text-center font-bold my-10'>
					Sign Up
				</h1>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col gap-4 '
				>
					<input
						onChange={handleChange}
						type='text'
						placeholder='Username'
						id='username'
						className='bg-gray-50 border border-gray-300 p-3  mb-5 rounded-lg'
					/>
					<input
						onChange={handleChange}
						type='email'
						placeholder='Email'
						id='email'
						className='bg-gray-50 border border-gray-300 p-3  mb-5 rounded-lg'
					/>
					<input
						onChange={handleChange}
						type='password'
						placeholder='Password'
						id='password'
						className='bg-gray-50 border border-gray-300 p-3  mb-5 rounded-lg'
					/>
					<button
						disabled={loading}
						className='bg-[#7f1266] font-semibold text-white p-3 rounded-lg uppercase hover:opacity-80 disabled:opacity-50'
					>
						{loading ? 'Loading...' : 'Sign up'}
					</button>
				</form>
				<div className='mt-5 flex gap-2 justify-center'>
					<p> Have an account?</p>
					<Link to='/sign-in'>
						<span className='text-[#7f1266]'>
							Sign in
						</span>
					</Link>
				</div>
				<div>
					<p className='text-red-600 mt-5 text-center justify-center '>
						{error && 'Something went wrong!'}
					</p>
				</div>
			</div>
		</>
	)
}

export default Signup
