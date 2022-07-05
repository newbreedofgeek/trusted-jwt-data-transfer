/*
the downstream solution receives the my_token in a query string param
and in the server it reads it in.
It uses a public key to validate the JWT Token that came in via my_token
It can verify the JWT and read the data and if it's not expired then it can use the payload
*/

const jwt = require('jsonwebtoken');
const fs = require('fs');

// get this from the query string (e.g. my_token)
const token = 'XXX.YYYYY.ZZZZZZ';

// const passphrase = 'im-a-secret'; // can be used to HMAC SHA256
var publicKey = fs.readFileSync('private.key.pub'); // RSA SHA256 (enter name of your public key file here)

// verify a token symmetric - synchronous
// const decoded = jwt.verify(token, passphrase); // for HMAC SHA256
const decoded = jwt.verify(token, publicKey, { algorithm: 'RS256' });

console.log('decoded **************');
console.log(decoded.data);
console.log('**************');