'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('stock', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            index: {
                type: Sequelize.STRING
            },
            value: {
                type: Sequelize.FLOAT
            },
            status: {
                type: Sequelize.ENUM('positive', 'negative')
            },
            changeInNet: {
                type: Sequelize.FLOAT
            },
            changeInPercentage: {
                type: Sequelize.FLOAT
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('stock');
    }
};