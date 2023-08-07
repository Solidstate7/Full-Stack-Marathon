// const 아반떼 = () => {
//     console.log("아반떼 go");
//   };
//   const 소나타 = () => {
//     console.log("소나타 go");
//   };
//   const 제네시스 = () => {
//     console.log("제네시스 go");
//   };
  
//   setTimeout(() => {
//     제네시스();
//     setTimeout(() => {
//       소나타();
//       setTimeout(() => {
//         아반떼();
//         console.log("끝");
//       }, 3000);
//     }, 2000);
//   }, 1000);

function inner() {
    console.log(3, this);
    const outer = () => {
      console.log(2, this);
      function hello() {
        console.log(4, this);
      };
      hello();
    };
    outer();
    return () => {
      console.log(1, this);
    };
  }
  const fn = inner.call({ name: "ingoo" });
  fn();