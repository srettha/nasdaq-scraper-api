'use strict';

const Xray = require('x-ray');
const phantom = require('x-ray-phantom');
const x = Xray().driver(phantom({ webSecurity: false }));

const scrapeWebsite = () => {
    return new Promise((resolve, reject) => {
        x('http://www.nasdaq.com/', ['table#indexTable tbody tr#indexTableRow0 td'])((err, obj) => {
            if (err) {
                return reject(err);
            }
            let changes = obj[2].split(' ');
            resolve({
                index: obj[0],
                value: parseFloat(obj[1]),
                isPositive: changes[1] === '▲' ? Boolean(1) : Boolean(0),
                changeInNet: parseFloat(changes[0]),
                changeInPercentage: parseFloat(changes[2].replace('%', ''))
            });
        });
    });
};

module.exports = {
    scrapeWebsite
};
