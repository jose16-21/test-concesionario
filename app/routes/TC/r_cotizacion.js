const express = require('express');
const checkAuth = require('../../midleware/checkout');
const router = express.Router();
const {
    findById,
    deleteCotizacion,
    update,
    findAll,
    create
} = require('../../controllers/TC/c_cotizacion');


router.use(checkAuth);

router
    .route('/:Id')
    .get(findById)
    .delete(deleteCotizacion)
    .put(update);

router
    .route('/')
    .get(findAll)
    .post(create);

module.exports = router;