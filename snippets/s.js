let date = new Date();
console.log(date);

let arr = [1, 2, 3, 44, 55, 66, 32, 40, 10];
let greater = arr.filter((a) => a > 10);
console.log(greater.length);

let a = [1, 2, 3, 4];
console.log(Array.isArray(a));

console.log(...a, ...arr);

// to remove duplicates

let duplicates = new Set([1, 2, 2, 2, 3, 3, 4, 4, 5, 5]);
console.log(duplicates);

//asc and desc order

let numbers = [1, 2, 3, 14, 25, 63, 7, 99, 9];
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => b - a));

let reverse = [1, 2, 3, 4, 5, 6];
console.log(reverse.reverse());

// for (let i = 0; i < reverse.length; i++) {
//   console.log(reverse[i]);
// }

let rev = reverse.filter((a) => a <= 7);
console.log(rev);

let str = "222";
let num = parseInt(str);
console.log(typeof num);

let randomNum = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
console.log(randomNum);

let obj = {
  name: "kowsik",
  age: 22,
  sex: "male",
  height: 179,
};

console.log(Object.keys(obj).length);

let array = Object.entries(obj);

console.log(array);

let otp = Math.floor(Math.random() * 1e4);
console.log("Generated Otp is:", otp);
