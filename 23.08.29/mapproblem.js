const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

const map = (callback, iterable) => {
  const result = []
  for (const a of iterable) {
    result.push(callback(a))
  }
  return result
}

const show = products.map(v => v.name)
console.log(show);
