'use strict';

const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const Stock = sequelize.define('Stock', {
        index: DataTypes.STRING,
        value: DataTypes.FLOAT,
        isPositive: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        },
        changeInNet: DataTypes.FLOAT,
        changeInPercentage: DataTypes.FLOAT,
        date: {
            type: DataTypes.DATE,
            get () {
                return moment(this.getDataValue('date')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: moment.tz('America/New_York').format('YYYY-MM-DD HH:mm:ss')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: moment.tz('America/New_York').format('YYYY-MM-DD HH:mm:ss')
        }
    }, {
        tableName: 'stock'
    });
    return Stock;
};
