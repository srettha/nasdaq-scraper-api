'use strict';

const swaggerJSDoc = require('swagger-jsdoc');
const options = {
    swaggerDefinition: {
        info: {
            title: 'NASDAQ stock API',
            version: '1.0.0',
            description: 'Assignment from TDA to scrape http://www.nasdaq.com for its stock',
            contact: {
                email: 'sretthaterananont@gmail.com'
            }
        },
        schemes: ['http'],
        host: 'localhost:3000',
        basePath: '/'
    },
    apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
