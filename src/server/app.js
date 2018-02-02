'use strict';

const path = require('path');
const http = require('http');
const cors = require('cors');
require('dotenv').config({ path: '../.env' });
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const swaggerDoc = require('./config/swagger');

const app = express();

app.set('port', process.env.PORT || 3000);
// Static folder
app.use('/assets', express.static(path.join(__dirname, '../public/assets')));

app.use(cors());
if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Swagger
app.use('/api-docs', express.static(path.join(__dirname, '../public/api-docs')));
app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerDoc);
});

app.use('/nasdaq', require('./routes'));

const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log(`listening on *:${app.get('port')}`);
});

module.exports = server;
