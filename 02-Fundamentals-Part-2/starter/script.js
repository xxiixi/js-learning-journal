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

const bills = [125, 555, 44];
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
    }
};

// const calcAge = function(birthYear){
//     return 2024 - birthYear;
// }

// xwang3234 is the one who calling method calcAge()
console.log(xwang3234.calcAge()); 
// console.log(xwang3234['calcAge'](2000));
