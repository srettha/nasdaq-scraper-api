'use strict';

const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const scrapeWebsite = async () => {
    try {
        const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
        const page = await browser.newPage();
        await page.goto('http://www.nasdaq.com', {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });

        const body = await page.content();
        const $ = cheerio.load(body);
        await browser.close();
        let index = $('#indexTableRow0').eq(0).find('td').eq(0).text();
        let value = $('#indexTableRow0').eq(0).find('td').eq(1).text();
        let changes = $('#indexTableRow0').eq(0).find('td').eq(2).text().split(' ');
        let stock = {
            index: index,
            value: parseFloat(value),
            isPositive: changes[1] === '▲' ? Boolean(1) : Boolean(0),
            changeInNet: parseFloat(changes[0]),
            changeInPercentage: parseFloat(changes[2].replace('%', ''))
        };
        return stock;
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = {
    scrapeWebsite
};
