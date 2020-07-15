(function () {
    'use strict';
    var i;
    var numDice = document.getElementById('numDice');
    var numSides = document.getElementById('numSides');
    var numTimes = document.getElementById('numTimes');
    var diceThrow = document.getElementById('diceThrow');
    var diceSingle = document.getElementById('single');
    var diceDouble = document.getElementById('double');
    var diceImage = document.getElementsByClassName('diceImage');
    var diceResults = document.getElementById('result');
    var resetStats = document.getElementById('reset-stats');
    var resetAll = document.getElementById('reset-all');
    var diceRolls = document.getElementById('rolls');
    var diceTotal = document.getElementById('total');
    var diceAverage = document.getElementById('average');
    var count = 0;
    var total = 0;
    var avg = 0;
    var dice1 = "img/dice1.png",
        dice2 = "img/dice2.png",
        dice3 = "img/dice3.png",
        dice4 = "img/dice4.png",
        dice5 = "img/dice5.png",
        dice6 = "img/dice6.png";

    var diceType = function d(type) {
        switch (true) {
            case (type === 1):
                diceSingle.style.display = "inline-block";
                diceDouble.style.display = "none";
                break;
            case (type === 2):
                diceSingle.style.display = "inline-block";
                diceDouble.style.display = "inline-block";
                break;
        }
    };

    var dice1Sides = function s(sides) {
        var single = diceImage[0];

        switch (sides) {
            case 1:
                single.src = dice1;
                break;
            case 2:
                single.src = dice2;
                break;
            case 3:
                single.src = dice3;
                break;
            case 4:
                single.src = dice4;
                break;
            case 5:
                single.src = dice5;
                break;
            case 6:
                single.src = dice6;
                break;
        }
    };

    var dice2Sides = function s(sides) {
        var double = diceImage[1];

        switch (sides) {
            case 1:
                double.src = dice1;
                break;
            case 2:
                double.src = dice2;
                break;
            case 3:
                double.src = dice3;
                break;
            case 4:
                double.src = dice4;
                break;
            case 5:
                double.src = dice5;
                break;
            case 6:
                double.src = dice6;
                break;
        }
    };

    function updateDice() {
        var userDice = parseInt(numDice.value);

        window.console.log("Dice: " + userDice);
        diceType(userDice);
        count = 0;
        total = 0;
        avg = 0;
    }

    function updateSides() {
        var userSides = parseInt(numSides.value);

        window.console.log("Sides: " + userSides);
        dice1Sides(userSides);
        dice2Sides(userSides);
        count = 0;
        total = 0;
        avg = 0;
    }

    function clearStats() {
        count = 0;
        total = 0;
        avg = 0;
        diceResults.innerHTML = "Roll the dice";
        diceRolls.innerHTML = "Rolls: " + count;
        diceTotal.innerHTML = "Total: " + total;
        diceAverage.innerHTML = "Average: " + avg.toFixed(2);
        updateSides();
    }

    function clearAll() {
        count = 0;
        total = 0;
        avg = 0;
        diceThrow.innerHTML = "Dice Results:";
        diceResults.innerHTML = "Roll the dice";
        diceRolls.innerHTML = "Rolls: " + count;
        diceTotal.innerHTML = "Total: " + total;
        diceAverage.innerHTML = "Average: " + avg.toFixed(2);
        numDice.value = "1";
        numSides.value = "1";
        updateDice();
        updateSides();
    }

    numDice.addEventListener("change", function() {
        updateDice();
    });

    numSides.addEventListener("change", function() {
        updateSides();
    });

    resetStats.addEventListener("click", function() {
        clearStats();
    });

    resetAll.addEventListener("click", function() {
        clearAll();
    });

    updateDice();
    updateSides();

    document.addEventListener("keydown", function(event) {
        var key = event.key;

        if (key === "Enter") {
            if (parseInt(numTimes.value)) {
                window.console.log("Throwing the dice");
                var sidesNum = parseInt(numSides.value);
                var diceNum = parseInt(numDice.value);
                var maxDie = sidesNum;
                var minDie = 1;

                random(minDie, maxDie, diceNum);
            } else {
                diceResults.innerHTML = "Times must be an integer";
            }
        }
    });

    function random(min, max, dice) {
        var dice1;
        var dice2;

        if (dice === 1) {
            for (i = 1; i <= parseInt(numTimes.value); i++) {
                count++;
                window.console.log("Throw: " + i);
                dice1 = Math.floor(Math.random() * max) + min;
                dice1Sides(dice1);
                total += dice1;
                avg = total / count;
                window.console.log("Dice result: " + dice1);
                diceThrow.innerHTML = "Single Dice Results:";
                diceResults.innerHTML = "Last throw: " + dice1;
                diceRolls.innerHTML = "Rolls: " + count;
                diceTotal.innerHTML = "Total: " + total;
                diceAverage.innerHTML = "Average: " + avg.toFixed(2);
            }
        } else {
            for (i = 1; i <= parseInt(numTimes.value); i++) {
                count++;
                window.console.log("Throw: " + i);
                dice1 = Math.floor(Math.random() * max) + min;
                dice2 = Math.floor(Math.random() * max) + min;
                dice1Sides(dice1);
                dice2Sides(dice2);
                total += (dice1 + dice2);
                avg = total / count;
                window.console.log("First dice: " + dice1 + ", Second dice: " + dice2);
                diceThrow.innerHTML = "Double Dice Results:";
                diceResults.innerHTML = "Last throw: " + (dice1 + dice2);
                diceRolls.innerHTML = "Rolls: " + count;
                diceTotal.innerHTML = "Total: " + total;
                diceAverage.innerHTML = "Average: " + avg.toFixed(2);
            }
        }
    }
    window.console.log('Sandbox is ready!');
})();
