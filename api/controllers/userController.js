// CONTROLLERS ARE FUNCTION THAT HANDLE THE REQUEST AND RETURN THE RESPONSE. LOGIC OF ROUTE

export const test = (req, res) => {
	res.json({
		message: 'API is working',
	})
}
