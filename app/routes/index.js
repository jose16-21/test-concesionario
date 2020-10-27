var express = require("express"),
    router = express.Router();
//var swaggerUi = require("swagger-ui-express");
//var swaggerDocument = require("./../../swagger.json");

//router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));/

/** Module Administrations**/
const usuario = require("./AD/r_usuario");
const empresa = require("./AD/r_empresa");

/** Module Catalgs**/

const cotizacion = require("./TC/r_cotizacion");
const departamento = require("./TC/r_departamento");
const localizador = require("./TC/r_localizador");
const municipio = require("./TC/r_municipio");
const persona = require("./TC/r_persona");
const vehiculo = require("./TC/r_vehiculo");

router.use('/usuario', usuario);
router.use('/empresa', empresa);

router.use('/cotizacion', cotizacion);
router.use('/departamento', departamento);
router.use('/localizador', localizador);
router.use('/municipio', municipio);
router.use('/persona', persona);
router.use('/vehiculo', vehiculo);

module.exports = router;