'use strict';

const Xray = require('x-ray');
const moment = require('moment');
const phantom = require('x-ray-phantom');
const x = Xray().driver(phantom({ webSecurity: false, weak: false }));

const scrapeWebsite = () => {
    return new Promise((resolve, reject) => {
        x(process.env.NASDAQ_URL, {
            nasdaq: ['table#indexTable tbody tr#indexTableRow0 td'],
            date: 'table#homepageIndexRow tbody tr td#homepageIndexRowTime@content'
        })((err, obj) => {
            if (err) {
                return reject(err);
            }
            let changes = obj.nasdaq[2].split(' ');
            resolve({
                index: obj.nasdaq[0],
                value: parseFloat(obj.nasdaq[1]),
                isPositive: changes[1] === '▲' ? Boolean(1) : Boolean(0),
                changeInNet: parseFloat(changes[0]),
                changeInPercentage: parseFloat(changes[2].replace('%', '')),
                date: moment.tz('America/New_York').format('YYYY-MM-DD HH:mm:ss')
            });
        });
    });
};

module.exports = {
    scrapeWebsite
};
