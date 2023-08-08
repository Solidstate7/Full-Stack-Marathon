// function inner() {
//     console.log(3, this);
//     const outer = () => {
//       console.log(2, this);
//       function hello()
      
//        {
//         console.log(4, this);
//       };
//       hello();
//     };
//     outer();
//     return () => {
//       console.log(1, this);
//     };
//   }
//   const fn = inner.call({ name: "ingoo" });
//   fn();

// const 아반떼 = () => {
//     setTimeout(() => {
//       console.log("아반떼 go")  
//     }, 3000);
//   };
//   const 소나타 = () => {
//     setTimeout(() => {
//       console.log("소나타 go")  
//     }, 2000);
//   };
//   const 제네시스 = () => {
//     setTimeout(() => {
//       console.log("제네시스 go")  
//     }, 1000);
//   };
  
// 아반떼();
// 소나타();
// 제네시스();


/*{
  state: pending | fulfilled | rejected
  result: undefined | "resolve str" | "reject str"
}*/

// const pr = new Promise((resolve, reject) => {
//   resolve("your life is fulfilled");
//   reject("your life is rejected");
// });

// console.log(pr);
// pr.then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });

// console.dir(pr);

// const 아반떼 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("아반떼 go");
//   }, 3000);
// });

// 아반떼.then((result) => {
//   console.log(result);
// });

// const 아반떼 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("아반떼 go");
//     }, 3000);
//   });

// const 소나타 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("소나타 go");
//     }, 2000);
//   });
// const 제네시스 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("제네시스 go");
//     }, 1000);
//   });

// 아반떼()
//   .then((result) => {
//     console.log(result);
//     return 소나타();
//   })
//   .then((result) => {
//     console.log(result);
//     return 제네시스();
//   })
//   .then((result) => {
//     console.log(result);
//     console.log("끝");
//   });

const 아반떼 = (callback) => {
  console.log("아반떼 시작")
  setTimeout(() => {
    console.log("아반떼 도착");
    callback();
  }, 3000);
};
const 소나타 = (callback) => {
  console.log("소나타 시작")
  setTimeout(() => {
    console.log("소나타 도착");
    // 아반떼();
    callback();
  }, 2000);
};
const 제네시스 = (callback) => {
  console.log("제네시스 시작")
  setTimeout(() => {
    console.log("제네시스 도착");
    callback();
  }, 1000);
};

아반떼(() => {
  소나타(() => {
    제네시스(() => {
      console.log("끝");
    });
  });
});