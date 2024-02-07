const notFound = (req, res, next) => {
    const error = new Error(`not found 404 ${req.originalUrl}`)
    res.status(404)
    next(error);
}


const errorhandler = (error, req, res, next) => {
 if (res.headerSent) {
    return next(error);
 } 

 res.status(error.code || 500).json({message: error.message} || 'an unknown error occured')
}

module.exports = { notFound, errorhandler }