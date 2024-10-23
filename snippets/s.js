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

let otp = Math.floor(Math.random() * 1e7);
console.log("Generated Otp is:", otp);

//callback- passing a function as an argument to another function

function greet(callback) {
  setTimeout(() => {
    let name = "hello kowsik";
    callback(name);
  }, 1000);
}

greet(function (result) {
  console.log(result);
});

//call and apply-  these methods are nothing but when we want to pass properties of one object to another whithout mentioning them in the other object.

let obj1 = {
  name: "kowsik",

  greet: function (age) {
    console.log(`Hey ${name} is turning ${age} in a month`);
  },
};

let obj2 = {
  name: "karthik",
};

obj1.greet.call(obj2, 22);

//clousers;

let cl1 = () => {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
};

let cl2 = cl1();

cl2();
cl2();

let actors = [
  { name: "rajini", movies: 333 },
  { name: "surya", movies: 53 },
  { name: "chiru", movies: 533 },
  { name: "nani", movies: 23 },
  { name: "karthi", movies: 33 },
  { name: "kamal", movies: 334 },
];

// let actor = actors.filter((act) => act.movies <= 100);
// console.log(actor);

// console.log(actors.sort((a, b) => b.movies - a.movies));

console.log(actors.reduce((total, actor) => total + actor.movies, 0));

// methods

let arrs = "wdesed";

let a1 = arrs.includes("e");
console.log(a1.coun);

let twovariables = function () {
  var a = (b = "♦️");
  let c = "📁";
};

twovariables();

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

//reverse

let arrr = ["1", 2, 3, 4, 5];
console.log(arrr.reverse());

//helloworld

let hell = () => {
  return function () {
    return "hello world";
  };
};
let result = hell();
console.log(result());
