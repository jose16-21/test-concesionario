
module.exports = (sequelize, Sequelize) => {
    const TC_Personas = sequelize.define("TC_Personas", {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        Nombres: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Apellidos: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Nacimiento: {
            type: Sequelize.DATE
        },
        Tipo: {
            type: Sequelize.ENUM,
            values: [
                'Cliente',
                'Gerente',
            ],
            defaultValue: 'Cliente',
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
    return TC_Personas;
};