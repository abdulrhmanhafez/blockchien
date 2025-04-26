"use strict";

let crypto = require('crypto');
let keypair = require('keypair');

const SIG_ALG = 'RSA-SHA256';

class CertificateAuthority {
  constructor() {
    this.certs = {};
  }

  // Register certificate for specified ID.
  add(id, pubkey) {
    this.certs[id] = pubkey;
  }

  // Returns certificate for specified ID.
  lookup(id) {
    return this.certs[id];
  }
}

const ca = new CertificateAuthority();

// Sign the "message" field of an object.
// Store the signature in a "sig" field on that object.
function sign(o, privKey) {
  const sign = crypto.createSign(SIG_ALG);
  sign.update(o.message);
  o.sig = sign.sign(privKey, 'hex');
}

// Verify the signature on an object
function verifySignature(o) {
  const pubkey = ca.lookup(o.id);
  if (!pubkey) return false;

  const verify = crypto.createVerify(SIG_ALG);
  verify.update(o.message);
  return verify.verify(pubkey, o.sig, 'hex');
}

// Generate keys
const alice = keypair();
ca.add('alice', alice.public);

// Create and sign object
const o = {
  message: 'hello world!',
  id: 'alice',
};

sign(o, alice.private);
console.log("Signature:", o.sig);

console.log("Does 1st verification pass? " + verifySignature(o));

// Tampering with object
o.message = 'hell0 world!';
console.log("Does 2nd verification pass? " + verifySignature(o));
