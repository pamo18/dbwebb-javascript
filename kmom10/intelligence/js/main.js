/**
 * Intelligence Test by Paul Moreland, JavaScript kmom10
 */
window.Test = (function () {
    "use strict";

    var test = {
        //Important stats for current tests, test development and element creation
        "current": {
            "testPage": document.getElementById('content'),
            "totalPoints": 43,
            "totalScore": 0,
            "testScore": 0,
            "t": 0,
            "newID": 1,
            "flagTimeLeft": null,
            "timeToHide": null,
            "startTimer": null,
            "startTimeout": null,
            "firstShape": null,
            "nextShape": null,
            "removeShape": null
        },
        //starts the different tests
        "introduction": function() {
            test.current.testPage.innerHTML = '';
            var testStart = document.createElement("div");

            testStart.classList.add("intro-start");
            var startTest;
            var currentScore;

            switch (test.current.t) {
                case 0:
                    window.console.log("Introduction");
                    var intro = "<h2 class='round-start'>Intelligence Test</h2>"
                    + "<div class='brain'><img src='img/brain.jpg'></div>"
                    + "<p class='intro'>"
                    + "This is an intelligence test to see how clever you are."
                    + "<br>"
                    + "Perform several tests to see your intelligence score."
                    + "<br>"
                    + "Good Luck!</p>"
                    + "<div class='start'>"
                    + "<a id='start' href='#'>Start the test!</a></div>";

                    test.current.testPage.innerHTML = intro;
                    var start = document.getElementById('start');

                    start.addEventListener("click", function() {
                        test.current.t++;
                        test.introduction();
                    });
                    break;
                case 1:
                    window.console.log("Test 1");
                    currentScore = "<h2 class='points-header'>Total Score:</h2>"
                    + "<div class='current-total'>"
                    + test.current.totalScore + "</div>";

                    test.current.testPage.innerHTML = currentScore;
                    testStart.innerHTML = "<h2 class='intro-heading'>"
                    + "Test 1: Quiz</h2>"
                    + "<h3>Tip: Click on the box 1, X or 2 to answer!"
                    + "<br>"
                    + "3 points for each correct answer</h3>"
                    + "<div class='start'>"
                    + "<a id='startQuiz' href='#'>Start test 1!</a></div>";
                    test.current.testPage.appendChild(testStart);
                    startTest = document.getElementById('startQuiz');
                    startTest.addEventListener("click", function() {
                        test.tips();
                    });
                    break;
                case 2:
                    window.console.log("Test 2");
                    currentScore = "<h2 class='points-header'>Total Score:</h2>"
                    + "<div class='current-total'>"
                    + test.current.totalScore + "</div>";

                    test.current.testPage.innerHTML = currentScore;
                    testStart.innerHTML = "<h2 class='intro-heading'>"
                    + "Test 2: Fizzbuzz</h2>"
                    + "<h3>3 points for the correct answer</h3>"
                    + "<div class='start'>"
                    + "<a id='startFizzbuzz' href='#'>Start test 2!</a></div>";
                    test.current.testPage.appendChild(testStart);
                    startTest = document.getElementById('startFizzbuzz');
                    startTest.addEventListener("click", function() {
                        test.fizzbuzz();
                    });
                    break;
                case 3:
                    window.console.log("Test 3");
                    currentScore = "<h2 class='points-header'>Total Score:</h2>"
                    + "<div class='current-total'>"
                    + test.current.totalScore + "</div>";

                    test.current.testPage.innerHTML = currentScore;
                    testStart.innerHTML = "<h2 class='intro-heading'>"
                    + "Test 3: Memory</h2>"
                    + "<h3>On the following screen you will be presented with "
                    + "9 flags."
                    + "<br>"
                    + "After 5 seconds these flags will disapear and your "
                    + "job will be to click on each flag in the correct order."
                    + "<br>"
                    + "The correct order is displayed when the flags disapear."
                    + "<br>"
                    + "If you guess incorrectly all the flags will appear and "
                    + "the game is finished."
                    + "<br>"
                    + "1 point for each correct answer.</h3>"
                    + "<div class='start'>"
                    + "<a id='startMemory' href='#'>Start test 3!</a></div>";
                    test.current.testPage.appendChild(testStart);
                    startTest = document.getElementById('startMemory');
                    startTest.addEventListener("click", function() {
                        test.memory();
                    });
                    break;
                case 4:
                    window.console.log("Test 4");
                    currentScore = "<h2 class='points-header'>Total Score:</h2>"
                    + "<div class='current-total'>"
                    + test.current.totalScore + "</div>";

                    test.current.testPage.innerHTML = currentScore;
                    testStart.innerHTML = "<h2 class='intro-heading'>"
                    + "Test 4: VARC"
                    + "</h2><h3 class ='varc-explained'>"
                    + "Visual ability & reading comprehension</h3>"
                    + "<h3>On the following screen you will be presented "
                    + "with 10 coloured shapes."
                    + "<br>"
                    + "Your job is to click on each shape in the correct order."
                    + "<br>"
                    + "The correct order is displayed in a numbered list under "
                    + "the shapes."
                    + "<br>"
                    + "If you guess incorrectly you must move on to the next "
                    + "shape on the list."
                    + "<br>"
                    + "You have 15 seconds to click as many shapes in the "
                    + "correct order as possible!"
                    + "<br>"
                    + "Correctly clicked shapes are marked with a green border,"
                    + " and no longer clickable."
                    + "<br>"
                    + "Incorrectly clicked shapes are marked with a red border, "
                    + "but are still clickable!"
                    + "<br>"
                    + "1 point for each correct click.</h3>"
                    + "<div class='start'>"
                    + "<a id='startVARC' href='#'>Start test 4!</a></div>";
                    test.current.testPage.appendChild(testStart);
                    startTest = document.getElementById('startVARC');
                    startTest.addEventListener("click", function() {
                        test.varc();
                    });
                    break;
                case 5:
                    window.console.log("Test 5");
                    currentScore = "<h2 class='points-header'>Total Score:</h2>"
                    + "<div class='current-total'>"
                    + test.current.totalScore + "</div>";

                    test.current.testPage.innerHTML = currentScore;
                    testStart.innerHTML = "<h2 class='intro-heading'>"
                    + "Test 5: Understanding ability</h2>"
                    + "<h3>On the following screen you will be presented with "
                    + "10 coloured shapes but this time individually."
                    + "<br>"
                    + "The shape will change every 1 second, with a 1 second "
                    + "pause inbetween."
                    + "<br>"
                    + "Your job is to click only on the shapes that meet the "
                    + "following criteria!"
                    + "<br><br>"
                    + "1: Has another colour than red"
                    + "<br>"
                    + "2: Has another shape than square"
                    + "<br>"
                    + "3: Is red and square"
                    + "<br><br>"
                    + "1 point for each correct click.</h3>"
                    + "<div class='start'>"
                    + "<a id='startUDSTG' href='#'>Start test 5!</a></div>";
                    test.current.testPage.appendChild(testStart);
                    startTest = document.getElementById('startUDSTG');
                    startTest.addEventListener("click", function() {
                        test.udstg();
                    });
                    break;
                case 6:
                    window.console.log("Results");
                    test.finalScore();
                    break;
            }
        },
        //reset current test
        "reset": function() {
            window.console.log("Resetting test");
            test.current.testScore = 0;
            test.current.newID = 1;
            clearInterval(test.current.flagTimeLeft);
            clearTimeout(test.current.timeToHide);
            clearInterval(test.current.startTimer);
            clearTimeout(test.current.startTimeout);
            clearTimeout(test.current.firstShape);
            clearTimeout(test.current.nextShape);
            clearTimeout(test.current.removeShape);
            test.introduction();
        },
        //creates clickable button to commence next test
        "nextStage": function() {
            var nextTest = document.createElement("div");

            nextTest.innerHTML = "<div class='nextTest'>"
            + "<a id='next-test' href='#'>Next Test</a></div>";
            nextTest.addEventListener("click", function() {
                test.current.t++;
                test.current.totalScore += test.current.testScore;
                test.current.testScore = 0;
                test.introduction();
            });
            test.current.testPage.appendChild(nextTest);
        },
        //creates clickable button that goes to the result page
        "toResults": function() {
            test.current.testPage.innerHTML = "";
            var toResults = document.createElement("div");

            toResults.classList.add("completed");
            toResults.innerHTML = "<h2 class='intro-heading'>"
            + "All Tests Completed!</h2><div class='start'>"
            + "<a id='to-results' href='#'>To Results</a></div>";
            test.current.testPage.appendChild(toResults);
            var toResultPage = document.getElementById('to-results');

            toResultPage.addEventListener("click", function() {
                test.current.t = 6;
                test.current.totalScore += test.current.testScore;
                test.current.testScore = 0;
                test.introduction();
            });
        },
        //creates the score board
        "score": function() {
            var theScore = test.current.testScore;
            var scoreBoard = document.createElement("div");

            scoreBoard.id = "currentScore";
            scoreBoard.classList.add("current-score");
            scoreBoard.innerHTML = theScore;
            test.current.testPage.appendChild(scoreBoard);
        },
        //creates the final results page
        "finalScore": function() {
            test.current.testPage.innerHTML = "";
            var intelligence =
            (Math.round((test.current.totalScore / test.current.totalPoints) * 100));
            var scoreHeading = document.createElement("div");
            var finalScore = document.createElement("div");
            var scoreDetails = document.createElement("div");
            var restartTest = document.createElement("div");

            scoreHeading.id = "scoreDetails";
            scoreHeading.classList.add("score-heading");
            scoreHeading.innerHTML = "<h2 class='round-result'>"
            + "Your intelligence score is:</h2>";

            finalScore.id = "currentScore";
            finalScore.classList.add("final-score");
            finalScore.innerHTML = "<p class='user-finalscore'>"
            + intelligence + "%</p>";

            scoreDetails.id = "scoreDetails";
            scoreDetails.classList.add("score-details");
            scoreDetails.innerHTML = "<h4 class='round'>You scored "
            + test.current.totalScore + " out of "
            + test.current.totalPoints + " points."
            + "<br>The maxium intelligence level is 100%.<br>"
            + "You are " + (100 - intelligence) + "% not intelligent!</h4>";

            restartTest.classList.add("start");
            restartTest.innerHTML = "<a id='restartTest' href='#'>"
            + "Restart Test!</a>";

            test.current.testPage.appendChild(scoreHeading);
            test.current.testPage.appendChild(finalScore);
            test.current.testPage.appendChild(scoreDetails);
            test.current.testPage.appendChild(restartTest);

            var newTest = document.getElementById('restartTest');

            newTest.addEventListener("click", function() {
                test.current.t = 0;
                test.current.totalScore = 0;
                test.current.testScore = 0;
                test.current.newID = 1;
                test.introduction();
            });
        },
        //updates the current score
        "updateScore": function() {
            var newScore = test.current.testScore;
            var scoreBoardUpdate = document.getElementById('currentScore');

            scoreBoardUpdate.innerHTML = newScore;
        },
        //creates the countdown timer
        "timeBoard": function(startTime) {
            var countDownBoard = document.createElement("div");

            countDownBoard.id = "countdown";
            countDownBoard.classList.add("count-down");
            countDownBoard.innerHTML = startTime;
            test.current.testPage.appendChild(countDownBoard);
        },
        //updates the countdown timer
        "updateTime": function(ticker) {
            var countDown = document.getElementById('countdown');

            countDown.innerHTML = ticker;
        },
        //removes the countdown timer
        "removeTime": function() {
            var countDownRemove = document.getElementById('countdown');

            countDownRemove.outerHTML = "";
        },
        //Creates objects with specifications and returns objects for tests 4 and 5
        "shapeMaker": function(myFunc) {
            var testShape = {
                theShape: {
                    idName: "",
                    width: "",
                    height: "",
                    color: "",
                    radius: "",
                    func: ""
                },
                init: function(w, h, c, r, f) {
                    var shapeID = "shape" + test.current.newID;

                    this.theShape = {
                        idName: shapeID,
                        width: w,
                        height: h,
                        colour: c,
                        radius: r,
                        func: f
                    };
                    test.current.newID++;
                },
                makeShape: function() {
                    var shape = document.createElement("div");

                    shape.id = this.theShape.idName;
                    shape.classList.add("shape");
                    shape.style.margin = 1 + "em";
                    shape.style.display = "inline-block";
                    shape.style.width = this.theShape.width + "px";
                    shape.style.height = this.theShape.height + "px";
                    shape.style.backgroundColor = this.theShape.colour;
                    shape.style.borderRadius = this.theShape.radius;
                    shape.addEventListener("click", this.theShape.func);
                    return shape;
                },
            };
            var testShape1 = Object.create(testShape);
            var testShape2 = Object.create(testShape);
            var testShape3 = Object.create(testShape);
            var testShape4 = Object.create(testShape);
            var testShape5 = Object.create(testShape);
            var testShape6 = Object.create(testShape);
            var testShape7 = Object.create(testShape);
            var testShape8 = Object.create(testShape);
            var testShape9 = Object.create(testShape);
            var testShape10 = Object.create(testShape);

            testShape1.init(200, 200, "green", "none", myFunc);
            testShape2.init(300, 200, "yellow", "none", myFunc);
            testShape3.init(200, 200, "red", "50%", myFunc);
            testShape4.init(200, 200, "black", "none", myFunc);
            testShape5.init(200, 200, "purple", "50%", myFunc);
            testShape6.init(200, 200, "red", "none", myFunc);
            testShape7.init(200, 200, "green", "50%", myFunc);
            testShape8.init(300, 200, "red", "none", myFunc);
            testShape9.init(300, 200, "blue", "none", myFunc);
            testShape10.init(200, 200, "yellow", "50%", myFunc);

            var myShapes = [testShape1, testShape2, testShape3,
                testShape4, testShape5, testShape6, testShape7,
                testShape8, testShape9, testShape10];

            for (var s = 0; s < myShapes.length; s++) {
                myShapes[s] = myShapes[s].makeShape();
            }
            test.current.newID = 1;
            return myShapes;
        },
        //First Test
        "tips": function() {
            var q = 1;
            var question;
            var answer1;
            var answerX;
            var answer2;
            var correct;

            function createQuestion() {
                switch (q) {
                    case 1:
                        question = "<h2 class='round-one'>"
                        + "Test 1: Question 1</h2>"
                        + "<p class='question'>What is 6 x 5?</p>";
                        answer1 = "65";
                        answerX = "30";
                        answer2 = "36";
                        correct = "X";
                        break;
                    case 2:
                        question = "<h2 class='round-one'>"
                        + "Test 1: Question 2</h2>"
                        + "<p class='question'>"
                        + "Home many sides on a typical dice?</p>";
                        answer1 = "6";
                        answerX = "5";
                        answer2 = "4";
                        correct = "1";
                        break;
                    case 3:
                        question = "<h2 class='round-one'>"
                        + "Test 1: Question 3</h2>"
                        + "<p class='question'>"
                        + "What is the capital of Holland?</p>";
                        answer1 = "Berlin";
                        answerX = "London";
                        answer2 = "Amsterdam";
                        correct = "2";
                        break;
                    case 4:
                        question = "<h2 class='round-one'>"
                        + "Test 1: Question 4</h2>"
                        + "<p class='question'>What is 6.5 x 2?</p>";
                        answer1 = "13";
                        answerX = "12";
                        answer2 = "11";
                        correct = "1";
                        break;
                    case 5:
                        question = "<h2 class='round-one'>"
                        + "Test 1: Question 5</h2>"
                        + "<p class='question'>"
                        + "Which of the following is a cheese?</p>";
                        answer1 = "Cement";
                        answerX = "Grass";
                        answer2 = "Brie";
                        correct = "2";
                        break;
                }
                var a1 = "<div class='answer'>" + answer1 + "</div>";
                var aX = "<div class='answer'>" + answerX + "</div>";
                var a2 = "<div class='answer'>" + answer2 + "</div>";
                var box1 = "<div id='box1' class='box'>1</div>" + a1;
                var boxX = "<div id='boxX' class='box'>X</div>" + aX;
                var box2 = "<div id='box2' class='box'>2</div>" + a2;

                test.current.testPage.innerHTML = question + box1 + boxX + box2;
                test.score();
            }

            createQuestion();

            function createLink() {
                if (q < 5) {
                    var nextQ = document.createElement("div");

                    nextQ.innerHTML = "<div class='nextQ'>"
                    + "<a id='next' href='#'>Next Question</a></div>";
                    test.current.testPage.appendChild(nextQ);
                    nextQ.addEventListener("click", function() {
                        q++;
                        createQuestion();
                        createLink();
                        initQ();
                    });
                } else {
                    test.nextStage();
                }
            }

            createLink();

            function initQ() {
                var user1 = document.getElementById('box1');
                var userX = document.getElementById('boxX');
                var user2 = document.getElementById('box2');

                function checkAnswer() {
                    var nodeList = document.getElementsByClassName("chosen");
                    var nodeID = nodeList[0].id;
                    var nodeList1;
                    var nodeList2;
                    var nodeList3;

                    if (nodeList[0].innerHTML === correct) {
                        test.current.testScore += 3;
                        test.updateScore();
                        nodeList[0].classList.add("correct");
                    } else {
                        nodeList[0].classList.add("wrong");
                        switch (nodeID) {
                            case 'box1':
                                nodeList2 = document.getElementById("boxX");
                                nodeList3 = document.getElementById("box2");

                                if (nodeList2.innerHTML == correct) {
                                    nodeList2.classList.add("correct");
                                    nodeList3.classList.add("wrong");
                                } else {
                                    nodeList3.classList.add("correct");
                                    nodeList2.classList.add("wrong");
                                }
                                break;
                            case 'boxX':
                                nodeList1 = document.getElementById("box1");
                                nodeList3 = document.getElementById("box2");

                                if (nodeList1.innerHTML == correct) {
                                    nodeList1.classList.add("correct");
                                    nodeList3.classList.add("wrong");
                                } else {
                                    nodeList3.classList.add("correct");
                                    nodeList1.classList.add("wrong");
                                }
                                break;
                            case 'box2':
                                nodeList2 = document.getElementById("box1");
                                nodeList1 = document.getElementById("boxX");

                                if (nodeList2.innerHTML == correct) {
                                    nodeList2.classList.add("correct");
                                    nodeList1.classList.add("wrong");
                                } else {
                                    nodeList1.classList.add("correct");
                                    nodeList2.classList.add("wrong");
                                }
                                break;
                        }
                    }
                }

                var user1Chosen = function() {
                    user1.classList.add("chosen");
                    userX.classList.remove("chosen");
                    user2.classList.remove("chosen");
                    checkAnswer();
                    removeAllListeners();
                };

                var userXChosen = function() {
                    userX.classList.add("chosen");
                    user1.classList.remove("chosen");
                    user2.classList.remove("chosen");
                    checkAnswer();
                    removeAllListeners();
                };

                var user2Chosen = function() {
                    user2.classList.add("chosen");
                    user1.classList.remove("chosen");
                    userX.classList.remove("chosen");
                    checkAnswer();
                    removeAllListeners();
                };

                function addAllListeners() {
                    user1.addEventListener("click", user1Chosen);
                    userX.addEventListener("click", userXChosen);
                    user2.addEventListener("click", user2Chosen);
                }

                function removeAllListeners() {
                    user1.removeEventListener("click", user1Chosen);
                    userX.removeEventListener("click", userXChosen);
                    user2.removeEventListener("click", user2Chosen);
                }

                addAllListeners();
            }

            initQ();
        },
        //Second Test
        "fizzbuzz": function() {
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            var startNum = 1;
            var stopNum = 50;
            var i;
            var str = "";
            var gameStr;
            var gameStartNum = getRandomInt(startNum, stopNum);
            var gameStopNum = gameStartNum + 50;
            var gameNextNum = gameStopNum + 1;

            for (i = gameStartNum; i <= gameStopNum; i++) {
                if (i % 3 === 0 && i % 5 === 0) {
                    str += "Fizz Buzz" + " , ";
                } else if (i % 3 === 0) {
                    str += "Fizz" + " , ";
                } else if (i % 5 === 0) {
                    str += "Buzz" + " , ";
                } else {
                    str += i + " , ";
                }
            }

            gameStr = str.slice(0, -3);

            var t2a1 = getRandomInt(gameStartNum, gameStopNum);
            var t2a3 = getRandomInt(gameStartNum, gameStopNum);
            var test2Q = "<h2 class='round-two'>"
            + "Test 2: Fizzbuzz</h2>"
            + "<p class='question'>"
            + "What is the next number in the following sequence?</p>";
            var test2A1 = "<div id='box1' class='answer-test2'>"
            + t2a1 + "</div>";
            var test2A2 = "<div id='box2' class='answer-test2'>"
            + gameNextNum + "</div>";
            var test2A3 = "<div id='box3' class='answer-test2'>"
            + t2a3 + "</div>";

            function getStr() {
                var pos = getRandomInt(1, 3);
                var posStr;

                switch (pos) {
                    case 1:
                        posStr = test2Q + "<div class='fizz-buzz'><p>"
                        + gameStr + "</p></div><div class='boxes-test2'>"
                        + test2A1 + test2A2 + test2A3 + "</div>";
                        break;
                    case 2:
                        posStr = test2Q + "<div class='fizz-buzz'><p>"
                        + gameStr + "</p></div><div class='boxes-test2'>"
                        + test2A2 + test2A1 + test2A3 + "</div>";
                        break;
                    case 3:
                        posStr = test2Q + "<div class='fizz-buzz'><p>"
                        + gameStr + "</p></div><div class='boxes-test2'>"
                        + test2A1 + test2A3 + test2A2 + "</div>";
                        break;
                }
                return posStr;
            }

            test.current.testPage.innerHTML = getStr();
            test.score();

            function checkAnswer() {
                var nodeList = document.getElementsByClassName("chosen");
                var toCheck = nodeList[0].innerHTML;
                var nodeID = nodeList[0].id;
                var nodeList1;
                var nodeList2;
                var nodeList3;

                if (toCheck == gameNextNum) {
                    test.current.testScore += 3;
                    test.updateScore();
                    nodeList[0].classList.add("correct");
                } else {
                    nodeList[0].classList.add("wrong");
                    switch (nodeID) {
                        case 'box1':
                            nodeList2 = document.getElementById("box2");
                            nodeList3 = document.getElementById("box3");

                            if (nodeList2.innerHTML == gameNextNum) {
                                nodeList2.classList.add("correct");
                                nodeList3.classList.add("wrong");
                            } else {
                                nodeList3.classList.add("correct");
                                nodeList2.classList.add("wrong");
                            }
                            break;
                        case 'box2':
                            nodeList1 = document.getElementById("box1");
                            nodeList3 = document.getElementById("box3");

                            if (nodeList1.innerHTML == gameNextNum) {
                                nodeList1.classList.add("correct");
                                nodeList3.classList.add("wrong");
                            } else {
                                nodeList3.classList.add("correct");
                                nodeList1.classList.add("wrong");
                            }
                            break;
                        case 'box3':
                            nodeList2 = document.getElementById("box2");
                            nodeList1 = document.getElementById("box1");

                            if (nodeList2.innerHTML == gameNextNum) {
                                nodeList2.classList.add("correct");
                                nodeList1.classList.add("wrong");
                            } else {
                                nodeList1.classList.add("correct");
                                nodeList2.classList.add("wrong");
                            }
                            break;
                    }
                }

                test.nextStage();
            }

            var user1 = document.getElementById('box1');
            var user2 = document.getElementById('box2');
            var user3 = document.getElementById('box3');

            var user1Chosen = function() {
                user1.classList.add("chosen");
                user2.classList.remove("chosen");
                user3.classList.remove("chosen");
                checkAnswer();
                removeAllListeners();
            };

            var user2Chosen = function() {
                user2.classList.add("chosen");
                user1.classList.remove("chosen");
                user3.classList.remove("chosen");
                checkAnswer();
                removeAllListeners();
            };

            var user3Chosen = function() {
                user3.classList.add("chosen");
                user1.classList.remove("chosen");
                user2.classList.remove("chosen");
                checkAnswer();
                removeAllListeners();
            };

            function addAllListeners() {
                user1.addEventListener("click", user1Chosen);
                user2.addEventListener("click", user2Chosen);
                user3.addEventListener("click", user3Chosen);
            }

            function removeAllListeners() {
                user1.removeEventListener("click", user1Chosen);
                user2.removeEventListener("click", user2Chosen);
                user3.removeEventListener("click", user3Chosen);
            }
            addAllListeners();
        },
        //Third Test
        "memory": function() {
            var orderCounter = 1;
            var memoryTicker = 5;
            var flag = {
                hiddenFlag: "img/which.png",
                outer: {
                    w: 300,
                    h: 200
                },
                inner: {
                    c: "Country",
                    ibg: "",
                    iw: 0,
                    ih: 0
                },
                part1: {
                    p1w: 300,
                    p1h: 200,
                    p1t: 0,
                    p1l: 0,
                    p1bg: "",
                    p1br: ""
                },
                part2: {
                    p2w: 300,
                    p2h: 200,
                    p2t: 0,
                    p2l: 0,
                    p2bg: "",
                    p2br: ""
                },
                init: function(country, background,
                    prt1w, prt1h, prt1t, prt1l, prt1bg, prt1br,
                    prt2w, prt2h, prt2t, prt2l, prt2bg, prt2br) {
                    this.inner = {
                        c: country,
                        ibg: background,
                        iw: 300,
                        ih: 200
                    },
                    this.part1 = {
                        p1w: prt1w,
                        p1h: prt1h,
                        p1t: prt1t,
                        p1l: prt1l,
                        p1bg: prt1bg,
                        p1br: prt1br
                    },
                    this.part2 = {
                        p2w: prt2w,
                        p2h: prt2h,
                        p2t: prt2t,
                        p2l: prt2l,
                        p2bg: prt2bg,
                        p2br: prt2br
                    };
                },
                draw: function() {
                    var content = document.getElementById('content');
                    var outerFlag = document.createElement("div");

                    outerFlag.id = this.inner.c + "Flag";
                    outerFlag.className = "outer-flag";
                    outerFlag.style.height = this.outer.h + "px";
                    outerFlag.style.width = this.outer.w + "px";
                    content.appendChild(outerFlag);

                    var countryFlag = document.getElementById(outerFlag.id);
                    var innerFlag = document.createElement("div");
                    var flagName = document.createElement("p");
                    var backImage = document.createElement("img");

                    innerFlag.id = this.inner.c;
                    innerFlag.style.height = this.inner.ih + "px";
                    innerFlag.style.width = this.inner.iw + "px";
                    innerFlag.style.position = "relative";
                    innerFlag.style.backgroundColor = "black";
                    flagName.id = "Country-" + this.inner.c;
                    flagName.style.fontSize = "2em";
                    flagName.style.margin = "0";
                    flagName.innerHTML = "Click to reveal!";
                    backImage.id = this.inner.c + "Back";
                    backImage.className = "which-flag";
                    backImage.src = this.hiddenFlag;
                    backImage.alt = "Which Flag?";
                    countryFlag.appendChild(innerFlag);
                    countryFlag.appendChild(flagName);
                    innerFlag.appendChild(backImage);

                    var country = document.getElementById(innerFlag.id);
                    var part1 = document.createElement("div");
                    var part2 = document.createElement("div");

                    part1.id = innerFlag.id + " part1";
                    part1.style.height = this.part1.p1h + "px";
                    part1.style.width = this.part1.p1w + "px";
                    part1.style.position = "absolute";
                    part1.style.top = this.part1.p1t + "px";
                    part1.style.left = this.part1.p1l + "px";
                    part1.style.backgroundColor = this.part1.p1bg;
                    part1.style.borderRadius = this.part1.p1br;
                    part1.style.visibility = "hidden";
                    part1.style.opacity = 0;
                    part1.style.transition =
                        "visibility 0s, opacity 0.5s linear";
                    country.appendChild(part1);

                    part2.id = innerFlag.id + " part2";
                    part2.style.height = this.part2.p2h + "px";
                    part2.style.width = this.part2.p2w + "px";
                    part2.style.position = "absolute";
                    part2.style.top = this.part2.p2t + "px";
                    part2.style.left = this.part2.p2l + "px";
                    part2.style.backgroundColor = this.part2.p2bg;
                    part2.style.borderRadius = this.part2.p2br;
                    part2.style.visibility = "hidden";
                    part2.style.opacity = 0;
                    part2.style.transition =
                        "visibility 0s, opacity 0.5s linear";
                    country.appendChild(part2);
                },
                reveal: function(show) {
                    var back = document.getElementById(this.inner.c);
                    var backPart1 =
                        document.getElementById(this.inner.c + " part1");
                    var backPart2 =
                        document.getElementById(this.inner.c + " part2");
                    var backP =
                        document.getElementById("Country-" + this.inner.c);
                    var whichFlag =
                        document.getElementById(this.inner.c + "Back");

                    if (show) {
                        back.style.backgroundColor = this.inner.ibg;
                        backPart1.style.visibility = "visible";
                        backPart1.style.opacity = "1";
                        backPart2.style.visibility = "visible";
                        backPart2.style.opacity = "1";
                        backP.innerHTML = this.inner.c;
                        whichFlag.style.visibility = "hidden";
                        whichFlag.style.opacity = 0;
                        whichFlag.style.transition =
                            "visibility 0s, opacity 0.5s linear";
                    } else {
                        back.style.backgroundColor = "black";
                        backPart1.style.visibility = "hidden";
                        backPart1.style.opacity = "0";
                        backPart2.style.visibility = "hidden";
                        backPart2.style.opacity = "0";
                        backP.innerHTML = "Click to reveal!";
                        whichFlag.style.visibility = "visible";
                        whichFlag.style.opacity = 1;
                    }
                }
            };

            var swedishFlag = Object.create(flag);
            var italienFlag = Object.create(flag);
            var englandFlag = Object.create(flag);
            var japanFlag = Object.create(flag);
            var finlandFlag = Object.create(flag);
            var swedishFlagB = Object.create(flag);
            var italienFlagB = Object.create(flag);
            var englandFlagB = Object.create(flag);
            var japanFlagB = Object.create(flag);

            swedishFlag.init("Sweden", "#0f6ba5", 300, 37.5, 81.25, 0,
                "#fdcb2f", "", 37.5, 200, 0, 93.75, "#fdcb2f", "");
            englandFlag.init("England", "#fff", 300, 36, 82, 0,
                "#ca0813", "", 36, 200, 0, 132, "#ca0813", "");
            italienFlag.init("Italy", "#fff", 100, 200, 0, 0,
                "#139149", "", 100, 200, 0, 200, "#cc2e3b", "");
            japanFlag.init("Japan", "#fff", 120, 120, 40, 90, "#ba0831", "50%");
            finlandFlag.init("Finland", "#fff", 300, 56.25, 71.875, 0,
                "#0c3693", "", 56.25, 200, 0, 81.25, "#0c3693", "");
            swedishFlagB.init("Sweden-B", "#0f6ba5", 300, 37.5, 81.25, 0,
                "#fdcb2f", "", 37.5, 200, 0, 93.75, "#fdcb2f", "");
            englandFlagB.init("England-B", "#fff", 300, 36, 82, 0,
                "#ca0813", "", 36, 200, 0, 132, "#ca0813", "");
            italienFlagB.init("Italy-B", "#fff", 100, 200, 0, 0,
                "#139149", "", 100, 200, 0, 200, "#cc2e3b", "");
            japanFlagB.init("Japan-B", "#fff", 120, 120, 40, 90,
                "#ba0831", "50%");

            var flags = [swedishFlag, englandFlag, italienFlag,
                japanFlag, finlandFlag, swedishFlagB,
                englandFlagB, italienFlagB, japanFlagB];

            var test3Q = "<h2 class='round'>Test 3: Memory</h2>";

            test.current.testPage.innerHTML = test3Q;
            test.score();
            test.timeBoard(memoryTicker);

            for (var d = 0; d < flags.length; d++) {
                flags[d].draw();
            }

            var sweden = document.getElementById('Sweden');
            var england = document.getElementById('England');
            var italy = document.getElementById('Italy');
            var japan = document.getElementById('Japan');
            var finland = document.getElementById('Finland');
            var swedenB = document.getElementById('Sweden-B');
            var englandB = document.getElementById('England-B');
            var italyB = document.getElementById('Italy-B');
            var japanB = document.getElementById('Japan-B');

            var listenerSwe = function() {
                checkResult(swedishFlag, 6);
                sweden.removeEventListener("click", listenerSwe);
                window.console.log("Listener removed");
            };

            var listenerEng = function() {
                checkResult(englandFlag, 3);
                england.removeEventListener("click", listenerEng);
                window.console.log("Listener removed");
            };

            var listenerIta = function() {
                checkResult(italienFlag, 1);
                italy.removeEventListener("click", listenerIta);
                window.console.log("Listener removed");
            };

            var listenerJap = function() {
                checkResult(japanFlag, 8);
                japan.removeEventListener("click", listenerJap);
                window.console.log("Listener removed");
            };

            var listenerFin = function() {
                checkResult(finlandFlag, 5);
                finland.removeEventListener("click", listenerFin);
                window.console.log("Listener removed");
            };

            var listenerSweB = function() {
                checkResult(swedishFlagB, 2);
                swedenB.removeEventListener("click", listenerSweB);
                window.console.log("Listener removed");
            };

            var listenerEngB = function() {
                checkResult(englandFlagB, 7);
                englandB.removeEventListener("click", listenerEngB);
                window.console.log("Listener removed");
            };

            var listenerItaB = function() {
                checkResult(italienFlagB, 9);
                italyB.removeEventListener("click", listenerItaB);
                window.console.log("Listener removed");
            };

            var listenerJapB = function() {
                checkResult(japanFlagB, 4);
                japanB.removeEventListener("click", listenerJapB);
                window.console.log("Listener removed");
            };

            function revealAll() {
                for (var r = 0; r < flags.length; r++) {
                    flags[r].reveal(true);
                }
            }

            function addAllListeners() {
                sweden.addEventListener("click", listenerSwe);
                england.addEventListener("click", listenerEng);
                italy.addEventListener("click", listenerIta);
                japan.addEventListener("click", listenerJap);
                finland.addEventListener("click", listenerFin);
                swedenB.addEventListener("click", listenerSweB);
                englandB.addEventListener("click", listenerEngB);
                italyB.addEventListener("click", listenerItaB);
                japanB.addEventListener("click", listenerJapB);
            }

            function removeAllListeners() {
                sweden.removeEventListener("click", listenerSwe);
                england.removeEventListener("click", listenerEng);
                italy.removeEventListener("click", listenerIta);
                japan.removeEventListener("click", listenerJap);
                finland.removeEventListener("click", listenerFin);
                swedenB.removeEventListener("click", listenerSweB);
                englandB.removeEventListener("click", listenerEngB);
                italyB.removeEventListener("click", listenerItaB);
                japanB.removeEventListener("click", listenerJapB);
                console.log("All listeners removed");
            }

            function checkResult(flag, position) {
                var flagPos =
                    document.getElementById("flag-order" + (orderCounter));

                if (orderCounter === position) {
                    flagPos.classList.add("flag-pos-passed");
                    flag.reveal(true);
                    orderCounter++;
                    test.current.testScore += 1;
                    test.updateScore();
                } else {
                    revealAll();
                    removeAllListeners();
                    test.nextStage();
                }
                if (orderCounter === 10) {
                    test.nextStage();
                    orderCounter = false;
                }
            }

            function hideAll() {
                clearInterval(test.current.flagTimeLeft);
                test.removeTime();
                for (var h = 0; h < flags.length; h++) {
                    flags[h].reveal(false);
                }

                var flagOrder = document.createElement("div");
                var first = "<li id='flag-order1'>Italy</li>";
                var second = "<li id='flag-order2'>Sweden-B</li>";
                var third = "<li id='flag-order3'>England</li>";
                var fourth = "<li id='flag-order4'>Japan-B</li>";
                var fifth = "<li id='flag-order5'>Finland</li>";
                var sixth = "<li id='flag-order6'>Sweden</li>";
                var seventh = "<li id='flag-order7'>England-B</li>";
                var eighth = "<li id='flag-order8'>Japan</li>";
                var ninth = "<li id='flag-order9'>Italy-B</li>";

                flagOrder.innerHTML = "<ol class='flagOrderList'>"
                + first + second + third
                + "</ol><ol start='4' class='flagOrderList'>"
                + fourth + fifth + sixth
                + "</ol><ol start='7' class='flagOrderList'>"
                + seventh + eighth + ninth + "</ol>";

                flagOrder.classList.add("flagOrder");
                test.current.testPage.appendChild(flagOrder);
                addAllListeners();
            }

            function timeLeft() {
                memoryTicker--;
                test.updateTime(memoryTicker);
            }

            test.current.flagTimeLeft = setInterval(function() { timeLeft(); }, 999);

            revealAll();
            test.current.timeToHide = setTimeout(function() { hideAll(); }, 5000);
        },
        //Fourth Test
        "varc": function() {
            var test4Q = "<h2 class='round'>Test 4: VARC</h2>";

            test.current.testPage.innerHTML = test4Q;
            test.score();

            var varcShapes = document.createElement("div");

            varcShapes.classList.add("varc-shapes");
            test.current.testPage.appendChild(varcShapes);

            var orderToClick = ["shape3", "shape9", "shape7", "shape8",
                "shape10", "shape6", "shape4",
                "shape1", "shape2", "shape5"];
            var clickPos = 0;
            var varcTicker = 15;

            test.timeBoard(varcTicker);

            function removeAllListeners() {
                var shapeToRemove;

                for (var i = 0; i < orderToClick.length; i++) {
                    shapeToRemove = document.getElementById(orderToClick[i]);
                    shapeToRemove.removeEventListener("click", checkOrder);
                }
            }

            var checkOrder = function () {
                var listPos =
                    document.getElementById("shape-order" + (clickPos + 1));

                if (this.id == orderToClick[clickPos]) {
                    this.classList.add("correctShape");
                    this.classList.remove("incorrectShape");
                    test.current.testScore += 1;
                    test.updateScore();
                    this.removeEventListener("click", checkOrder);
                } else {
                    this.classList.add("incorrectShape");
                }

                clickPos++;

                if (clickPos === 10) {
                    clearInterval(test.current.startTimer);
                    clearTimeout(test.current.startTimeout);
                    removeAllListeners();
                    test.nextStage();
                }
                listPos.classList.add("shape-pos-passed");
            };

            function createMyShapes() {
                var allMyShapes = test.shapeMaker(checkOrder);

                for (var s = 0; s < allMyShapes.length; s++) {
                    varcShapes.appendChild(allMyShapes[s]);
                }
            }

            createMyShapes();

            var shapeOrder = document.createElement("div");
            var first = "<li id='shape-order1'>The red circle</li>";
            var second = "<li id='shape-order2'>The blue rectangle</li>";
            var third = "<li id='shape-order3'>The green circle</li>";
            var fourth = "<li id='shape-order4'>The red rectangle</li>";
            var fifth = "<li id='shape-order5'>The yellow circle</li>";
            var sixth = "<li id='shape-order6'>The red square</li>";
            var seventh = "<li id='shape-order7'>The black square</li>";
            var eighth = "<li id='shape-order8'>The green square</li>";
            var ninth = "<li id='shape-order9'>The yellow rectangle</li>";
            var tenth = "<li id='shape-order10'>The purple circle</li>";

            shapeOrder.innerHTML = "<ol class='shapeOrderList'>"
            + first + second + third + fourth + fifth
            + "</ol><ol start='6' class='shapeOrderList'>"
            + sixth + seventh + eighth + ninth + tenth + "</ol>";

            shapeOrder.classList.add("shapeOrder");
            test.current.testPage.appendChild(shapeOrder);

            function timeUp() {
                removeAllListeners();
                test.nextStage();
                clearInterval(test.current.startTimer);
            }

            function timeLeft() {
                varcTicker--;
                test.updateTime(varcTicker);
            }

            test.current.startTimer = setInterval(function() { timeLeft(); }, 999);
            test.current.startTimeout = setTimeout(function() { timeUp(); }, 15000);
        },
        //Fifth Test
        "udstg": function() {
            var test5Q = "<h2 class='round'>Test 5: Understanding ability</h2>";
            var reminder = "<div class='test-reminder'><ol>"
            + "<li>Has another colour than red</li>"
            + "<li>Has another shape than square</li>"
            + "<li>Is red and square</li></ol></div>";

            test.current.testPage.innerHTML = test5Q + reminder;
            test.score();

            var udstgShape = document.createElement("div");

            udstgShape.classList.add("udstg-shapes");
            test.current.testPage.appendChild(udstgShape);
            var checkShape = function() {
                var first = this.style.backgroundColor === "red";
                var second = this.style.width === this.style.height;
                var third = this.style.borderRadius === "50%";

                if (first && second && !third) {
                    console.log("Shape is red and square");
                    test.current.testScore += 1;
                    test.updateScore();
                } else if (!first && !second) {
                    console.log("Shape is not red and not square");
                    test.current.testScore += 1;
                    test.updateScore();
                } else if (!first && third) {
                    console.log("Shape is not red and is a circle");
                    test.current.testScore += 1;
                    test.updateScore();
                }
                this.removeEventListener("click", checkShape);
            };

            var c = 0;
            var allMyShapes = test.shapeMaker(checkShape);

            test.current.firstShape = setTimeout(function() { addShape(); }, 1000);

            function addShape() {
                udstgShape.appendChild(allMyShapes[c]);
                test.current.removeShape = setTimeout(function() { removeShape(); }, 1000);
            }

            function removeShape() {
                udstgShape.removeChild(allMyShapes[c]);
                c++;
                if (c < 10) {
                    test.current.nextShape = setTimeout(function() { addShape(); }, 1000);
                } else {
                    test.toResults();
                }
            }
        }
    };

    //creates the start page, introduction and increases the test counter
    test.introduction();

    window.console.log('Intelligence Test');
    window.console.log('Test.reset() restarts the current test');
    window.console.log('Test.tips() starts the first test');
    window.console.log('Test.fizzbuzz() starts the second test');
    window.console.log('Test.memory() starts the third test');
    window.console.log('Test.varc() starts the fourth test');
    window.console.log('Test.udstg() starts the fifth test');
    window.console.log('Test.finalScore() shows the result page');
    return test;
})();
