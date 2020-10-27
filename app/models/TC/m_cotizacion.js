
module.exports = (sequelize, Sequelize) => {
    const TC_Cotizaciones = sequelize.define('TC_Cotizaciones', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        Ingresos: {
            type: Sequelize.DECIMAL(19, 6),
            allowNull: true
        },
        Precio: {
            type: Sequelize.DECIMAL(19, 6),
            allowNull: true
        },
        AniosAntiguedad: {
            type: Sequelize.INTEGER
        },
        PersonasCargo: {
            type: Sequelize.INTEGER
        },
        Estado: {
            type: Sequelize.ENUM,
            allowNull: false,
            values: [
                'Activo',
                'Cancelado',
                'Finalizado'
            ],
            defaultValue: 'Activo',
        }
    });
    return TC_Cotizaciones;
};