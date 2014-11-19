#!/bin/sh
#start
echo "start server..."
forever start -l /var/log/nodejs/forever.log -o /var/log/nodejs/out.log -e /var/log/nodejs/err.log -a ~/sgpromo_downloadsite/bin/www
