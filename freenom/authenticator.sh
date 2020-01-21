#!/bin/bash
CREATE_DOMAIN="_acme-challenge.$CERTBOT_DOMAIN"
node ./activate.js $CREATE_DOMAIN $CERTBOT_VALIDATION
sleep 60