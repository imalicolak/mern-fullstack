import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='bg-cyan-200 w-[90%] lg:w-[85%] md:w-[80%] sm:w-[75%] rounded-full mx-auto  mt-4  '>
			<div className='flex justify-evenly items-center gap-2 lg:p-4 md:p-4 sm:p-4 max-w-2xl mx-auto p-4 sticky '>
				<Link to='/'>
					<h1 className=' '>
						MERN
						<block className='font-bold'> AUTH </block>
					</h1>
				</Link>
				<ul className='flex gap-5 items-center justify-center'>
					<Link to='home'>
						<li>Home</li>
					</Link>
					<Link to='about'>
						<li>About</li>
					</Link>
					<Link to='about'>
						<li>Pricing</li>
					</Link>
					<div className='flex ml-10 gap-3 items-center justify-center'>
						<Link to='sign-in'>
							<li className='justify-center items-center bg-blue-300 p-3 px-6 rounded-full'>
								Sign-in
							</li>
						</Link>
						<Link to='sign-up'>
							<li className='justify-center items-center bg-blue-300 p-3 px-6 rounded-full'>
								Sign-up
							</li>
						</Link>
					</div>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
