const { SHA256 } = require('crypto-js');
// fast and secure, 256 bits 64 len string
const str = 'hello';

console.log('Hash result: ', SHA256(str).toString());
console.log('Hash result: ', SHA256(str).toString().length);

// merkle root
