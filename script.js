// variable data Types
// *****************

// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;

// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// // Variable Naming Rules
// *****************

// var _3years = 3;
// var johnMark = 'John and Mark';
// var if = 23;

// Variable mutation and Type Coercion
// *****************

// var firstName = 'John';
// var age = 28;

// console.log(firstName + ' ' + age);

// var job, isMarried;

// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// // Variable mutation
// // *****************

// age = 'twenty eight';
// job = 'driver';

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('what is his last name?');
// console.log(firstName + lastName);

// basic operators
// ********************

// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;
// // math operators
// yearJohn = now - ageJohn;
// yeahMark = now - ageMark;
// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// // logical operators

// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // typeof operator

// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'mark');
// var x;
// console.log(typeof x);

// ********************
// Operator precedence

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// // grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // multiple assignments
// var x, y;

// x = y = ( 3 + 5 ) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // more operators

// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);

// x = x + 1;
// x += 1;
// x++;
// x--;
// console.log(x);

// coding challenge 1
// ********************
// var massMark = 80;
// var heightMark = 2;
// var bmiMark = massMark / (heightMark * heightMark);
// console.log(bmiMark);

// var massJohn = 82;
// var heightJohn = 1.8;
// var bmiJohn = massJohn / (heightJohn * heightJohn);
// console.log(bmiJohn);

// console.log('Is Marks bmi higher than Johns? ' + (bmiMark > bmiJohn))

// if else statements
// ********************

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var massMark = 80;
// var heightMark = 2;
// var bmiMark = massMark / (heightMark * heightMark);
// console.log(bmiMark);

// var massJohn = 82;
// var heightJohn = 1.8;
// var bmiJohn = massJohn / (heightJohn * heightJohn);
// console.log(bmiJohn);

// if(bmiMark > bmiJohn) {
//     console.log('mark\s BMI is higher than John\s');
// } else {
//     console.log('John\s BMI is higher than Mark\s');
// }

// console.log('Is Marks bmi higher than Johns? ' + (bmiMark > bmiJohn))

// *******************
// Boolean logic

// var firstName = 'john';
// var age = 16;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age > 13 && age < 20) { // between 13 and 20
//     console.log(firstName + ' is a teenager.');
// } else { // 20 or older
//     console.log(firstName + ' is a man.');
// }

// *******************
// the Ternary Operator and Switch Statements

var firstName = 'John';
var age = 20;

// age >= 18 ? console.log(firstName + ' drinks beer.') 
// : console.log(firstName + ' drinks juice.')

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// switch statement

// var job = 'instructor';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in lisbon.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
// }

// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//             console.log(firstName + ' is a teenager.');
//             break;
//     default:
//             console.log(firstName + ' is a man.');
// }

// ****************
// truthy and falsy values and equality operators

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

// var height;


// height = 0;
// if (height || height === 0) {
//     console.log('variable is defined');
// } else {
//     console.log('variable has NOT beeen defined');
// }

// var johnTeamScores = 89 + 120 + 127;
// var mikeTeamScores = 116 + 94 + 126;
// var maryTeamScores = 97 + 134 + 105;

// var johnTeamAVG = johnTeamScores / 3;
// console.log(johnTeamAVG);
// var mikeTeamAVG = mikeTeamScores / 3;
// console.log(mikeTeamAVG);
// var maryTeamAVG = maryTeamScores / 3;
// console.log(maryTeamAVG);

// if(johnTeamAVG > mikeTeamAVG && johnTeamAVG > maryTeamAVG) {
//     console.log('John\'s team AVG is better at ' + johnTeamAVG);
// } else if (mikeTeamAVG > johnTeamAVG && mikeTeamAVG > maryTeamAVG) {
//     console.log('Mike\'s team AVG is better at ' + mikeTeamAVG);
// } else if (maryTeamAVG > mikeTeamAVG && maryTeamAVG > johnTeamAVG) {
//     console.log('Mary\'s team AVG is better at ' + maryTeamAVG);
// } else {
//     if(maryTeamAVG === mikeTeamAVG && maryTeamAVG === johnTeamAVG && mikeTeamAVG === johnTeamAVG) {
//         console.log('3 way tie!');
//     } else if(maryTeamAVG === mikeTeamAVG) {
//         console.log('marys and mikes team tied');
//     } else if (maryTeamAVG === johnTeamAVG) {
//         console.log('marys and johns team tied');
//     } else {
//         console.log('johns and mikes team tied');
//     }
// } 

// ********************
// Functions

// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65-age;

//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired');
//     }
// }

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');

// ********************
// Functions Statements and expressions

// function declaration
// function whatDoYouDo(job, firstName) {

// }

// function expression
// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver':
//             return firstName + ' teaches kids how to drive';
//         case 'designer':
//             return firstName + ' teaches kids how to design';
//         default:
//             return firstName + ' does something else';
//     }
// }

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('retired', 'Mark'));
// console.log(whatDoYouDo('designer', 'Jane'));

// **************
// arrays

// initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(years);

// mutate array data
names[1]= 'Ben';
names[names.length] = 'Mary';
console.log(names);

// different data types
var john = ['john', 'smith', 1990, 'designer', false];

john.push('blue');
john.unshift('MR.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);

