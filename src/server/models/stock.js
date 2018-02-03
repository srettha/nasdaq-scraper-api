'use strict';

const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const Stock = sequelize.define('stock', {
        index: DataTypes.STRING,
        value: DataTypes.FLOAT,
        isPositive: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        },
        changeInNet: DataTypes.FLOAT,
        changeInPercentage: DataTypes.FLOAT,
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: moment().format(),
            scopes: ['read']
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: moment().format(),
            scopes: ['read']
        }
    }, {
        hooks: {
            afterCreate: (stock) => {
                return {
                    index: stock.index,
                    value: stock.value,
                    isPositive: stock.isPositive,
                    changeInNet: stock.changeInNet,
                    changeInPercentage: stock.changeInPercentage
                };
            }
        }
    });
    return Stock;
};
