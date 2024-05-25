import express from 'express'

const app = express()

const users = []


app.post('/users', (req, res) => {
    
    console.log(req)

    res.send('ok post, deu certo')

})


app.get('/users', (req, res) => {
    res.send('ok, deu bom')  
})


app.listen(3000)

