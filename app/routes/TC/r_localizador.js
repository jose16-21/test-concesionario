const express = require('express');
const checkAuth = require('../../midleware/checkout');
const router = express.Router();
const {
    findById,
    deleteLocalizador,
    update,
    findAll,
    create
} = require('../../controllers/TC/c_localizador');


router.use(checkAuth);

router
    .route('/:Id')
    .get(findById)
    .delete(deleteLocalizador)
    .put(update);

router
    .route('/')
    .get(findAll)
    .post(create);

module.exports = router;