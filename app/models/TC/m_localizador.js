
module.exports = (sequelize, Sequelize) => {
    const TC_Localizadores = sequelize.define("TC_Localizadores", {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        Localizador: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Tipo: {
            type: Sequelize.ENUM,
            values: [
                'Direccion',
                'Email',
                'Movil',
                'Telefono',
            ],
            defaultValue: 'Telefono',
            allowNull: false
        },
        Estado: {
            type: Sequelize.ENUM,
            values: [
                'Activo',
                'Inactivo',
            ],
            defaultValue: 'Activo',
            allowNull: false
        },
    });
    return TC_Localizadores;
};