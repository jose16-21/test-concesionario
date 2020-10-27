const express = require('express');
const checkAuth = require('../../midleware/checkout');
const router = express.Router();
const {
    findById,
    deleteMunicipio,
    update,
    findAll,
    create
} = require('../../controllers/TC/c_municipio');


router.use(checkAuth);

router
    .route('/:Id')
    .get(findById)
    .delete(deleteMunicipio)
    .put(update);

router
    .route('/')
    .get(findAll)
    .post(create);

module.exports = router;