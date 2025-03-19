const { Router } = require('express')

const UserController = require('../controllers/UserController.js')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated.js")

const userRoutes = Router()

const userController = new UserController()

userRoutes.post('/', userController.create)
userRoutes.put('/', ensureAuthenticated, userController.update)

module.exports = userRoutes