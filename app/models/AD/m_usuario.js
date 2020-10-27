
module.exports = (sequelize, Sequelize) => {
    const AD_Usuarios = sequelize.define('AD_Usuarios', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        Email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        Usuario: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        Password: {
            type: Sequelize.STRING,
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
        }
    });
    return AD_Usuarios;
};