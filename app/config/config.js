require('dotenv').config();

module.exports = {
    "development": {
        "username": process.env.user,
        "password": process.env.clave,
        "database": process.env.database,
        "host": process.env.host,
        "dialect": "mysql",
        // "operatorsAliases": false
    },
    "test": {
        "username": process.env.user,
        "password": process.env.clave,
        "database": process.env.database,
        "host": process.env.host,
        "dialect": "mysql",
    },
    "production": {
        "username": process.env.user,
        "password": process.env.clave,
        "database": process.env.database,
        "host": process.env.host,
        "dialect": "mysql",
        "operatorsAliases": false
    }
};
