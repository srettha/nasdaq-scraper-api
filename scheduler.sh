# Change timezone to America/New_York first
ln -sf /usr/share/zoneinfo/America/New_York /etc/localtime
# Write out current crontab
crontab -l > scheduler
# Echo new cron into cron file 
echo "30-59 9 * * 1-5 curl http://localhost:3000/nasdaq/scrape" >> scheduler
echo "* 10-15 * * 1-5 curl http://localhost:3000/nasdaq/scrape" >> scheduler
# Install new cron file
crontab scheduler
rm scheduler