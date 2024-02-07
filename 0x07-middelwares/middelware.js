const logger = (req, res, next) => {
    method = req.method;
    url = req.url;
    time = new Date().getFullYear();

    console.log(method, url, time);
    next();
}

const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'john') {
        req.user = {name: 'john'};
        console.log('authorized');
        next();
    }
    else {
       res.status(401).send('unauthorized');
        console.log('inauthorized');
        next();
    }
}

module.exports = {logger, authorize}