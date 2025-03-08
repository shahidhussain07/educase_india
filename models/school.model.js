const { sequelize } = require("../config/db")
const { DataTypes } = require("sequelize")

const SchoolSchema = sequelize.define(
	"Schools",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		latitude: {
			type: DataTypes.FLOAT,
			allowNull: false,
			unique: true,
		},
		longitude: {
			type: DataTypes.FLOAT,
			allowNull: false,
			unique: true,
		},
	},
	{
		tableName: "Schools",
	}
)

module.exports = SchoolSchema
