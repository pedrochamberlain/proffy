import express from 'express'

const app = express()

app.use(express.json())

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criaçõa ou atualização de um registro
// Route Parameters: Identificar qual recurso eu quero atualizar ou deletar (Ex.: '/users/:id')
// Query Parameters: Páginação, filtros, ordenação (Ex.: users?page=2&sort=name)

app.get('/', (req, res) => {
    return res.json({ message: "Hello World" })
})

app.listen(1234)
