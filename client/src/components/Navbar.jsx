import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='bg-[#050505] relative top-6 rounded-xl px-10 max-w-[60%] min-w-[60%] mx-auto'>
			{/* Start of Navbar container */}
			<div className='text-white flex justify-between tracking-normal items-center gap-6 py-4 px-2 m-0 sticky'>
				<div>
					<Link to='/'>
						{/* Navbar Brand */}
						<h1 className=''>
							MERN
							<span className='font-bold'>
								{' '}
								AUTH{' '}
							</span>
						</h1>
					</Link>
				</div>
				<div className='flex gap-8 list-none '>
					{/* Navigation Links */}
					<Link to='/home'>
						<li className='text-white'>Home</li>
					</Link>
					<Link to='/about'>
						<li className='text-white'>About</li>
					</Link>
					<Link to='/pricing'>
						<li className='text-white'>Pricing</li>
					</Link>
				</div>
				<div className='text-[#151816] font-semibold flex ml-10 gap-3 items-center justify-center'>
					<ul className='flex gap-5 items-center justify-center list-none'>
						{/* Sign-in and Sign-up Links */}
						<Link to='/sign-in'>
							<li className='justify-center items-center bg-[#ffa500] p-3 px-6 rounded-xl'>
								Sign-in
							</li>
						</Link>
						<Link to='/sign-up'>
							<li className='justify-center items-center bg-[#ee82ee] p-3 px-6 rounded-xl'>
								Sign-up
							</li>
						</Link>
					</ul>
				</div>
			</div>
			{/* End of Navbar container */}
		</div>
	)
}

export default Navbar
