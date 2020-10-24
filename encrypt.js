const crypto = require("crypto");

function encryptWithPublicKey(publicKey, message) {
  const bufferMessage = Buffer.from(message, 'utf-8');
  
  return crypto.publicEncrypt(publicKey, bufferMessage);
}

function encryptWithPrivateKey(privateKey, message) {
  const bufferMessage = Buffer.from(message, 'utf-8');

  return crypto.privateEncrypt(privateKey, bufferMessage);
}

exports.encryptWithPublicKey = encryptWithPublicKey;
exports.encryptWithPrivateKey = encryptWithPrivateKey;