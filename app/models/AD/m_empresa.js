
module.exports = (sequelize, Sequelize) => {
    const AD_Empresas = sequelize.define('AD_Empresas', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        Nombre: {
            type: Sequelize.STRING
        },
        RazonSocial: {
            type: Sequelize.STRING
        },
        Tipo: {
            type: Sequelize.ENUM,
            values: [
                'Organizacion',
                'Cliente',
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
        }

    }, {
        name: {
            singular: "AD_Empresa",
            plural: "AD_Empresas"
        }
    });
    return AD_Empresas;
};