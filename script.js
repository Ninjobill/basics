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