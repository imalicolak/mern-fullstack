import { kMaxLength } from 'buffer'
import express from 'express'

const app = express()

app.listen(3000, () => {
	console.log('SERVER IS RUNNING ON PORT 3000!!!!!')
})
