import express from 'express'

const app = express()

app.get('/users', (req, res) => {
    return res.send('Acessou a rota.')
})

app.listen(1234)