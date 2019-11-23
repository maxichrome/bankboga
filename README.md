# Fake bank for messing with refund scammers.

(Started by @hadenpf)

![alt text](https://raw.githubusercontent.com/CynthiaRutledge/bankboga/master/img.png)

[Here's a demo.](https://fake-bank-for-scambaiting.herokuapp.com/)

Login is `Anything#nnnn` where `nnnn` is a 4 digit number with any password that contains `asdfasdf` and is at least 15 characters long.

You'll want to run this locally, though, and make it look legit from within your VM.

## Running in Docker:

```
docker build -t fake-bank .
docker run -d -p 192.168.181.1:443:8080 fake-bank:latest
```

You'll need to replace `192.168.181.1` with whatever interface your virtual machine guest is running on.

Edit your Windows guest host file so that `njcreditunionmutual.com` resolves to `192.168.181.1` (or whatever).
https://www.groovypost.com/howto/edit-hosts-file-windows-10/

Visit the domain, copy the cert to a file, and trust it in the guest.
http://www.hackaapl.com/how-to-trust-self-signed-certificates-in-windows-7/

Cert was generated with:

```
openssl req -new -x509 -newkey rsa:2048 -sha256 -nodes -keyout server.key -days 3560 -out server.cert -config server.cnf
```
## Chrome

There is a simple Chrome extension to add the result to chrome when searching for the bank as well.
