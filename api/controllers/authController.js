import User from '../models/userModel.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js'

export const signup = async (req, res, next) => {
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
	} catch (error) {
		next(error)
	}
}
