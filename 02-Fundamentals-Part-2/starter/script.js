// 7.26

// 32. Activate the strict mode
'use strict'; 
/*
  Strict mode:
  - forbids ue to do certen things
  - create visable errors
*/

// 33. functions
function logger(){
    console.log('Li Lingfeng Sha Bi');
}

logger();
logger();
logger();

function appleJuice(apple, orange) {
    console.log(apple,orange);
    const juice = `Juice with ${apple} apples🍎 and ${orange} oranges🍊.`
    return juice
}

const juice = appleJuice(3,4);
console.log(juice);

// 34. Function Declarations vs. Expressions
// 函数声明（Function Declarations）: can be acceced anywhere
// 函数表达式（Function Expressions）: must define before calling them


// 35. Arrow functions
const calcAge3 = birthYear => 2024 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years. `
}
console.log(yearsUntilRetirement(2000,'xxiixi'));
console.log(yearsUntilRetirement(1974,'宫崎英高'));

// When use arrow functions? 'this' key word

// 36. Functions calling another functions
// fruit pices

// 37. Review functions

// 38. Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

const calcAverage = (num1, num2, num3) => Number(((num1 + num2 + num3)/3).toFixed(2));
// console.log(calcAverage(44,23,2204));

function checkWinner(avgDolhins, avgKoalas) {
    let winner = null;
    if(avgDolhins >= avgKoalas * 2){
        winner = "Dolphins🐬";
    } else if (avgKoalas >= avgDolhins * 2){
        winner = "Koalas🐨";
    } else {
        return console.log(`No team wins! 🌚 (🐬${avgDolhins} vs. 🐨${avgKoalas})`);
    }
    return console.log(`${winner} win! 🏆 (🐬${avgDolhins} vs. 🐨${avgKoalas})`);
}

const avgDolhins1 = calcAverage(44,23,71);
const avgKoalas1 = calcAverage(65,54,49);

const avgDolhins2 = calcAverage(85,54,41);
const avgKoalas2 = calcAverage(23,34,27);

const resout1 = checkWinner(avgDolhins1, avgKoalas1);
const resout2 = checkWinner(avgDolhins2, avgKoalas2);
const resout3 = checkWinner(111,576);

// 39. Arrays
const friends = ['Amy', 'Samira', 'Yani'];
console.log(friends);
console.log(friends.length);
console.log(friends[friends.length-1]); // the last item in arr
friends[2] = 'Jeni'
console.log(friends);

// 40. basic Array methods
// Add Elements
// 1) push
friends.push('Yani');
console.log(friends);
// 2) unshift
friends.unshift('Ive');
console.log(friends);
// Remove Elements
// 1) pop: remove the last one
const poped = friends.pop();
console.log(poped);
console.log(friends);
// 2) shift
const shifted = friends.shift();
console.log(shifted);
console.log(friends);
// indexOf
console.log(friends.indexOf('Samira'));
console.log(friends.indexOf('Yani')); // return -1

// includes (ES6): return true or false (boolean)
console.log(friends.includes('Samira'));
console.log(friends.includes('Yani'));
// strict
friends.push(23);
console.log(friends.includes(23)); // true
console.log(friends.includes('23')); // false

if (friends.includes('Amy')) {
    console.log('you have a friend called Amy!👧🏻');
}

// 41. Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
console.log(bills);

// function calcTip(bill) {
//     if (bill > 50 && bill <300) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.2;
//     }
// }

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = tips[i] + bills[i];
}
console.log(tips);
console.log(totals);

// 42. intro to Objects
// Create a object
const xxiixi = {
firstName: 'Xi',
lastName: 'WANG',
age: 2024 - 2000,
mate: 'Lingfeng LI',
friends:['Amy', 'Samira', 'Yani']
};

// 43. Dot vs. Bracket Notation
console.log(xxiixi);
console.log(xxiixi.lastName);

console.log(xxiixi['lastName']);  
// can put any expression in []
const nameKey = 'Name';
console.log(xxiixi['first' + nameKey]);
console.log(xxiixi['last' + nameKey]);

// const intrestedIn = prompt('What do you want to know about me? Choose between firstName, lastName, age, mate, and froends');

// if(xxiixi[intrestedIn]){
//     console.log(xxiixi[intrestedIn]); // can not use Dot expression
// } else {
//     console.log('Wrong request! 🤯');
// }

xxiixi.location = 'Shenzhen';
xxiixi['google'] = 'scyxw5';
console.log(xxiixi);

console.log(`${xxiixi.firstName} ${xxiixi.lastName} has ${xxiixi.friends.length} friends, and her best friend is called ${xxiixi.friends[1]}.`);

// 44. Object Methods
const xwang3234 = {
    firstName: 'Xi',
    lastName: 'WANG',
    birthYear: 2000,
    mate: 'Lingfeng LI',
    friends:['Amy', 'Samira', 'Yani'],
    hasDriverLicense: true,
    // calcAge: birthYear => 2024 - birthYear
    // calcAge: function(birthYear){
    //     return 2024 - birthYear;
    // }
    // new version
    calcAge: function() {
        console.log(this); // 'this' point to xwang3234
        return 2024 - this.birthYear;
    },
    getSummary: function(){
        return `${this.firstName} is ${this.calcAge()}-year old, her mate is ${this.mate}, and she has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
    }
};

// const calcAge = function(birthYear){
//     return 2024 - birthYear;
// }

// xwang3234 is the one who calling method calcAge()
console.log(xwang3234.calcAge()); 
// console.log(xwang3234['calcAge'](2000));
console.log(xwang3234.getSummary());

// 45. Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const Marks = {
    firstName: 'Mark',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        return this.mass / this.height ** 2;
    } 
}

const John = {
    firstName: 'John',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        return this.mass / this.height ** 2;
    } 
}

console.log(Marks.calcBMI());
const markBMI = Number(Marks.calcBMI().toFixed(2));
const johnBMI = Number(John.calcBMI().toFixed(2));

if (markBMI > johnBMI) {
    console.log(`Mark Miller's BMI (${markBMI}) is higher than John Smith's (${johnBMI})!`);
}else if(markBMI < johnBMI){
    console.log(`John Smith's (${johnBMI}) is higher than Mark Miller's BMI (${markBMI})!`);
}

// 46. iteration the for loop
// 47. looping arrays, breaking and continue

const lingfeng = {
    firstName: 'Lingfeng',
    lastName: 'LI',
    mate: 'xxiixi',
    age: 2024 - 1998,
    friends:['phone', 'pc', 'keyboard']
};

const types = []
let i = 0;
for (let key in lingfeng) {
    console.log(key, lingfeng[key], typeof lingfeng[key]);
    types[i] = typeof lingfeng[key];
    i++;
}
console.log(types);

// 48. looping backwords and loops in loops
for (let exercise = 1; exercise < 4; exercise++){
    console.log(`------ start exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`lifting weight rep ${rep} 🏋️`);
    }   
}


// 49. while
// 50. Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

// const bills = 
// const tips = [];
// const totals = [];
