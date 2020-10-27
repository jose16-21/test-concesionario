var express = require("express"),
    router = express.Router();
//var swaggerUi = require("swagger-ui-express");
//var swaggerDocument = require("./../../swagger.json");

//router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));/

/** Module Administrations**/

const usuario = require("./AD/r_usuario");

router.use('/usuario', usuario);

module.exports = router;