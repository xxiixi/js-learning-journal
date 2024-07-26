// 7.26

let $function = 27; // start with dollor
let PI = 3.1415926 

// 10. let, const and var
// 11. basic operaters
var ageSarah = 17
console.log(2 ** 3); // a**3 means 2 * 2 * 2
const isFullAge = ageSarah >= 18
console.log(isFullAge)

// 15. Operator Precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence


////////////////////////////////////
// 16. Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

const massMark = 78;
const heightMark = 1.95;
const massJohn = 92;
const heightJohn = 1.76;

const BMI_Mark = massMark / heightMark ** 2;
const BMI_John = massJohn / heightJohn ** 2;

console.log(BMI_Mark, BMI_John);



// 17. Strings and Template Literals
const myName = 'xxiixi';
const myString = `I am ${myName}`;
console.log(myString);

console.log(`hi
    second line
    333`);

const age =  12;
const isOldEnough = age >= 18;
if(isOldEnough){
    console.log(`you can dirve 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`no no no ❌ wait another ${yearsLeft} years! `);
}

// 19. Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

const markHigherBMI = BMI_Mark > BMI_John

if(markHigherBMI){
    console.log(`Mark's BMI(${BMI_Mark})  is higher than John's((${BMI_Mark}))!`)
} else{
    console.log(`John's BMI(${BMI_John}) is higher than Mark's!((${BMI_John}))`)
} 

// 20. Type Conversion and Coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear)+99);

// type coercion
console.log('23' -'3'- 10);

// 21. Truthy and Falsy Values
// Falsy value: 0, '', undifined, null, NaN

console.log(Boolean({}));  // True
console.log(Boolean(''));  // False

// 22. Equlity Operators === and ==
// === doesn't has Coercion
console.log('18' == 18); // true
console.log(18 === '18'); // false

// === strict : always use
// == loose : pretent this one doesn't exist
// const favourite = Number(prompt("what's your favourite nnumber?"));
// console.log(favourite);
// console.log(typeof favourite);

// 23. Boolean Logic
// 24. Logical operators
// 25. Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
const average_Dolphins = (96 + 108 + 89 ) /3;
const average_Koalas = (88 + 91 + 110) /3;
console.log(average_Dolphins, average_Koalas);


if(average_Dolphins > average_Koalas && average_Dolphins >= 100){
    console.log(`Dolphins Win the trophy 🏆`);
}else if(average_Koalas > average_Dolphins && average_Dolphins >= 100){
    console.log(`Koalas Win the trophy 🏆`);
}else if(average_Dolphins === average_Koalas && average_Dolphins >= 100 && average_Koalas >= 100){
    console.log(`Both win the thorphy 🏆`)
}else{
    console.log(`no one wins the thorphy 😭`)
}

// 26. Switch statement
const day = 'tuesday';
switch(day){
    case 'tuesday':
        console.log('yes');
        break;
    default:
        console.log('123');
        break;
}
// 27. statements and expressions
// 28. the conditional operator
// const myage = Number(prompt("what's your age?"));
const myage = 18;
myage >= 18 ? console.log('you can drink beer 🍺') : console.log('drink water 💧');
const drink = myage >= 18 ? 'beer 🍺' : 'water 💧';
console.log(`I like to drink ${drink}`);

// 29. Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

const bill = Number(prompt("Enter the bill: "));
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${Number(tip.toFixed(2))}, and the total value ${bill + tip}`);
