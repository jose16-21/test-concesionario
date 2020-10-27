const express = require('express');
const checkAuth = require('../../midleware/checkout');
const router = express.Router();
const {
    findById,
    deleteEmpresa,
    update,
    findAll,
    create
} = require('../../controllers/AD/c_empresa');


router.use(checkAuth);

router
    .route('/:Id')
    .get(findById)
    .delete(deleteEmpresa)
    .put(update);

router
    .route('/')
    .get(findAll)
    .post(create);

module.exports = router;