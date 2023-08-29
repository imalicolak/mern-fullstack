import express from 'express'
import { test } from '../controllers/userController.js'

const router = express.Router()

// TEST API ROUTE
router.get('/', test)

export default router

// When we export default for a function, we are essentially exporting the function as a global object. This means that we can import the function into other modules without having to specify the full name of the function.
