//Using express
const express = require('express');

const app = express()

//home page
app.get('/', (req, res)=> {
    res.status(200).send('This is the home page using express')
})

// about page
app.get('/about', (req, res) => {
    res.status(200).send('about page')
})

app.listen(5000, ()=> {
    console.log('server listening on port 5000')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1> resource not found </h1>')
})