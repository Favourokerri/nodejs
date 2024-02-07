const express = require('express');
const { products } = require('../data.js/products.js');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1> Home page </h1><a href ="/api/products/"> products </a>')
});

app.get('/api/products', (req, res) => {

    const newProduct = products.map((product) => {
        const {id, name, price } = product;
        return {id, name, price}
    })
    res.json(newProduct);
});

app.get('/api/products/:id', (req, res) => {
    const productId  = req.params
    const SingleProduct = products.find((product) => product.id === Number(productId.id))

    if (!SingleProduct) {
        res.status(404).send('<h1> Product dose not exit <h1>')
    }
    res.json(SingleProduct);
})
app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query;
    let sortedArray = [...products];

    if (search) {
        sortedArray = sortedArray.filter(product => product.name.startsWith(search));
    }

    if (limit) {
        sortedArray = sortedArray.slice(0, Number(limit));
    }

    if (sortedArray.length === 0) {
        return res.status(200).json({success: true, data:[]})
    }

    res.json(sortedArray);
})

app.all('*', (req, res) => {
    res.status(404).send('<h1> Resource not found </h1>')
})

app.listen(5000, ()=> {
    console.log('app listening at port 5000')
});