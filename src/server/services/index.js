'use strict';

const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const scapeWebsite = async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://www.nasdaq.com');

        const body = await page.content();
        const $ = cheerio.load(body);
        let index = $('#indexTableRow0').eq(0).find('td').eq(0).text();
        let value = $('#indexTableRow0').eq(0).find('td').eq(1).text();
        let changes = $('#indexTableRow0').eq(0).find('td').eq(2).text().split(' ');
        await browser.close();
        return {
            index: index,
            value: value,
            status: changes[1] === '▲' ? 'positive' : 'negative',
            changeInNet: parseFloat(changes[0]),
            changeInPercentage: parseFloat(changes[2].replace('%', ''))
        };
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = {
    scapeWebsite
};
