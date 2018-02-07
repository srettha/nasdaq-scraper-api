'use strict';

const moment = require('moment');
const sequelize = require('sequelize');
const httpStatus = require('http-status');
const { Stock } = require('../models');
const { scrapeWebsite } = require('../services');

const getNasdaq = async (req, res, next) => {
    try {
        let filterFrom = req.query.filterFrom || moment().format('YYYY-MM-DD');
        let filterTo = req.query.filterTo || moment(filterFrom).add(1, 'd').format('YYYY-MM-DD');
        let stocks = await Stock.findAll({
            order: [['id', 'DESC']],
            where: {
                $or: [
                    {
                        date: {
                            $eq: sequelize.literal('(SELECT MAX(date) FROM stock)')
                        }
                    },
                    {
                        date: {
                            $between: [filterFrom, filterTo]
                        }
                    }
                ]
            }
        });
        res.status(httpStatus.OK).json({
            message: `Successfully retreived Nasdaq stock's price`,
            stocks: stocks
        });
    } catch (err) {
        next(err);
    }
};

const scapeNasdaq = async (req, res, next) => {
    try {
        let stock = await Stock.create(await scrapeWebsite());
        res.status(httpStatus.OK).json({
            message: `Successfully scraped Nasdaq website`,
            stock: {
                index: stock.index,
                value: stock.value,
                isPositive: stock.isPositive,
                changeInNet: stock.changeInNet,
                changeInPercentage: stock.changeInPercentage,
                date: stock.date
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
