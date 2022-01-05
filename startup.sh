#!/bin/sh
echo "Last reboot time: $(date). Running node server now." >> /home/ubuntu/FundamentalDevTools/logfile.txt
node /home/ubuntu/FundamentalDevTools/server.js