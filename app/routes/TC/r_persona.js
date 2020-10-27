const express = require('express');
const checkAuth = require('../../midleware/checkout');
const router = express.Router();
const {
    findById,
    deletePersona,
    update,
    findAll,
    create
} = require('../../controllers/TC/c_persona');


//router.use(checkAuth);

router
    .route('/:Id')
    .get(findById)
    .delete(deletePersona)
    .put(update);

router
    .route('/')
    .get(findAll)
    .post(create);

module.exports = router;