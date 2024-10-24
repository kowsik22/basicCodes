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

//callback- passing a function as parameter to another function

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
  age: 24,
  greet: function (age) {
    console.log(`Hey ${this.name} is turning ${age} in a month`);
  },
};

let obj2 = {
  name: "karthik",
};

obj1.greet();
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

//try catch

try {
  let result = 10 / 3;
  console.log(res - ult);
} catch (error) {
  console.log("undefined variable is getting accssed", error.message);
}

let users = [
  { id: 1, name: "ram", age: 33 },
  { id: 2, name: "shyam", age: 33 },
  { id: 3, name: "hari", age: 33 },
  { id: 4, name: "sita", age: 33 },
];

for (let { id, name, age } of users) {
  console.log(`name:, ${name}, age:, ${age}`);
}

//oops

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

class boy extends Person {
  constructor(name, age, gender) {
    super(name, age);
    this.gender = gender;
  }

  greet() {
    console.log(
      `My name is ${this.name} and I am ${this.age} and I am a ${this.gender}`
    );
  }
}

let person1 = new Person("John", 33);
person1.greeting();

let boy1 = new boy("karthi", 34, "male");
boy1.greet();
boy1.greeting();

// async and await to run the code line by line

async function data() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();
  return data;
}

async function run() {
  try {
    let matter = await data();
    console.log("processed data:", matter);
    // console.log("processed data:", matte);
  } catch (e) {
    console.log(e.message);
  }
}

run();

//volume

let volumeofsphere = (r) => {
  let volume = (4 / 3) * Math.PI * Math.pow(r, 3);
  console.log(volume);
};

volumeofsphere(2);

//callback

let add = (x, y) => {
  return x + y;
};

let mul = (x, z) => {
  return x * z;
};

let calc = (a, b, operate) => {
  return operate(a, b);
};

console.log("sum of two numbers:", calc(2, 5, add));
console.log("mul of two numbers:", calc(2, 5, mul));

//BMI Task

let bmiramesh = (massramesh, heightramesh) => {
  return massramesh / (heightramesh * heightramesh);
};
let bmisuresh = (masssuresh, heightsuresh) => {
  return masssuresh / (heightsuresh * heightsuresh);
};

let bmiRamesh = bmiramesh(78, 1.69);
let bmiSuresh = bmisuresh(92, 1.95);

let great =
  bmiRamesh > bmiSuresh
    ? console.log(
        `ramesh has a higher BMI of ${bmiRamesh} than suresh ${bmiSuresh} `
      )
    : console.log(
        `suresh has a higher BMI of ${bmiSuresh} than ramesh ${bmiRamesh}`
      );

// console.log(bmiramesh(78, 1.69));
// console.log(bmisuresh(92, 1.95));

//grouping elements in an array using reduce

let humans = [
  { name: "kowsik", gender: "male" },
  { name: "suresh", gender: "male" },
  { name: "ramesh", gender: "male" },
  { name: "priya", gender: "female" },
  { name: "sush", gender: "female" },
  { name: "resh", gender: "female" },
  { name: "priya", gender: "female" },
  { name: "resh", gender: "" },
];
let group = humans.reduce((acc, currentnames) => {
  if (acc[currentnames.gender]) {
    acc[currentnames.gender].push(currentnames.name);
  } else {
    acc[currentnames.gender] = [currentnames.name];
  }
  return acc;
}, {});

console.log(group);

//in js NAN is a number type and if null  convert  to number we get 0

console.log(Number(null));

// when we compare two arrays in js it converts those arrays into strings and compare each position

console.log([44, 33] > [88]);
console.log([3] > [2]);

// finding the names starts with m

let actor = ["mahesh", "manoj", "maheshbabu", "rajini", "kowsik", "ramesh"];

let findingactors = (actors, initial) => {
  return actors.filter((actor) => actor.startsWith(initial));
};

let res = findingactors(actor, "m");
console.log("The names starting with letter m", res);

//includes

for (let i = 0; i < actor.length; i++) {
  // console.log(actor[i]);
  console.log(actor[i].includes("e"));
}

//////////////

let actorss = [
  { name: "kowsik", movies: 100 },
  { name: "wsik", movies: 10 },
  { name: "owsik", movies: 100 },
  { name: "sik", movies: 10 },
];

let find = actorss.filter((act) => {
  act.movies > 10;
});

console.log(find);

//deleting duplicates using filter
/**
 * here actor means each item and index means items index
 * self means total array like act
 */

let act = [
  { name: "kowsik", movies: 100 },
  { name: "kowsik", movies: 100 },
  { name: "owsik", movies: 100 },
  { name: "sik", movies: 10 },
];

let unique = act.filter((actor, index, self) => {
  return (
    index ===
    self.findIndex((a) => {
      return a.name === actor.name && a.movies === actor.movies;
    })
  );
});

console.log(unique);

//spread

let array1 = [
  { name: "kowsik", movies: 100 },
  { name: "kowsik", movies: 100 },
];
let array2 = [
  { name: "owsik", movies: 100 },
  { name: "sik", movies: 10 },
];
let a3 = [...array1, ...array2];
console.log(a3);

//destructuring

let amb = [122, 3, 4, 5, 6];

let [bb, , dd, ee] = amb;

console.log(dd);

let job = {
  name: "kowsik",
  age: 25,
};

let { name, age } = job;
console.log(name);

//even

let number = [1, 2, 3, 4, 5, 6, 7];

let product = number
  .filter((a) => a % 2 == 0)
  .reduce((acc, num) => {
    return acc * num;
  }, 1);

console.log(product);
