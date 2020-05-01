# Deploy via SSH

```sh
$ ssh goerwin@goerwin.co 'rm -rf /var/www/goerwin.co/html/*' && scp -r ./dist/* goerwin@goerwin.co:/var/www/goerwin.co/html
```