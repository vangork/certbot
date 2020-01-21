#!/bin/bash
RR="_acme-challenge"
node ./activate.js $CERTBOT_DOMAIN $RR $CERTBOT_VALIDATION
sleep 25
