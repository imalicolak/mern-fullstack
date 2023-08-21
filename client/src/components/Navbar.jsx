import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='bg-cyan-200 lg:w-[40%] md:w-[50%] sm:w-[70%] xs:w-[90%] xs:rounded-none rounded-3xl mx-auto drop-shadow-xl mt-4 xs:mt-0  '>
			<div className='flex justify-between items-center  max-w-2xl mx-auto p-4 '>
				<Link to='/'>
					<h1 className=' '>
						MERN{' '}
						<block className='font-bold'> AUTH </block>
					</h1>
				</Link>
				<ul className='flex gap-4'>
					<Link to='home'>
						<li>Home</li>
					</Link>
					<Link to='about'>
						<li>About</li>
					</Link>
					<Link to='sign-in'>
						<li>Sign-in</li>
					</Link>
					<Link to='sign-up'>
						<li>Sign-up</li>
					</Link>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
