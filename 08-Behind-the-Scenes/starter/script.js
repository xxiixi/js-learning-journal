'use strict';

// 91. Scoping in Practice
// function calcAge(birthYear) {
//   const age = 2024 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1999) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       // Reasssigning outer scope's variable
//       output = 'NEW OUTPUT!';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       // console.log(str);
//       //   console.log(millenial);
//     }
//     console.log(millenial);
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Fengfeng';
// calcAge(1998);

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'fengfeng';
// let job = 'shit';
// const year = 1996;

// Functions

// console.log('1. ', addDecl(1, 3));
// console.log('2. ', addExpr(1, 3));
// console.log('3. ', addArrow(1, 3));

// function addDecl(a, b) {
//   return a + b;
// }
// // ....TDZ....
// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;
// // ....TDZ....

// 97. this Keyword practice
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2024 - birthYear);
//   console.log(this); // undefined
// };

// calcAge(1998);

// // arrow function uses the parents' this keyword
// const calcAgeArrow = birthYear => {
//   console.log(2024 - birthYear);
//   console.log(this); // window....
// };

// calcAgeArrow(1997);

// Example
// const xxiixi = {
//   year: 2000,
//   calcAge: function () {
//     console.log(this);
//     console.log('age:', 2024 - this.year);
//   },
// };

// xxiixi.calcAge();

// const fengfeng = {
//   year: 1998,
// };

// fengfeng.calcAge = xxiixi.calcAge;
// fengfeng.calcAge(); // fengfeng calls the this keywordi

// const f = xxiixi.calcAge;

// 98. regular vs.

// const xxiixi = {
//   firstName: 'xi',
//   year: 2000,
//   calcAge: function () {
//     console.log(this);
//     console.log('age:', 2024 - this.year);
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// xxiixi.greet();

// 99. Primitives vs. Objects
const me = {
  name: 'xxiixi',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('friend:', friend);
console.log('me:', me);

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// 100. practice

// Reference types
const jessica = {
  firstname: 'Jassica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marrage:', jessica);
console.log('After marrage:', marriedJessica); // same output because they point to the same address
console.log('----------------');

// How to copy a object?
// 👇
// Copying types
const jessica2 = {
  firstname: 'Jassica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
// merge 2 and return a new one
// - Object.assign only creats a shallow copy, not a deep clone
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marrage:', jessica2);
console.log('After marrage:', jessicaCopy);
console.log('----------------');

// add more family to married jessica
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marrage:', jessica2);
console.log('After marrage:', jessicaCopy);
console.log('----------------');

// How to Deep clone?
// External library, learn later
