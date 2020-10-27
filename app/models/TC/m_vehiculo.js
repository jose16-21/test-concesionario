
module.exports = (sequelize, Sequelize) => {
    const TC_Vehiculo = sequelize.define('TC_Vehiculo', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        Marca: {
            type: Sequelize.STRING,
            allowNull: true
        },
        Anio: {
            type: Sequelize.INTEGER
        },
        Puertas: {
            type: Sequelize.INTEGER
        },

        Tracccion: {
            type: Sequelize.ENUM,
            allowNull: false,
            values: [
                'Efectivo',
                'Credito'
            ],
            defaultValue: 'Efectivo',
        },

        Tipo: {
            type: Sequelize.ENUM,
            allowNull: false,
            values: [
                'Efectivo',
                'Credito'
            ],
            defaultValue: 'Efectivo',
        },
        Estado: {
            type: Sequelize.ENUM,
            allowNull: false,
            values: [
                'Activo',
                'Inactivo',
            ],
            defaultValue: 'Activo',
        }
    });
    return TC_Vehiculo;
};