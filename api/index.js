import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'

dotenv.config()
console.log('MONGO_URI:', process.env.MONGO_URI)

mongoose
	.connect(
		'mongodb+srv://ali:ali@mern.dr4qjb8.mongodb.net/mern-auth?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => {
		console.log('CONNECTED TO MONGO DB 🙌🏻🙌🏻🙌🏻')
	})
	.catch((err) => {
		console.error('Error connecting to MongoDB 🛑:', err)
	})

const app = express()

// ALLOW JSON INPUT FOR BACKEND
app.use(express.json())

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
	console.log('The Server is running on port', PORT, '🔥🎁🟢!')
})

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)
