const { sequelize } = require("../config/db")
const SchoolSchema = require("../models/school.model")

const calculateDistance = (lat1, lon1, lat2, lon2) => {
	const toRad = value => (value * Math.PI) / 180
	const R = 6371 // Radius of Earth in km

	const dLat = toRad(lat2 - lat1)
	const dLon = toRad(lon1 - lon2)

	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(toRad(lat1)) *
			Math.cos(toRad(lat2)) *
			Math.sin(dLon / 2) *
			Math.sin(dLon / 2)

	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
	return R * c // Distance in km
}

exports.createSchool = async (req, res) => {
	try {
		const { name, address, latitude, longitude } = req.body

		const newSchool = await SchoolSchema.create({
			name,
			address,
			latitude,
			longitude,
		})

		res.status(201).json({
			success: true,
			message: "School added successfully",
			data: newSchool,
		})
	} catch (error) {
		console.log(error)

		res.status(500).json({
			success: false,
			message: "Error adding school, Already registered",
			error: error.message,
		})
	}
}

exports.listSchools = async (req, res) => {
	try {
		const { latitude, longitude } = req.query
		// Validate latitude and longitude if provided
		if (latitude && longitude) {
			const userLat = parseFloat(latitude)
			const userLon = parseFloat(longitude)

			if (isNaN(userLat) || userLat < -90 || userLat > 90) {
				return res.status(400).json({
					success: false,
					message: "Latitude must be a number between -90 and 90",
				})
			}

			if (isNaN(userLon) || userLon < -180 || userLon > 180) {
				return res.status(400).json({
					success: false,
					message: "Longitude must be a number between -180 and 180",
				})
			}

			const allSchools = await SchoolSchema.findAll({})

			// calculate the distance and sort accordingly
			const schoolSortWithDistance = allSchools
				.map(school => ({
					...school.toJSON(),
					distance: calculateDistance(
						latitude,
						longitude,
						school.latitude,
						school.longitude
					),
				}))
				.sort((a, b) => a.distance - b.distance)

			res.json(schoolSortWithDistance)
		} else {
			// If no coordinates provided, return all schools unsorted
			const schools = await SchoolSchema.findAll()
			return res.status(200).json({
				count: schools.length,
				data: schools,
			})
		}
	} catch (error) {
		res.status(500).json({
			error: error.message,
		})
	}
}
