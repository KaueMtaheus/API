import express from 'express'

const app = express()
app.use(express.json())


const users = []


app.post('/users', (req, res) => {
    
    users.push(req.body)

    res.send('ok post, deu certo!')

})


app.get('/users', (req, res) => {
    res.json(users)
})


app.listen(3000)

