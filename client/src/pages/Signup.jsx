import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
	return (
		<>
			<div className='p-10  max-w-sm mx-auto bg-[#ffa500] rounded-2xl  my-24'>
				<h1 className='text-3xl text-center font-bold my-10'>
					Sign up
				</h1>
				<form className='flex flex-col gap-4 '>
					<input
						type='text'
						placeholder='Username'
						id='username'
						className='bg-gray-50 border border-gray-300 p-3  mb-5 rounded-lg'
					/>
					<input
						type='email'
						placeholder='Email'
						id='Email'
						className='bg-gray-50 border border-gray-300 p-3  mb-5 rounded-lg'
					/>
					<input
						type='password'
						placeholder='Password'
						id='password'
						className='bg-gray-50 border border-gray-300 p-3  mb-5 rounded-lg'
					/>
					<button className='bg-[#7f1266] font-semibold text-white p-3 rounded-lg uppercase hover:opacity-80 disabled:opacity-50'>
						Sign up
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
			</div>
		</>
	)
}

export default Signup
