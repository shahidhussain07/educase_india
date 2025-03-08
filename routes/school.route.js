const express = require("express")
const {
	createSchool,
	listSchools,
} = require("../controllers/school.controller")
const { validateSchoolInput } = require("../middleware/validation")

const router = express.Router()

router.post("/addSchool", validateSchoolInput, createSchool)
router.get("/listSchools", listSchools)

module.exports = router
