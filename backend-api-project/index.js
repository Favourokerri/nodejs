const express = require('express');
const { connect } = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();


const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');
const { notFound, errorhandler } = require('./middelware/errormiddelware')

const app = express();
app.use(morgan('tiny'));
app.use([express.json(), express.urlencoded({extended: true})])

//routes
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);

//error handling
app.use(notFound);
app.use(errorhandler);


connect(process.env.MONGO_URI)
.then(app.listen(process.env.PORT, () => {
    console.log('server listening at port 5000');
}))
.catch(err => {
    console.log(`could not connect to db: ${err}`);
});