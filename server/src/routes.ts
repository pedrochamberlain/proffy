import express from 'express'

import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController'

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criaçõa ou atualização de um registro
// Route Parameters: Identificar qual recurso eu quero atualizar ou deletar (Ex.: '/users/:id')
// Query Parameters: Páginação, filtros, ordenação (Ex.: users?page=2&sort=name)

const routes = express.Router()
const classesControllers = new ClassesController()
const connectionsController = new ConnectionsController()

routes.get('/classes', classesControllers.index)
routes.post('/classes', classesControllers.create)

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes
