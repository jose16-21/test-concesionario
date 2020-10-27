const express = require('express');
const checkAuth = require('../../midleware/checkout');
const router = express.Router();
const {
    findById,
    deleteUsuario,
    update,
    findAll,
    create,
    user_login
} = require('../../controllers/AD/c_usuario');


router.use(checkAuth);
router.post('/auth', user_login);
router
    .route('/:Id')
    .get(findById)
    .delete(deleteUsuario)
    .put(update);

router
    .route('/')
    .get(findAll)
    .post(create);

module.exports = router;