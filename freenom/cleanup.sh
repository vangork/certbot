#!/bin/bash
CREATE_DOMAIN="_acme-challenge.$CERTBOT_DOMAIN"
node ./deactivate.js $CREATE_DOMAIN
