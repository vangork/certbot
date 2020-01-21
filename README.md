# certbot
Register&amp;Deregister dns record script of multiple domain providers for cetbot to create wildcard certificates

## usage
```
sudo certbot-auto certonly -d *.yourdomain.com -d yourdomain.com --manual --preferred-challenges dns --manual-auth-hook authenticator.sh --manual-cleanup-hook cleanup.sh
```