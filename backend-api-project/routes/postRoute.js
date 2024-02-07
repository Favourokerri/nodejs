const { Router } = require('express');

router = Router();

router.get('/', (req, res, next) => {
    res.json('this is the post page');
});

module.exports = router;