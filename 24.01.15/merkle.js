const merkle = require('merkle');
// Block Integrity validation
// A, B, C, D
// A + B, C + D
// AB + CD
// ABCD

const txData = ['A', 'B', 'C', 'D', 'E'];

const merkleTree = merkle('sha256').sync(txData);
const Root = merkleTree.root();
console.log(Root);
