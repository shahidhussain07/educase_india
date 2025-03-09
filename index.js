const express = require("express")
const schoolRoutes = require("./routes/school.route")
const { connectDB, sequelize } = require("./config/db")
require("dotenv").config()

const app = express()

app.use(express.json())

app.use("/api", schoolRoutes)

const startServer = async () => {
	await connectDB()
	await sequelize
		.sync({ alter: true })
		.then(() => console.log("Tables updated!"))
		.catch(err => console.error("Table sync error:", err))
	app.listen(process.env.PORT || 3000, () =>
		console.log(` Server running on port 3000`)
	)
}

startServer()
