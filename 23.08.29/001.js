const buffer = Buffer.from("자자자")
console.log(buffer);
console.log(buffer.length)
console.log(buffer.toString());

const arr = [Buffer.from("Hello"), Buffer.from("world")]
console.log(arr);

const concat = Buffer.concat(arr)
console.log(concat);
console.log(concat.toString());

const alloc = Buffer.alloc(5)
console.log(alloc);