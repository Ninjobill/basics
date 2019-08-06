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

// var firstName = 'John';
// var age = 20;

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
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[0]);
// console.log(years);

// // mutate array data
// names[1]= 'Ben';
// names[names.length] = 'Mary';
// console.log(names);

// // different data types
// var john = ['john', 'smith', 1990, 'designer', false];

// john.push('blue');
// john.unshift('MR.');
// console.log(john);

// john.pop();
// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf(1990));

// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
// console.log(isDesigner);

// var bill1 = 124;
// var bill2 = 48;
// var bill3 = 268;
// var tips = [];
// var billTotals = [];

// function tipCalculator(bill) {
//     switch(bill) {
//         case (bill < 50):
//             var tip = bill * .2;
//             tips.push(tip);
//             var total = tip + bill;
//             billTotals.push(total);
//         case (bill > 50 && bill < 200):
//             var tip = bill * .15;
//             tips.push(tip);
//             var total = tip + bill;
//             billTotals.push(total);
//         default:
//             var tip = bill * .1;
//             tips.push(tip);
//             var total = tip + bill;
//             billTotals.push(total);
//     }
// }

// tipCalculator(bill1);
// tipCalculator(bill2);
// tipCalculator(bill3);

// console.log(tips);
// console.log(billTotals)

// function tipCalculator(bill) {
//     var percentage;
//     if (bill < 50) {
//         percentage = .2;
//     } else if (bill >= 50 && bill < 200) {
//         percentage = .15;
//     } else {
//         percentage = .1;
//     }
//     return percentage * bill;
// }

// var bills = [ 124, 48, 268];
// var tips = [tipCalculator(bills[0]),
//             tipCalculator(bills[1]),
//             tipCalculator(bills[2])];

// var finalValues = [bills[0] + tips[0],
//                     bills[1] + tips[1],
//                     bills[2] + tips[2]]

// console.log(tips, finalValues);

// ***************
// Objects and Properties

// array order matters objects do not

// Object literal
// var john = {
//     firstName: 'john',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['jane', 'mark', 'bob', 'emily'],
//     job: 'teacher',
//     isMarried: false
// };

// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';

// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// // new Object syntax
// var jane = new Object();
// jane.firstName = 'jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);

// var myCar = new Object();
// myCar.make = 'ford';
// myCar.model = 'mustang';

// console.log(myCar);

// **************************
// Objects and methods


// var john = {
//     firstName: 'john',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['jane', 'mark', 'bob', 'emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function(birthYear) {
//         this.age = 2018 - this.birthYear;
//     }
// };

// john.calcAge();

// console.log(john);

// var john = {
//     fullName: 'John Smith',
//     mass: 80,
//     height: 2,
//     findBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };
// var mark = {
//     fullName: 'Mark Mark',
//     mass: 60,
//     height: 1.68,
//     findBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// john.findBMI();
// mark.findBMI();

// console.log(john);
// console.log(mark);

// if(john.bmi > mark.bmi) {
//     console.log(john.fullName + ' has a higher BMI with ' + john.bmi);
// } else if (john.bmi < mark.bmi) {
//     console.log(mark.fullName + ' has a higher BMI with ' + mark.bmi);
// } else {
//     console.log('They have the same BMI!');
// }


// ****************
// loops and iteration

// for loop
// for(var i = 1; i <= 20; i+=2) {
//     console.log(i);
// }

// var john = ['john', 'smith', 1990, 'designer', false, 'blue'];
// // for loop
// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }

// // While loops
// var i = 0;
// while(i < john.length) {
//     console.log(john[i]);
//     i++;
// }


// continue and break statements
// var john = ['john', 'smith', 1990, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }

// // looping backwards
// for (var i = john.length -1; i >= 0; i--) {
//     console.log(john[i]);
// }

// **************
// Coding Challenge 5


// var john = {
//     name: 'john',
//     bills: [124, 48, 268, 180, 42],
//     tips: [],
//     totals: [],
//     tipCalculator: function(bills) {
//         for(var i = 0; i < bills.length; i++) {
//             var percentage;
//             if (bills[i] < 50) {
//                 percentage = .2;
//             } else if (bills[i] >= 50 && bills[i] < 200) {
//                 percentage = .15;
//             } else {
//                 percentage = .1;
//             }
//             var tip = percentage * bills[i];
//             this.tips.push(tip);
//             this.totals.push(tip + bills[i]);
//         }
//     }
// }

// var mark = {
//     name: 'mark',
//     bills: [77, 375, 110, 45],
//     tips: [],
//     totals: [],
//     tipCalculator: function(bills) {
//         for(var i = 0; i < bills.length; i++) {
//             var percentage;
//             if (bills[i] < 100) {
//                 percentage = .2;
//             } else if (bills[i] > 100 && bills[i] < 300) {
//                 percentage = .1;
//             } else {
//                 percentage = .25;
//             }
//             var tip = percentage * bills[i];
//             this.tips.push(tip);
//             this.totals.push(tip + bills[i]);
//         }
//     }
// }

// john.tipCalculator(john.bills);
// mark.tipCalculator(mark.bills);

// function tipAvg(tip) {
//     tipTotal = 0;
//     for(var i = 0; i < tip.length; i++) {
//         tipTotal += tip[i];
//     }
//     var average = tipTotal / tip.length;
//     return average;
// }

// console.log(tipAvg(john.tips));
// console.log(tipAvg(mark.tips));

// if(tipAvg(john.tips) > tipAvg(mark.tips)) {
//     console.log('Johns family has the highest tips at an average of $' + Math.floor(tipAvg(john.tips)));
// } else if (tipAvg(john.tips) < tipAvg(mark.tips)) {
//     console.log('Marks family has the highest tips at an average of $' + Math.floor(tipAvg(mark.tips)));
// } else {
//     console.log('They both tip the same!');
// }