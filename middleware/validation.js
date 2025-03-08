const { z } = require("zod")

// Define Zod schema for input validation
const schoolSchema = z.object({
	name: z.string().min(3, "Name must be at least 3 characters long"),
	address: z.string().min(5, "Address must be at least 5 characters long"),
	latitude: z.number().min(-90).max(90),
	longitude: z.number().min(-180).max(180),
})

// Middleware for school input validation
const validateSchoolInput = (req, res, next) => {
	const validationResult = schoolSchema.safeParse(req.body)

	if (!validationResult.success) {
		return res.status(400).json({
			success: false,
			message: "Validation failed",
			errors: validationResult.error.errors,
		})
	}

	next()
}

module.exports = { validateSchoolInput }
