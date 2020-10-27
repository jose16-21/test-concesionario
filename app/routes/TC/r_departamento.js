const express = require('express');
const checkAuth = require('../../midleware/checkout');
const router = express.Router();
const {
    findById,
    deleteDepartamento,
    update,
    findAll,
    create
} = require('../../controllers/TC/c_departamento');


router.use(checkAuth);

router
    .route('/:Id')
    .get(findById)
    .delete(deleteDepartamento)
    .put(update);

router
    .route('/')
    .get(findAll)
    .post(create);

module.exports = router;