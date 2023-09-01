const testStr = 
`GET /hello HTTP/1.1
Content-type: application/json
Hello world!`

const testArr = testStr.split("\n")

const keyArr2 = ["method", "path", "version"]
const testArr2 = testArr[0].split(" ")
let contArr2 = []
for (let i = 0; i < keyArr2.length; i++)  {
  contArr2.push([keyArr2[i], testArr2[i]])
}

const testArr3 = testArr[1].split(": ")

const testArr4 = ["body", testArr[2]]

const sourceArray = [...contArr2, testArr3, testArr4]

const result = sourceArray.reduce((acc,v) => {
  const [key, value] = v
  acc[key] = value
  return acc
}, {})

console.log(result)


