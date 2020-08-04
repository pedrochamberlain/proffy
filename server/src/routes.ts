import express from 'express'

import ClassesController from './controllers/ClassesController'

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criaçõa ou atualização de um registro
// Route Parameters: Identificar qual recurso eu quero atualizar ou deletar (Ex.: '/users/:id')
// Query Parameters: Páginação, filtros, ordenação (Ex.: users?page=2&sort=name)

const routes = express.Router()
const classesControllers = new ClassesController()

routes.get('/classes', classesControllers.index)
routes.post('/classes', classesControllers.create)

export default routes
