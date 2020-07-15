/**
 * Showing off how to display/hide parts of a SVG-image.
 */
window.Hangman = (function () {
    "use strict";

    window.console.log('Sandbox is ready!');

    var hangman = {

        // Get all elements as their id
        "partAsElement": {
            "hill": document.getElementById('hang_hill'),
            "gallow": document.getElementById('hang_construction'),
            "body": document.getElementById('hang_body'),
            "rightarm": document.getElementById('hang_rightarm'),
            "leftarm": document.getElementById('hang_leftarm'),
            "rightleg": document.getElementById('hang_rightleg'),
            "leftleg": document.getElementById('hang_leftleg'),
            "rope": document.getElementById('hang_rope'),
            "head": document.getElementById('hang_head')
        },

        // Create an array with all valid parts
        "validParts": [
            "hill",
            "gallow",
            "body",
            "rightarm",
            "leftarm",
            "rightleg",
            "leftleg",
            "rope",
            "head"
        ],


        /**
         * Check if part a valid part, writes error message to console if the part is invalid.
         *
         * @param string part Name of the part to check.
         *
         * @returns boolean true if valid part, else false.
         */
        "isValid": function (part) {
            if (this.validParts.indexOf(part) === -1) {
                window.console.log("The part is not valid: " + part);
                return false;
            }
            window.console.log("The part is valid: " + part);
            return true;
        },


        /**
         * Hide a part.
         *
         * @param string part Name of the part to hide.
         *
         * @returns void.
         */
        "hide": function (part) {
            if (this.isValid(part)) {
                window.console.log("Hiding part: " + part);
                this.partAsElement[part].style.display = "none";
            }
        },


        /**
         * Show a part.
         *
         * @param string part Name of the part to show.
         *
         * @returns void.
         */
        "show": function (part) {
            if (this.isValid(part)) {
                window.console.log("Showing part: " + part);
                this.partAsElement[part].style.display = "inline";
            }
        },
        "wordlist": function() {
            var words = ["cherry", "vampire", "space", "computer", "javascript",
                "music", "sunshine", "hexadecimal", "minority", "fog"];

            return words;
        },
        "activeWord": (function() {
            var word = "word";

            function getWord() {
                return word;
            }
            function newWord(randomWord) {
                word = randomWord;
            }
            return {
                getWord: getWord,
                newWord: newWord
            };
        })(),

        "peek": function() {
            var isActive = hangman.activeWord.getWord();

            return isActive;
        },
        "restart": function() {
            location.reload(true);
        }
    };

    function getRandomWord() {
        var words = hangman.wordlist();
        var wordsLen = words.length - 1;
        var randomWord = function() {
            var randomPos = getRandomInt(0, wordsLen);

            hangman.activeWord.newWord(words[randomPos]);
            return console.log("Random word created");
        };

        return {
            word: randomWord()
        };
    }

    getRandomWord();
    var aw = hangman.activeWord.getWord();

    var activeLetters = document.getElementsByClassName("active");
    var allLetters = document.getElementsByClassName("char");
    var hangmanResults = document.getElementById("hangman_state");
    var fail = document.getElementById("fail");
    var success = document.getElementById("success");
    var restart = document.getElementById("restart");
    var taken = [];
    var matches = [];
    var matchesCount = 0;
    var noMatches = [];
    var count = 0;
    var partsCount = hangman.validParts.length;

    function remaining(letters) {
        var letter;
        var left = [];

        for (var i = 0; i < letters.length; i++) {
            letter = letters[i];
            left.push(letter.value);
        }
        return left;
    }

    function init() {
        this.classList.remove("active");
        this.classList.add("taken");
        var isLeft = remaining(activeLetters);
        var isLetter = this.value;
        var testLetter = isMatch(isLetter);

        if (testLetter[0]) {
            this.classList.add("match");
        }
        taken.push(isLetter);
        console.log("You chose " + isLetter + ".");
        console.log("Taken letters: " + taken + ".");
        console.log("Remaining letters: " + isLeft + ".");
    }

    function makeListener(letters) {
        var letter;

        for (var i = 0; i < letters.length; i++) {
            letter = letters[i];
            letter.addEventListener("click", init);
        }
    }

    function removeListener(letter) {
        letter.removeEventListener("click", init);
    }

    function removeAllListeners() {
        var letter;

        for (var i = 0; i < allLetters.length; i++) {
            letter = allLetters[i];
            letter.removeEventListener("click", init);
            letter.classList.remove("active");
        }
    }

    function initResultArea() {
        var wordToCompare = aw;
        var wordLen = wordToCompare.length;
        var startOne = "";
        var startTwo = "()";

        for (var i = 0; i < wordLen; i++) {
            startOne += "_";
        }
        hangmanResults.innerHTML = startOne + " " + startTwo;
    }

    function makeResultArea(isMatch, user) {
        var currentResult = "";
        var wordToCompare = aw;
        var wordLen = wordToCompare.length;

        if (isMatch) {
            for (var i = 0; i < wordLen; i++) {
                if (wordToCompare[i] === user) {
                    matches[i] = user;
                    matchesCount++;
                }
            }
        } else {
            noMatches += user;
        }
        for (var j = 0; j < wordLen; j++) {
            if (matches[j]) {
                currentResult += matches[j];
            } else {
                currentResult += "_";
            }
        }
        hangmanResults.innerHTML = currentResult + " (" + noMatches + ")";
    }

    function isMatch(user) {
        var match = [];

        for (var i = 0; i < aw.length; i++) {
            var letterInWord = aw[i];

            if (user === letterInWord) {
                match.push(letterInWord);
            }
        }
        if (match[0]) {
            console.log("Match: " + user);
            makeResultArea(true, user);
            isSuccess();
        } else {
            console.log("No match: " + user);
            makeResultArea(false, user);
            drawHangman();
        }
        removeListener(document.getElementById(user));
        return match;
    }

    function isSuccess() {
        var activeWordLen = aw.length;

        if (matchesCount === activeWordLen) {
            success.classList.remove("hide");
            restart.classList.remove("hide");
            removeAllListeners();
            makeRestartButton();
        }
    }

    function drawHangman() {
        var drawPart = hangman.validParts[count];

        hangman.show(drawPart);
        count++;
        if (count === partsCount) {
            fail.classList.remove("hide");
            restart.classList.remove("hide");
            removeAllListeners();
            makeRestartButton();
        }
    }

    function makeRestartButton() {
        restart.addEventListener("click", function() {
            hangman.restart();
        });
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    initResultArea();
    makeListener(activeLetters);
    console.log("Start");

    window.console.log("You can now use the hangman object as a part of the window-object." +
    "Try\n\nwindow.Hangman.hide('gallow')\nwindow.Hangman.show('gallow')" +
    "\n\nHere are all the parts you can work on.");
    window.console.log(hangman.validParts);
    // Return the object to make it visible.
    return hangman;
})();
