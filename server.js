const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("Nice!")
})

app.get('/users', (req, res) => {
    res.json("USERS!")
})


app.listen(3000)