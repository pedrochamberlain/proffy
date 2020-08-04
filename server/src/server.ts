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

app.post('/users', (req, res) => {
    console.log(req.body)

    const users = [
        { name: 'Pedro', age: 21 },
        { name: 'Giulio', age: 22 }
    ]

    return res.send(users)
})

app.listen(1234)