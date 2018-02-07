'use strict';

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
        date: DataTypes.DATEONLY
    }, {
        tableName: 'stock'
    });
    return Stock;
};
