'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();

const { scrapeWebsite } = require('../../services');

describe('service: nasdaq', () => {
    describe('scrapeWebsite()', () => {
        it(`should scrape ${process.env.NASDAQ_URL} and return stock model`, (done) => {
            scrapeWebsite().then((stock) => {
                stock.index.should.be.a('string');
                stock.value.should.be.a('number');
                stock.isPositive.should.be.a('boolean');
                stock.changeInNet.should.be.a('number');
                stock.changeInPercentage.should.be.a('number');
                done();
            }).catch((err) => {
                should.not.exist(err);
            });
        });
    });
});
