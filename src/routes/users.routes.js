const { Router } = require('express')
const multer = require('multer')
const uploadConfig = require('../configs/upload')

const UserController = require('../controllers/UserController.js')
const UserAvatarController = require('../controllers/UserAvatarController.js')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated.js")

const userRoutes = Router()
const upload = multer(uploadConfig.MULTER)

const userController = new UserController()
const userAvatarController = new UserAvatarController()

userRoutes.post('/', userController.create)
userRoutes.put('/', ensureAuthenticated, userController.update)
userRoutes.patch('/avatar', ensureAuthenticated, upload.single('avatar'), userAvatarController.update)

module.exports = userRoutes