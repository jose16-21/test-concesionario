const express = require('express');
const checkAuth = require('../../midleware/checkout');
const router = express.Router();
const {
    findById,
    deleteVehiculo,
    update,
    findAll,
    create
} = require('../../controllers/TC/c_vehiculo');


router.use(checkAuth);

router
    .route('/:Id')
    .get(findById)
    .delete(deleteVehiculo)
    .put(update);

router
    .route('/')
    .get(findAll)
    .post(create);

module.exports = router;