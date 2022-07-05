## trusted-jwt-data-transfer

- This is a test app that shows how a JWT handshake can be done between two parties to pass data around in a trusted way. As an example, a `host webapp` will generate some data and share it with some of it's `'approved' clients`. Only the approved clients will be able to see the data. It uses the open JWT standard (https://jwt.io/introduction)
- JWT Token is a open standard and we use a npm library to work with it (https://github.com/auth0/node-jsonwebtoken#readme) for claims and supports tokens that carry a payload and expire. Its what OAUTH is built on by the way.
- We generate a keypair (private / public) - see below for how to do it
- Host tool (i.e. who needs to send the trusted token and message to verifies downstream systems) uses the logic in the `sign.js` page. It uses the Private key.
- Downstream `approved clients`  use the public key and logic is `validate.js` to validate the token and grab the session data

### How to generate the a key pair
`private key`
ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key

`public key`
openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256.key.pub

The comand will generate a key pair. .key (private key), .key.pub (public key). Put this in your project as you need it for the demo below.

### How to use test this
- tested on node `v12.14.1`
- run `npm install`
- run `node sign` to get a JWT token
- copy that token as seen in the console into `validate.js`'s token variable
- run `node validate` to view token payload. 
- keepining running `node validate`  and eventually it will expire (this is the expiry feature of JWT)

## Disclaimer -
Never use the private / public key here in your apps - it's only given for an example. Generate your own!!