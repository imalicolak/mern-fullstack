import React from 'react'
import { Link } from 'react-router-dom'

// COLORS: BLACK: #151816, MAIN PURPLE: #7f1266, ACCENT PURPLE: #ee82ee,

const Navbar = () => {
	return (
		<div className='bg-[#7f1266] rounded-xl px-6 mt-3 max-w-2xl min-w-xl mx-auto   '>
			<div className='text-white flex justify-between items-center gap-2 lg:p-4 md:p-4 sm:p-3 p-4 sticky '>
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
					<div className='text-[#151816] font-semibold flex ml-10 gap-3 items-center justify-center'>
						<Link to='sign-in'>
							<li className='justify-center items-center bg-[#ffa500] p-3 px-6 rounded-xl'>
								Sign-in
							</li>
						</Link>
						<Link to='sign-up'>
							<li className='justify-center items-center bg-[#ee82ee] p-3 px-6 rounded-xl'>
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
