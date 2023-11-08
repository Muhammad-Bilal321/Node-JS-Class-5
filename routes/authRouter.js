
const express = require("express")
const authController = require("../controllers/authController")
const route = express.Router()

route.post("/login", authController.login)
route.post("/signup", authController.signup)

module.exports = route;