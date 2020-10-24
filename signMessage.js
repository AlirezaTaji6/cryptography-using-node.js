const crypto = require('crypto'),
  hash = crypto.createHash('sha256'),
  fs = require('fs'),
  encrypt = require('./encrypt'),
  path = require('path');


const privateKey = fs.readFileSync(path.join(__dirname, 'private.pem'), 'utf-8');

const data = 'the secret message';
hash.update(data);
const hashed = hash.digest('hex');

const encrypted = encrypt.encryptWithPrivateKey(privateKey, hashed);


exports.packageData = {
  algorithm : 'sha256',
  originalData : data,
  hashedData : encrypted
}