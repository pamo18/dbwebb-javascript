/**
 * @preserve b1b8ea9d6d70019296d2c3b28496e710
 *
 * b1b8ea9d6d70019296d2c3b28496e710
 * javascript1
 * lab3
 * v2
 * pamo18
 * 2018-11-19 17:36:23
 * v3.1.3 (2018-09-13)
 *
 * Generated 2018-11-19 18:36:23 by dbwebb lab-utility v3.1.3 (2018-09-13).
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
 * Lab 3 - functions
 *
 * Practice to write functions.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Basic functions
 *
 * Practice on basic functions.
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Create a function `sumRangeNumbers()` that returns the sum of all numbers
 * between two chosen numbers. The function should take two arguments, one
 * representing the lowest boundary and one that represents the highest
 * boundary. For example, the arguments 10 and 20 should return the sum of
 * 10+11+12+13...+20.
 *
 * Test it using the values `45 and 72`, answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function sumRangeNumbers(start, end) {
    var i;
    var sum = 0;

    for (i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

var result1 = sumRangeNumbers(45, 72);

ANSWER = result1;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 *
 * Create a function called `fruitColor()` that takes one argument called
 * `fruit` and returns the color of the fruit.
 *
 * The function should be aware of the following fruits (`banana, apple, kiwi,
 * plum`) with respective color (`yellow, green, green, red`).
 *
 * Try it out using the fruit `banana` and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function fruitColor(fruit) {
    var color;

    switch (fruit) {
        case "banana":
            color = "yellow";
            break;
        case "apple":
            color = "green";
            break;
        case "kiwi":
            color = "green";
            break;
        case "plum":
            color = "red";
            break;
    }
    return color;
}

var result2 = fruitColor("banana");

ANSWER = result2;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Create a function `printRange()` that takes two arguments `rangeStart` and
 * `rangeStop` and returns a string with all numbers comma-separated in the
 * range.
 *
 * Try it using the arguments `23 and 49`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function printRange(rangeStart, rangeStop) {
    var str = "";
    var i;

    for (i = rangeStart; i <= rangeStop; i++) {
        str += i.toString() + ",";
    }
    return str.slice(0, -1);
}

var result3 = printRange(23, 49);

ANSWER = result3;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (1 points)
 *
 * Create a function `printRangeReversed()` that takes two arguments
 * `rangeStart` and `rangeStop` and returns a string with all numbers
 * comma-separated in the range.
 *
 * Try it using the arguments `49 and 23`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
 function printRangeReversed(rangeStart, rangeStop) {
     var str = "";
     var i;

     for (i = rangeStart; i >= rangeStop; i--) {
         str += i.toString() + ",";
     }
     return str.slice(0, -1);
 }

 var result4 = printRangeReversed(49, 23);

ANSWER = result4;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5 (1 points)
 *
 * Create a function `printAnyRange()` that takes two arguments `rangeStart`
 * and `rangeStop` and returns a string with all numbers comma-separated in
 * the range.
 *
 * If `rangeStart` is smaller than `rangeStop` then call the function
 * `printRange()`.
 *
 * If `rangeStart` is greater than `rangeStop` the call the function
 * `printRangeReversed()`.
 *
 * Try it using the arguments `23 and 49` (both ways).
 *
 * Answer with the result using arguments 23 and 49.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
 function printAnyRange(rangeStart, rangeStop) {
     var str = "";

     if (rangeStart < rangeStop) {
         str = printRange(rangeStart, rangeStop);
     } else if (rangeStart > rangeStop) {
         str = printRangeReversed(rangeStart, rangeStop);
     }
     return str;
 }

 var result5 = printAnyRange(23, 49);

ANSWER = result5;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/**
 * Exercise 1.6 (1 points)
 *
 * Create a function called `stringRepeat()` that returns a string a specific
 * number of times. The function should take two arguments, one string and one
 * number: `white` and `14`. The number represents the number of times the
 * string should be added to a string.
 *
 * Test the function and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function stringRepeat(str, num) {
    var strRpt = str.repeat(num);

    return strRpt;
}

var result6 = stringRepeat("white", 14);

ANSWER = result6;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.6", ANSWER, false);

/**
 * Exercise 1.7 (1 points)
 *
 * Create a function `inRange()` that takes three arguments, `rangeStart`,
 * `rangeStop` and `value`.
 *
 * The function should return boolean `true` if value is greater than
 * rangeStart and less than rangeStop. Otherwise it should return boolean
 * `false`.
 *
 * Try it out using the range `168 - 598` and the value `295`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function inRange(rangeStart, rangeStop, value) {
    var isInRange;

    if (value > rangeStart && value < rangeStop) {
        isInRange = true;
    } else {
        isInRange = false;
    }
    return isInRange;
}

var result7 = inRange(168, 598, 295);

ANSWER = result7;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.7", ANSWER, false);

/**
 * Exercise 1.8 (1 points)
 *
 * Try out the function `inRange()` using the range `168 - 598` and the value
 * `678`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var result8 = inRange(168, 598, 678);

ANSWER = result8;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.8", ANSWER, false);

/**
 * Exercise 1.9 (1 points)
 *
 * Create a function called `degreesToRadians()` that should take one
 * argument, a degree value. The function should convert the value to radians
 * and return the result with max 4 decimals.
 *
 * Test your function with the value `148` and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function degreesToRadians(degree) {
    var radians = degree * (Math.PI / 180);

    return parseFloat(radians.toFixed(4));
}

var result9 = degreesToRadians(148);

ANSWER = result9;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.9", ANSWER, false);

/**
 * Exercise 1.10 (1 points)
 *
 * Create a function called `fizzBuzz()` that takes two arguments `start` and
 * `stop` and returns a comma-separated string.
 *
 * The arguments represents the starting point and stop point of the game
 * `Fizz Buzz` (http://en.wikipedia.org/wiki/Fizz_buzz). The function should
 * run from start to stop and add `Fizz`, `Buzz` or both to your
 * result-variable at appropriate numbers.
 *
 * Each entry to your result should be comma-separated. If `stop` is equal or
 * lower than `start`, the function should return an appropriate error
 * message.
 *
 * Test the function using `start=2 and stop=25`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function fizzBuzz(start, stop) {
    if (stop <= start) {
        throw "Error, stop must be higher than start";
    }
    var str = "";
    var i;

    for (i = start; i <= stop; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            str += "Fizz Buzz" + ",";
        } else if (i % 3 === 0) {
            str += "Fizz" + ",";
        } else if (i % 5 === 0) {
            str += "Buzz" + ",";
        } else {
            str += i + ",";
        }
    }
    return str.slice(0, -1);
}

var result10;

try {
    result10 = fizzBuzz(2, 25);
} catch (e) {
    result10 = e;
}

ANSWER = result10;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.10", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Extra assignments
 *
 * These questions are worth 3 points each. Solve them for extra points. In
 * this section, you could re-use your code from lab 1 in exercise 2.1 and
 * 2.2.
 *
 */



