# Nasdaq scraper api

Assignment from TDA to scrape `http://www.nasdaq.com` for its stock

*** In order to crawl `http://www.nasdaq.com` periodically use `cron`, checkout `Cron guide` ***

## Demo
* http://128.199.251.234:3000/api-docs for swagger

## Environment guide
* Navigate to `src` folder
* Copy `.env-sample` to create environment file
```bash
cp .env-sample .env
```

## Migration guide
* Navigate to `db` folder
```bash
mysql -u your_username -p < init_db.sql
```
* Navigate to `server` folder inside `src`
```javasript
npm run migrate
```

## Installation guide
* Navigate to `server` folder inside `src`
```javasript
npm install
```

## Test guide
* Navigate to `server` folder inside `src`
```javasript
npm test
```

## Cron guide
* Cron will run every minute from 9:30 until 16:00 America/New_York
* This can be reconfigure in `scheduler.sh`
* Make `scheduler` executable
```bash
chmod +x scheduler.sh
```
* Setup `scheduler`
```bash
./scheduler.sh
```

## Production guide
### Run production with pm2
** Install pm2 with npm globally (required) **
```javascript
pm2 start ecosystem.config.js
```
