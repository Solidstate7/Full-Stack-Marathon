// const str = "hello world";
// counter = 0;
// for (let i of str) {
//   if (str[i] === "l") {
//     console.log(str[i]);
//     counter++;
//   }
// }

// console.log(counter);

const reg1 = /regular expression/;
const reg2 = new RegExp("정규 표현식");
console.log("저는 정규 표현식을 사용하고 있습니다.".match(reg2));
console.log("저는 정규 표현식을 사용하고 있습니다.".replace(reg2));
const three = /[3, 6, 9]/g;
console.log("16723813278658236598123213".match(three));
const korean = /[가-힣]/;
console.log(korean.exec("힣"));

const infoRegex = /^info/i;
console.log(infoRegex.test("info is available"));

const plusReg = /a+/gi;
console.log("abcdabcdabcdaaaa".match(plusReg));

const questionReg = /a?/g;
console.log("abcdabcdabcdaaaa".match(questionReg));

const starReg = /a*/g;
console.log("abcdabcdabcdaaaa".match(starReg));

const endReg = new RegExp("A$");
console.log("abcdabcdabcdaaaa".match(endReg));

const countReg = /[a-z]{5,10}/;
console.log("asdfdfasdffdds".match(countReg));

const numberReg = /\d+[0-9]/;
console.log("a;slkdfja;slkdfjkl;s2394875632978".match(numberReg));

const numberReg2 = /\D+[0-9]/;
console.log("a;slkdfja;slkdfjkl;s2394875632978".match(numberReg2));

const strReg = /\w+/;
console.log("a;slkdfja;slkdfjkl;s2394875632978".match(strReg));

const spaceReg = /\s+/g;
console.log(`"a;sl\nkd fja;sl kdfj kl;s239 4875632978"`.match(spaceReg));

const spaceReg2 = /\S+/g;
console.log(`"a;sl\nkd fja;sl kdfj kl;s239 4875632978"`.match(spaceReg2));

const specialReg = /[!@#$%^&*()[]_+\-=\[\]{};':"]/g;
console.log(`"a;sl\nkd fja;sl kdfj kl;s239 4875632978"`.match(specialReg));

let emailReg =
  /^[0-9a-zA-z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
let email1 = "ychag@example.com";
console.log(emailReg.test(email1));

let phonenum1 = "010-1234-5678";
let phonenum2 = "016-234-5678";
let phonenum3 = "018-234-5678";
let phonenum4 = "019-234-5678";
let phonenum5 = "011-234-5678";
let phonenum6 = "02-234-5678";

const phonenumReg = /^01[0,1,6,8,9]\-([0-9]{3,4})\-[0-9]{4}$/i;

const phoneArray = [
  phonenum1,
  phonenum2,
  phonenum3,
  phonenum4,
  phonenum5,
  phonenum6,
];

for (let i of phoneArray) {
  console.log(phonenumReg.test(i));
}
