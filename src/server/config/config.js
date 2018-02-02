'use strict';

module.exports = {
    development: {
        username: 'root',
        password: 'root',
        database: 'nasdaq',
        host: 'localhost',
        dialect: 'mysql',
        logging: false,
        define: {
            underscored: false,
            freezeTableName: true,
            charset: 'utf8mb4',
            dialectOptions: {
                collate: 'utf8mb4_general_ci'
            },
            timestamps: true
        }
    },
    staging: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: 'mysql',
        logging: false,
        define: {
            underscored: false,
            freezeTableName: true,
            charset: 'utf8mb4',
            dialectOptions: {
                collate: 'utf8mb4_general_ci'
            },
            timestamps: true
        }
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: 'mysql',
        logging: false,
        define: {
            underscored: true,
            freezeTableName: true,
            charset: 'utf8mb4',
            dialectOptions: {
                collate: 'utf8mb4_general_ci'
            },
            timestamps: true
        }
    }
};
