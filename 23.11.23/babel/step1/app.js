// ES6

const test = (msg) => {
  const arr = [1, 2, 3];
  const arr2 = [4, 5, 6];

  const arr3 = [...arr, ...arr2];

  console.log(...arr3, `${msg}`);
};

test("ain't this working?");
