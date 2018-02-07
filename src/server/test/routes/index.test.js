'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const moment = require('moment');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../app');

describe('route: nasdaq', () => {
    describe('GET /nasdaq/scrape', () => {
        it(`should response with nasdaq's stock model`, (done) => {
            chai.request(server).get('/nasdaq/scrape').end((err, res) => {
                // error should not exist
                should.not.exist(err);
                // res with 200 status
                res.status.should.equal(200);
                // res should be json
                res.type.should.equal('application/json');
                // res message should be
                res.body.message.should.equal(`Successfully scraped Nasdaq website`);
                // res body should contain categories information
                res.body.stock.index.should.be.a('string');
                res.body.stock.value.should.be.a('number');
                res.body.stock.isPositive.should.be.a('boolean');
                res.body.stock.changeInNet.should.be.a('number');
                res.body.stock.changeInPercentage.should.be.a('number');
                res.body.stock.date.should.be.a('string');
                done();
            });
        });
    });

    describe('GET /nasdaq', () => {
        it(`should response with nasdaq's stock model (no-query)`, (done) => {
            chai.request(server).get('/nasdaq').end((err, res) => {
                // error should not exist
                should.not.exist(err);
                // res with 200 status
                res.status.should.equal(200);
                // res should be json
                res.type.should.equal('application/json');
                // res message should be
                res.body.message.should.equal(`Successfully retreived Nasdaq stock's price from ${moment().format('YYYY-MM-DD')} to ${moment().add(1, 'd').format('YYYY-MM-DD')}`);
                // res body should contain categories information
                res.body.stocks.should.be.an('array');
                done();
            });
        });
        it(`should response with nasdaq's stock model (filterFrom query)`, (done) => {
            chai.request(server).get('/nasdaq').query({
                fiterFrom: moment().format('YYYY-MM-DD')
            }).end((err, res) => {
                // error should not exist
                should.not.exist(err);
                // res with 200 status
                res.status.should.equal(200);
                // res should be json
                res.type.should.equal('application/json');
                // res message should be
                res.body.message.should.equal(`Successfully retreived Nasdaq stock's price from ${moment().format('YYYY-MM-DD')} to ${moment().add(1, 'd').format('YYYY-MM-DD')}`);
                // res body should contain categories information
                res.body.stocks.should.be.an('array');
                done();
            });
        });
        it(`should response with nasdaq's stock model (filterFrom and filterTo query)`, (done) => {
            chai.request(server).get('/nasdaq').query({
                fiterFrom: moment().format('YYYY-MM-DD'),
                filterTo: moment().add(1, 'd').format('YYYY-MM-DD')
            }).end((err, res) => {
                // error should not exist
                should.not.exist(err);
                // res with 200 status
                res.status.should.equal(200);
                // res should be json
                res.type.should.equal('application/json');
                // res message should be
                res.body.message.should.equal(`Successfully retreived Nasdaq stock's price from ${moment().format('YYYY-MM-DD')} to ${moment().add(2, 'd').format('YYYY-MM-DD')}`);
                // res body should contain categories information
                res.body.stocks.should.be.an('array');
                done();
            });
        });
    });
});
