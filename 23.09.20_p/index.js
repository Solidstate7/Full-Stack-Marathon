const data = []

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 6; i++) data.push(getRandomInt(1, 45))

const result = data.join(" ")

console.log(result);
