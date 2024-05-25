import express from 'express'

const app = express()

app.get('/users', (req, res) => {
    res.send('ok, deu bom')  
})


app.listen(3000)
