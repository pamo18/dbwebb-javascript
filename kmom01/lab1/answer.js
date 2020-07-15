/**
 * @preserve 8e7d01fb89e63be1a401b6959fda0152
 *
 * 8e7d01fb89e63be1a401b6959fda0152
 * javascript1
 * lab1
 * v2
 * pamo18
 * 2018-11-06 12:16:11
 * v3.1.3 (2018-09-13)
 *
 * Generated 2018-11-06 13:16:11 by dbwebb lab-utility v3.1.3 (2018-09-13).
 * https://github.com/dbwebb-se/lab
 */

/*jshint maxcomplexity:false */
/* eslint-disable indent */
/* jscs:disable indent */
(function (dbwebb) {
"use strict";

var ANSWER = null;

console.log("Ready to begin.");


/** ======================================================================
 * Lab 1 - variables and builtins
 *
 * The foundation of variables, numbers, strings and basic arithmetic and
 * built in functions.
 *
 * Use MDN as your reference and base to solving the exercises.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Variables, numbers and built-in functions
 *
 * Use variables, numbers and built-in functions.
 *
 * One way to round a float to a certain amount of decimals is:
 *
 * Math.round(val*10000)/10000
 *
 * Where `val` is your float number.
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Create two variables, `floatOne` and `floatTwo`.
 *
 * Give them the values `861.01` and `762.71`.
 *
 * Create a variable called `result` and assign to it the sum of the variables
 * above.
 *
 * Answer with the result, rounded to two decimals.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var floatOne = 861.01;
var floatTwo = 762.71;
var result = floatOne + floatTwo;




ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 *
 * Create a variable `someIntText` and give it a string value of `"322.830
 * mouse"`.
 *
 * Use the function `parseInt()` to find out the integer representation of the
 * text.
 *
 * Assign the value to your `result`-variable.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var someIntText = "322.830 mouse";
var result2 = parseInt(someIntText);




ANSWER = result2;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Use your variable `someIntText`.
 *
 * Use the function `parseFloat()` to find out the float representation of the
 * text.
 *
 * Assign the value to your `result`-variable.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var result3 = parseFloat(someIntText);





ANSWER = result3;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (1 points)
 *
 * Use the method `max()`, in Math, to find out the highest number in the
 * serie:
 *
 * 781,929,742,611
 *
 * Assign the number to your `result`-variable.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var result4 = Math.max(781, 929, 742, 611);




ANSWER = result4;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5 (1 points)
 *
 * Use the Math property `PI` to get the float value of 'Pi'. Round the result
 * to 4 decimals.
 *
 * Assign the number to your `result`-variable.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var result5 = Math.round(Math.PI * 10000)/10000;





ANSWER = result5;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Strings and built-in functions
 *
 * Work with strings and find out about the built-in functions.
 *
 */



/**
 * Exercise 2.1 (1 points)
 *
 * Create a variable called `wordOne` and assign the word "bulldog" to it.
 *
 * Add (concatenate) the number `608` to the word and answer with the
 * resulting variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var wordOne = "bulldog";
var result6 = wordOne + 608;




ANSWER = result6;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (1 points)
 *
 * Use the built-in method `charAt()` on the word "werewolf" to return the
 * character at a given index.
 *
 * Answer with the character at index 2.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var result7 = "werewolf".charAt(2);





ANSWER = result7;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/**
 * Exercise 2.3 (1 points)
 *
 * Use the built-in method `toUpperCase()` to transform the string:
 *
 * `"I do not know, I mostly just hurt people."` to uppercase.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var sent = "I do not know, I mostly just hurt people.";
var result8 = sent.toUpperCase();




ANSWER = result8;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.3", ANSWER, false);

/**
 * Exercise 2.4 (1 points)
 *
 * Use the built-int property `length` to find out the length of the string:
 * `"werewolf"`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var result9 = "werewolf".length;





ANSWER = result9;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.4", ANSWER, false);

/**
 * Exercise 2.5 (1 points)
 *
 * Use the built-int method `substr()` to extract the last three characters of
 * the word: `"werewolf"`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var result10 = "werewolf".substr(5);





ANSWER = result10;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.5", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 3 . Extra assignments
 *
 * Solve these optional questions to earn extra points.
 *
 */



/**
 * Exercise 3.1 (3 points)
 *
 * Create a Date object called `myDate` and initiate it with: `"Aug 16,
 * 2008"`.
 *
 * Use the built-in function `Date.getFullYear()` to get the year from your
 * Date object.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var myDate = new Date("Aug 16, 2008");
var result11 = myDate.getFullYear();




ANSWER = result11;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, false);

/**
 * Exercise 3.2 (3 points)
 *
 * Create a new Date object that is equal to `myDate` plus `21` days.
 *
 * Use `Date.getDate()` and answer with the day of the month.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var newMyDate = new Date(myDate);

newMyDate.setDate(newMyDate.getDate()+21);
var day = newMyDate.getDate();




ANSWER = day;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