/**
 * Exercise 2.1 (3 points)
 *
 * Create a function called `printSum()` that should take two variables, the
 * sum of the players hand and the sum of the dealers hand.
 *
 * Your hand should be three cards with the values: `2, 5 and 8`.
 * The dealers hand should be three card with the values: `5, 7, 7`.
 * The function should return the sum and the player: `Player: 15, Dealer:
 * 19`.
 *
 * Test your function with the given values and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var pCard1 = 2,
    pCard2 = 5,
    pCard3 = 8;

var dCard1 = 5,
    dCard2 = 7,
    dCard3 = 7;

var player = pCard1 + pCard2 + pCard3;

var dealer = dCard1 + dCard2 + dCard3;

function printSum(p, d) {
    return "Player: " + p + ", Dealer: " + d;
}

var result21 = printSum(player, dealer);

ANSWER = result21;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (3 points)
 *
 * Create a function called `printResult()` that should take two variables,
 * the sum of the players hand and the sum of the dealers hand.
 *
 * Players hand should be three cards with the values: `2, 5 and 8`. The
 * dealers hand should be three card with the values: `5, 7, 7`.
 *
 * This time you should include the check from lab 2 where you find out the
 * boundaries of the player and the dealer.
 * Player hand = 21 (black jack).
 * Player hand less than 21 (safe).
 * Player hand larger than 21 (busted).
 * Dealer hand less than 17 (safe).
 * Dealer hand larger or equal to 17 and less than 21 (stop).
 * Dealer hand = 21 (black jack).
 * Delaer hand larger than 21 (busted).
 *
 * Return a string in the format: `Player: safe, Dealer: busted`.
 *
 * Test your function with the given values and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
 function printResult(p, d) {
    var playerResult;

    if (p < 21) {
        playerResult = "safe";
    } else if (p > 21) {
        playerResult = "busted";
    } else {
        playerResult = "black jack";
    }
    var dealerResult;

    if (d < 17) {
        dealerResult = "safe";
    } else if (d >= 17 && d < 21) {
        dealerResult = "stop";
    } else if (d === 21) {
        dealerResult = "black jack";
    } else {
        dealerResult = "busted";
    }
    return "Player: " + playerResult + ", Dealer: " + dealerResult;
 }

var result22 = printResult(player, dealer);

ANSWER = result22;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/**
 * Exercise 2.3 (3 points)
 *
 * Create a function called `calculateInterest()` that returns the money you
 * have after x years of interest, given three arguments: `595, 50 and 1`.
 * First argument represents the start money, the second argument represents
 * the number of years your money produces interest. The third argument is the
 * interest rate in percent (%).
 *
 * Test your function and answer with the result with a maximum of 4 decimals.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function calculateInterest(start, years, interest) {
        var calc = start;
        var i;

        for (i = 0; i < years; i++) {
            calc += calc / 100 * interest;
        }
        return parseFloat(calc.toFixed(4));
}

var result23 = calculateInterest(595, 50, 1);

ANSWER = result23;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.3", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
