'use strict';

module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [
        // First application
        {
            name: 'nasdaq-api',
            script: 'app.js',
            out_file: '/var/log/nasdaq-api/out.log',
            error_file: '/var/log/nasdaq-api/err.log',
            log_date_format: 'YYYY-MM-DD HH:mm:ss'
        }
    ]
};
