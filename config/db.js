const { Sequelize } = require("sequelize")
require("dotenv").config()

const sequelize = new Sequelize(process.env.DB_URL, {
	dialect: "mysql",
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,
		},
	},
})

const connectDB = async () => {
	try {
		await sequelize.authenticate()
		console.log("Connected to MySQL database.")
	} catch (error) {
		console.error("Database connection failed:", error)
	}
}

module.exports = { sequelize, connectDB }
