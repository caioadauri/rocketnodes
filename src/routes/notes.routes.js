const { Router } = require('express')

const NotesController = require('../controllers/NotesController')

const notesRoutes = Router()

const notesController = new NotesController()

notesRoutes.get('/:id', notesController.show)
notesRoutes.post('/:user_id', notesController.create)
notesRoutes.delete('/:id', notesController.delete)
notesRoutes.get('/', notesController.index)


module.exports = notesRoutes