const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('../public'));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../navbar/index.html'))
});

app.all('*', (req, res) => {
    res.status(200).send('resource not found')
});

app.listen(5000, ()=> {
    console.log('app listening at port 5000')
});