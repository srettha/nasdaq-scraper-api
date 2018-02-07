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
            isPositive: {
                type: Sequelize.BOOLEAN,
                defaultValue: 0
            },
            changeInNet: {
                type: Sequelize.FLOAT
            },
            changeInPercentage: {
                type: Sequelize.FLOAT
            },
            date: {
                type: Sequelize.DATEONLY
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            }
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('stock');
    }
};
