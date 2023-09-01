const testStr = "name=ingoo&id=web7722&page=10&id=7"

console.log(testStr)

const testArr = testStr.split("&")

console.log(testArr)

const testArr2 = testArr.map(v => v.split("="))

console.log(testArr2)

const testObj = testArr2.reduce((acc, v) => {
  const [key, value] = v
  acc[key] = value
  return acc
},{})

console.log(testObj)