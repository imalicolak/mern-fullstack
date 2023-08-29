import User from '../models/userModel.js'
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {
	const { username, email, password } = req.body
	// AFTER GETTING PASSWORD, HASH IT
	const hashedPassword = bcryptjs.hashSync(password, 10)
	const newUser = new User({ username, email, password: hashedPassword })

	try {
		await newUser.save()
		// Return success response
		return res
			.status(201)
			.json({ message: 'User registered successfully.' })

		// // Check if username or email is already in use
		// const existingUser = await User.findOne({
		// 	$or: [{ username }, { email }],
		// })

		// if (existingUser) {
		// 	return res.status(400).json({
		// 		message: 'Username or email is already in use:',
		// 	})
		// }

		// If not in use, create a new user
	} catch (error) {
		return res.status(500).json(error.message)
	}
}
