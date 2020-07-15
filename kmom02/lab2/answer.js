/**
 * @preserve 6a5b1eaa37ebece96c1bf45e3df9ea46
 *
 * 6a5b1eaa37ebece96c1bf45e3df9ea46
 * javascript1
 * lab2
 * v2
 * pamo18
 * 2018-11-12 14:11:21
 * v3.1.3 (2018-09-13)
 *
 * Generated 2018-11-12 15:11:21 by dbwebb lab-utility v3.1.3 (2018-09-13).
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
 * Lab 2 - statements
 *
 * Statements and expressions in JavaScript.
 *
 * Use MDN as your reference and base to solving the exercises.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . If, else if and else
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Create five variables: `card1, card2, card3, card4, card5`.
 *
 * Assign the values `5, 7, 2, 10, 9` to the variables created above.
 *
 * Add them up and put the sum in a variable called `result`.
 *
 * Answer with the variable `result`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var card1 = 5,
    card2 = 7,
    card3 = 2,
    card4 = 10,
    card5 = 9;

var result = card1 + card2 + card3 + card4 + card5;


ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 *
 * Use an `if statement` to see if the five cards (card1-card5) have a
 * combined sum that is higher than 21.
 *
 * Create a variable `status` and give it a different value depending on the
 * following.
 *
 * * If the sum is higher than 21, give your variable the value `"busted"`.
 * * Else give it the value `"safe"`.
 *
 * Answer with your status-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var status = (result > 21) ? "busted" : "safe";


ANSWER = status;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Use `if else statements` to see if the combined value of the first three
 * cards (card1-card3) is lower, higher or exactly 21.
 *
 * Answer with a string corresponding to the result:
 * lower = `"safe"`
 * higher = `"busted"`
 * 21 = `"black jack"`
 *
 * Store the response in your status-variable and answer with it.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var combined = card1 + card2 + card3;

if (combined < 21) {
    result = "safe";
} else if (combined > 21) {
    result = "busted";
} else {
    result = "black jack";
}

ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (2 points)
 *
 * Create three variables: `dealer1, dealer2, dealer3`.
 *
 * Assign the values `7, 7, 1` to the variables.
 *
 * Combine the `if`, `else if`, `else` statements and the operator `AND (&&)`
 * to see what the dealer should do. Combine as you feel needed.
 *
 * If the sum of the dealercards is lower than 17, answer with `"pick"`, if
 * the sum is higher than or equal to 17 and lower than 21 answer with
 * `"stop"`. If the sum is 21 answer with `"black jack"`. If the sum is higher
 * than 21 answer with `"busted"`.
 *
 * Store the response in a variable, and answer with it.
 *
 * PS. You can change the sum to test that your if-statement really works for
 * all values, just to try it out.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var dealer1 = 7,
    dealer2 = 7,
    dealer3 = 1;

var dealercards = dealer1 + dealer2 + dealer3;

if (dealercards < 17) {
    result = "pick";
} else if (dealercards >= 17 && dealercards < 21) {
    result = "stop";
} else if (dealercards == 21) {
    result = "black jack";
} else {
    result = "busted";
}

ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Switch, case
 *
 */



/**
 * Exercise 2.1 (1 points)
 *
 * Use a switch-case statement to create a message with the type of fruit and
 * its color. You have the following type of fruits with a corresponding
 * color:
 *
 * * banana: yellow
 * * apple: green
 * * kiwi: green
 * * plum: purple
 *
 * Create a variable `myFruit` which holds the current type of your fruit. If
 * 'myFruit' is banana, the result should be a variable containing the string
 * value `"The banana is yellow."`
 *
 * Ensure that your switch-case works for all values.
 *
 * Answer with the result where `myFruit = "banana"`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function fruitChecker(fruit) {
    var colour;
    var desc;

    switch (fruit) {
        case "banana":
            colour = "yellow";
            desc = "The " + fruit + " is " + colour + ".";
            break;
        case "apple":
            colour = "green";
            desc = "The " + fruit + " is " + colour + ".";
            break;
        case "kiwi":
            colour = "green";
            desc = "The " + fruit + " is " + colour + ".";
            break;
        case "plum":
            colour = "purple";
            desc = "The " + fruit + " is " + colour + ".";
            break;
        default:
            desc = "That is an unknown fruit.";
    }
    return desc;
}

var myFruit = fruitChecker("banana");

ANSWER = myFruit;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (1 points)
 *
 * Extend your switch-case statement with a `default value`. The result should
 * be:
 *
 * `"That is an unknown fruit."` when the variable 'myFruit' has an unknown
 * value.
 *
 * Answer with the result where 'myFruit = pear'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
myFruit = fruitChecker("pear");

ANSWER = myFruit;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 3 . For loops
 *
 */



/**
 * Exercise 3.1 (1 points)
 *
 * Use a `for-loop` to increment `392` with the value `9`, `19` times.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var num = 392;

for (var i = 0; i < 19; i++) {
    num += 9;
}

ANSWER = num;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, false);

/**
 * Exercise 3.2 (1 points)
 *
 * Use a for-loop to decrement `894` with the value `6`, `13` times.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
 var v = 894;

 for (var j = 0; j < 13; j++) {
     v -= 6;
 }

ANSWER = v;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);

/**
 * Exercise 3.3 (3 points)
 *
 * Use a for-loop to add all the even values in the range `28` to `44` to a
 * string with each number separated by a comma `,`.
 *
 * The result should not end with a comma. You should neither have a space
 * after the comma.
 *
 * Answer with the resulting string.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var even = "";

for (var x = 28; x <= 44; x++) {
    if (x < 44) {
        if (x % 2 == 0) {
            even += x + ",";
        }
    } else {
        if (x % 2 == 0) {
            even += x;
        }
    }
}

ANSWER = even;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.3", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 4 . While loops
 *
 */



/**
 * Exercise 4.1 (1 points)
 *
 * Use a `while-loop` to increment `19` with the value `9` until it has
 * reached or passed `392`.
 *
 * Answer with the amount of steps needed.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var val = 19;

var count = 0;

while (val < 392) {
    val += 9;
    count ++;
}

ANSWER = count;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.1", ANSWER, false);

/**
 * Exercise 4.2 (1 points)
 *
 * Use a while-loop to subtract `6` from `894` until the value has reached or
 * passed `0`.
 *
 * Answer with the amount of steps needed.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
 var value = 894;

 var steps = 0;

 while (value > 0) {
     value -= 6;
     steps ++;
 }

ANSWER = steps;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.2", ANSWER, false);

/**
 * Exercise 4.3 (3 points)
 *
 * Use a while-loop to add all the values, to a comma-separated string, in the
 * range `24` to `68`, where the value is divisable by 5 or 7.
 *
 * Answer with the resulting string.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var str = "";

var testVal = 24;

while (testVal <= 68) {
    if (testVal % 5 == 0 || testVal % 7 == 0) {
        str += testVal + ",";
    }
    testVal ++;
}
str = str.slice(0, -1);
ANSWER = str;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.3", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
