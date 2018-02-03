'use strict';

const moment = require('moment');
const httpStatus = require('http-status');
const Model = require('../models');
const { scrapeWebsite } = require('../services');

const getNasdaq = async (req, res, next) => {
    try {
        let filterFrom = req.query.filterFrom || moment().format('YYYY-MM-DD');
        let filterTo = req.query.filterTo || moment(filterFrom).add(1, 'd').format('YYYY-MM-DD');
        let stocks = await Model.stock.findAll({
            order: [['id', 'DESC']],
            where: { createdAt: { $between: [filterFrom, filterTo] } },
            attributes: ['index', 'value', 'isPositive', 'changeInNet', 'changeInPercentage']
        });
        res.status(httpStatus.OK).json({
            message: `Successfully retreived Nasdaq stock's price from ${filterFrom} to ${filterTo}`,
            stocks: stocks
        });
    } catch (err) {
        next(err);
    }
};

const scapeNasdaq = async (req, res, next) => {
    try {
        let stock = await Model.stock.create(await scrapeWebsite());
        res.status(httpStatus.OK).json({
            message: `Successfully scraped Nasdaq website`,
            stock: {
                index: stock.index,
                value: stock.value,
                isPositive: stock.isPositive,
                changeInNet: stock.changeInNet,
                changeInPercentage: stock.changeInPercentage
            }
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getNasdaq,
    scapeNasdaq
};
