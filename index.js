const express = require("express")
const schoolRoutes = require("./routes/school.route")
const { connectDB, sequelize } = require("./config/db")

const app = express()

app.use(express.json())

app.use("/api", schoolRoutes)

const startServer = async () => {
	await connectDB()
	await sequelize
		.sync({ alter: true })
		.then(() => console.log("Tables updated!"))
		.catch(err => console.error("Table sync error:", err))
	app.listen(3000, () => console.log(` Server running on port 3000`))
}

startServer()
