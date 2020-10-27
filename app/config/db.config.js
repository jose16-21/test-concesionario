
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    process.env.database,
    process.env.user,
    process.env.clave,
    {
        host: process.env.host,
        dialect: "mysql",
        timezone: "America/Guatemala",
    }
);

const db = {};
sequelize.options.logging = false;
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync({ force: true }).then(() => {
    console.log("Generado exitosamente");
}).catch(error => {
    console.log(error.message);
});

/**Models Administrations**/
db.Usuario = require("../models/AD/m_usuario")(sequelize, Sequelize);
db.Empresa = require("../models/AD/m_empresa")(sequelize, Sequelize);
/**Models  Catalogs**/
db.Departamento = require("../models/TC/m_departamento")(sequelize, Sequelize);
db.Municipio = require("../models/TC/m_municipio")(sequelize, Sequelize);
db.Persona = require("../models/TC/m_persona")(sequelize, Sequelize);
db.Localizador = require("../models/TC/m_localizador")(sequelize, Sequelize);
db.Vehiculo = require("../models/TC/m_vehiculo")(sequelize, Sequelize);
db.Cotizacion = require("../models/TC/m_cotizacion")(sequelize, Sequelize);
/**Relationship */
db.Departamento.hasMany(db.Municipio, {
    foreignKey: { allowNull: false },
    onDelete: "RESTRICT",
});
db.Municipio.belongsTo(db.Departamento);

db.Persona.hasOne(db.Usuario, {
    foreignKey: { allowNull: false },
    onDelete: "RESTRICT",
});

db.Persona.hasMany(db.Empresa, {
    foreignKey: { allowNull: true },
    onDelete: "RESTRICT",
});
db.Empresa.belongsTo(db.Persona);

db.Persona.hasMany(db.Localizador, {
    foreignKey: { allowNull: true },
    onDelete: "RESTRICT",
});
db.Localizador.belongsTo(db.Persona);

db.Empresa.hasMany(db.Vehiculo, {
    foreignKey: { allowNull: true },
    onDelete: "RESTRICT",
});
db.Vehiculo.belongsTo(db.Empresa);

db.Empresa.hasMany(db.Cotizacion, {
    foreignKey: { allowNull: true },
    onDelete: "RESTRICT",
});
db.Cotizacion.belongsTo(db.Empresa);

db.Vehiculo.hasMany(db.Cotizacion, {
    foreignKey: { allowNull: true },
    onDelete: "RESTRICT",
});
db.Cotizacion.belongsTo(db.Vehiculo);

db.Persona.hasMany(db.Cotizacion, {
    foreignKey: { name: "TCClienteId", allowNull: true },
    onDelete: "RESTRICT",
});

db.Cotizacion.belongsTo(db.Persona, {
    as: "Cliente",
    foreignKey: { name: "TCClienteId", allowNull: true },
});

db.Persona.hasMany(db.Cotizacion, {
    foreignKey: { name: "TCAgenteId", allowNull: true },
    onDelete: "RESTRICT",
});

db.Cotizacion.belongsTo(db.Persona, {
    as: "Agente",
    foreignKey: { name: "TCAgenteId", allowNull: true },
});



