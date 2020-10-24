const fs = require('fs'),
  encrypt = require('./encrypt'),
  decrypt = require('./decrypt'),
  path = require('path');

const publicKey = fs.readFileSync(path.join(__dirname, 'public.pem'), 'utf-8');

const encrypted = encrypt.encryptWithPublicKey(publicKey, 'Super secret message');

console.log(encrypted.toString());

const privateKey = fs.readFileSync(path.join(__dirname, 'private.pem'), 'utf-8');

const decrypted = decrypt.decryptWithPrivateKey(privateKey, encrypted);
console.log(decrypted.toString());