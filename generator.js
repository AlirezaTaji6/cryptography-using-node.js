const crypto = require('crypto'),
  path = require('path'),
  fs = require('fs');

function generate() {
  crypto.generateKeyPair('rsa', {
    modulusLength : 4096,
    publicKeyEncoding : {
      type : 'pkcs1',
      format : 'pem'
    },
    privateKeyEncoding : {
      type : 'pkcs1',
      format : 'pem'
    }
  }, (err, publickKey, privateKey) => {
    if(err) return 'ERROR : ' + err;
    fs.writeFileSync(path.join(__dirname, 'public.pem'), publickKey);
    fs.writeFileSync(path.join(__dirname, 'private.pem'), privateKey);
  })
}

generate();