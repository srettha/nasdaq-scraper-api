'use strict';

const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const Stock = sequelize.define('stock', {
        index: DataTypes.STRING,
        value: DataTypes.FLOAT,
        status: DataTypes.ENUM('positive', 'negative'),
        changeInNet: DataTypes.FLOAT,
        changeInPercentage: DataTypes.FLOAT,
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: moment().format()
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: moment().format()
        }
    });
    return Stock;
};
