'use strict';

const express = require('express');
const router = express.Router();
const { getNasdaq, scapeNasdaq } = require('../controllers');

/**
   * @swagger
   * tags:
   *   name: nasdaq
   *   description: Operation related to fetch nasdaq's stock
*/
/**
 * @swagger
 * definitions:
 *   stockResponse:
 *     properties:
 *       index:
 *         type: string
 *       value:
 *         type: number
 *       status:
 *         type: boolean
 *       changeInNet:
 *         type: number
 *       changeInPercentage:
 *         type: number
*/

/**
 * @swagger
 * /nasdaq:
 *   get:
 *     tags:
 *       - nasdaq
 *     summary: Get all nasdaq's stock
 *     produces:
 *       application/json
 *     parameters:
 *       - name: filterFrom
 *         description: filter stock from given day
 *         in: query
 *         type: date
 *       - name: filterTo
 *         description: filter stock to given day
 *         in: query
 *         type: date
 *     responses:
 *       200:
 *         description: Successfully retreived Nasdaq stock's price, return stocks
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/stockResponse'
*/

/**
 * @swagger
 * /nasdaq/scrape:
 *   get:
 *     tags:
 *       - nasdaq
 *     summary: Scrape Nasdaq's stock data from www.nasdaq.com
 *     produces:
 *       application/json
 *     responses:
 *       200:
 *         description: Successfully scraped Nasdaq stock's data from www.nasdaq.com, return stock
 *         schema:
 *           $ref: '#/definitions/stockResponse'
*/

router.route('/')
    .get(getNasdaq);

router.route('/scrape')
    .get(scapeNasdaq);

module.exports = router;
