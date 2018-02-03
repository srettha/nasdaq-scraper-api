# Nasdaq scraper api

Assignment from TDA to scrape `http://www.nasdaq.com` for its stock

*** In order to crawl `http://www.nasdaq.com` periodically use `cron`, checkout `Cron guide` ***

## Environment guide
* Navigate to `src` folder
* Copy `.env-sample` to create environment file
```bash
cp .env-sample .env
```

## Migration guide
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
* Cron will run every minute from 21:30 until 04:00 Asia/Bangkok
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