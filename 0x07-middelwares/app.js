const express = require('express');
const { logger, authorize } = require('./middelware')
const morgan = require('morgan')

const app = express()

// app.use([logger, authorize]) // our own logger

app.use(morgan('tiny')) //package logger
//req ===== middelware ========= res

app.get('/', (req, res) => {
    res.send('hello home page');
})

app.get('/about', (req, res) => {
    res.send('hello about page');
})

app.get('/contact', (req, res) => {
    res.send('hello home page');
})

app.get('/services', (req, res) => {
    res.send('hello about page');
})

app.listen(5000, () => {
    console.log('app listening at port 5000')
})

//6:44