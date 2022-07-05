/*
We use a private key and RSA for generating the JWT.
The jwt token looks like this
XXX.YYYYY.ZZZZZZ
and can be send to downstream applications via a query string param '?my_token=XXX...'
*/

const jwt = require('jsonwebtoken');
const fs = require('fs');

const payload  = {
  myData: "here",
  foo: "bar"
};
// const passphrase = 'im-a-secret'; // can be used to HMAC SHA256
var privateKey = fs.readFileSync('private.key'); // RSA SHA256 (enter name of your private key file here)

// Signing a token with 60 seconds of expiry:
const token = jwt.sign({
  data: JSON.stringify(payload)
}, privateKey, { algorithm: 'RS256', expiresIn: 60 });

console.log('token **************');
console.log(token);
console.log('**************');
