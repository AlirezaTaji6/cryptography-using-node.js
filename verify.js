const decrypt = require('./decrypt'),
  fs = require('fs'),
  crypto = require('crypto'),
  path = require('path'),
  { packageData } = require('./signMessage');

const publicKey = fs.readFileSync(path.join(__dirname, 'public.pem'), 'utf-8');

const decryptedHash = decrypt.decryptWithPublicKey(publicKey, packageData.hashedData).toString();

const hash = crypto.createHash('sha256');

hash.update(packageData.originalData);

const originalHashed = hash.digest('hex');


if(decryptedHash === originalHashed) {
  console.log('Data matched successfully');
}else {
  console.log('Data is not match');
}