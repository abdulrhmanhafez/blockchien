"use strict";

let blindSignatures = require('blind-signatures');
let SpyAgency = require('./spyAgency.js').SpyAgency;

function makeDocument(coverName) {
  return 🔹 The bearer of this signed document, ${coverName}, has full diplomatic immunity.;
}

// 🔹 استبدال جميع الأسماء القديمة بأسماء جديدة  
let coverNames = [
  "Nathan Reynolds",
  "Olivia Carter",
  "Benjamin Hayes",
  "Charlotte Brooks",
  "Lucas Bennett",
  "Amelia Thompson",
  "Henry Sullivan",
  "Isabella Foster",
  "William Parker",
  "Emily Collins"
];

let documents = coverNames.map(makeDocument);

let blindDocs = [];
let blindingFactors = [];

let agency = new SpyAgency();

// 🔹 تجهيز المستندات للتوقيع الأعمى
documents.forEach((doc) => {
  let { blinded, r } = blindSignatures.blind({
    message: doc,
    N: agency.n,
    E: agency.e,
  });
  blindDocs.push(blinded);
  blindingFactors.push(r);
});

console.log("=======================================");
console.log("🚀 Spy Agency - Blind Signature Process");
console.log("=======================================\n");

agency.signDocument(blindDocs, (selected, verifyAndSign) => {
  let signedBlinds = verifyAndSign(
    blindingFactors.map((r, i) => (i === selected ? undefined : r)),
    documents.map((doc, i) => (i === selected ? undefined : doc))
  );

  let unblindedSig = blindSignatures.unblind({
    signed: signedBlinds,
    N: agency.n,
    r: blindingFactors[selected],
  });

  let isValid = blindSignatures.verify({
    unblinded: unblindedSig,
    N: agency.n,
    E: agency.e,
    message: documents[selected],
  });

  console.log(🔎 **Agency selected document #${selected}**);
  console.log(📜 **Selected Cover Identity:** "${coverNames[selected]}");
  console.log(✍ **Signed Document:**);
  console.log(`   "${documents[selected]}"\n`);

  if (isValid) {
    console.log("✅ \x1b[32mSignature verification successful!\x1b[0m");
  } else {
    console.log("❌ \x1b[31mSignature verification failed!\x1b[0m");
  }

  console.log("\n=======================================");
  console.log("🔒 Secure Digital Signing Completed!");
  console.log("=======================================");
});