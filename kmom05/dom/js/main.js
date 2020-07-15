(function () {
    'use strict';
    window.console.log('Sandbox is ready!');

    var content = document.getElementById('content'),
        box1 = document.getElementById('box1'),
        browserHeight = window.innerHeight,
        browserWidth = window.innerWidth,
        newID = 2;

    function getStyle(element) {
        var compStyles = window.getComputedStyle(element);

        return {
            width: parseInt(compStyles.width),
            height: parseInt(compStyles.height),
            top: parseInt(compStyles.top),
            left: parseInt(compStyles.left),
            zindex: parseInt(compStyles.zIndex)
        };
    }

    function descSize(element) {
        var sizeName = element.id,
            sizeWidth = getStyle(element).width,
            sizeHeight = getStyle(element).height;

        return console.log(sizeName + " size -> Width: " +
                           sizeWidth + "px" + ", Height: " + sizeHeight + "px");
    }

    function descPos(element) {
        var posName = element.id,
            posTop = getStyle(element).top,
            posLeft = getStyle(element).left;

        return console.log(posName + " position -> Top: " +
                           posTop + "px" + ", Left: " + posLeft + "px");
    }

    function center(element) {
        var cenName =  element.id,
            cenLeft = (getStyle(content).width - getStyle(element).width) / 2,
            cenTop = (getStyle(content).height - getStyle(element).height) / 2;

        element.style.left = cenLeft + "px";
        element.style.top = cenTop + "px";
        return console.log("Centering: " + cenName);
    }

    function makeBoxSelectable(box) {
        box.addEventListener("click", function(e) {
            box.classList.toggle("selected");
            console.log(e);
        });
    }

    function makeBoxDBClickable(box) {
        box.addEventListener("dblclick", function() {
            box.classList.toggle("animateSize");

            var boxID = "div #" + box.id;
            var selectedWidth = getStyle(box).width;
            var selectedHeight = getStyle(box).height;
            var selectedLeft = getStyle(box).left;
            var selectedTop = getStyle(box).top;

            box.style.width = 2 + "px";
            box.style.height = 2 + "px";
            box.style.left = selectedLeft + ((selectedWidth - 2) / 2) + "px";
            box.style.top = selectedTop + ((selectedHeight - 2) / 2) + "px";
            setTimeout(function() { deleteBox(boxID); }, 2000);
        });
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function makeBox(box) {
        var nodeList = document.querySelectorAll(box);
        var count = 0;

        for (var i = 0; i < nodeList.length; i++) {
            var node = nodeList[i];
            var nodeWidth = getStyle(node).width;
            var nodeHeight = getStyle(node).height;
            var newNode = node.cloneNode(false);
            var randomLeft = getRandomInt(0, (getStyle(content).width - nodeWidth));
            var randomTop = getRandomInt(0, (getStyle(content).height - nodeHeight));
            var left = Math.floor(randomLeft / 10) * 10;
            var top = Math.floor(randomTop / 10) * 10;

            content.appendChild(newNode);
            newNode.id = "box" + newID;
            newNode.style.left = left + "px";
            newNode.style.top = top + "px";
            newNode.style.zIndex = 2;
            makeBoxSelectable(newNode);
            makeBoxDBClickable(newNode);

            var lastID = newNode.id;

            count += 1;
            newID += 1;
        }
        console.log("Created: " + count + " new boxes");
        return lastID;
    }

    function changeForm(random) {
        if (random) {
            random.classList.add("circle");
        } else {
            var nodeList = document.getElementsByClassName("selected");

            for (var i = 0; i < nodeList.length; i++) {
                nodeList[i].classList.toggle("circle");
                console.log("Toggle circle class");
            }
        }
    }

    function makeBigger() {
        var nodeList = document.getElementsByClassName("selected");

        for (var i = 0; i < nodeList.length; i++) {
            var selectedWidth = getStyle(nodeList[i]).width;
            var selectedHeight = getStyle(nodeList[i]).height;
            var selectedLeft = getStyle(nodeList[i]).left;
            var selectedTop = getStyle(nodeList[i]).top;
            var stopRight = getStyle(content).width - selectedWidth;
            var stopBottom = getStyle(content).height - selectedHeight;


            if (selectedTop > 0 && selectedTop < stopBottom &&
                selectedLeft > 0 && selectedLeft < stopRight) {
                nodeList[i].style.width = selectedWidth + 10 + "px";
                nodeList[i].style.height = selectedHeight + 10 + "px";
                nodeList[i].style.left = selectedLeft - 5 + "px";
                nodeList[i].style.top = selectedTop - 5 + "px";
                var nowWidth = getStyle(nodeList[i]).width;
                var nowHeight = getStyle(nodeList[i]).height;

                console.log(nodeList[i].id + " increased by 10px, width: " +
                            nowWidth + ", height: " + nowHeight);
                console.log(event);
            } else {
                console.log("Stop");
            }
        }
    }

    function makeSmaller() {
        var nodeList = document.getElementsByClassName("selected");

        for (var i = 0; i < nodeList.length; i++) {
            var selectedWidth = getStyle(nodeList[i]).width;
            var selectedHeight = getStyle(nodeList[i]).height;
            var selectedLeft = getStyle(nodeList[i]).left;
            var selectedTop = getStyle(nodeList[i]).top;

            if (selectedWidth > 0 && selectedHeight > 0) {
                nodeList[i].style.width = selectedWidth - 10 + "px";
                nodeList[i].style.height = selectedHeight - 10 + "px";
                nodeList[i].style.left = selectedLeft + 5 + "px";
                nodeList[i].style.top = selectedTop + 5 + "px";
                var nowWidth = getStyle(nodeList[i]).width;
                var nowHeight = getStyle(nodeList[i]).height;

                console.log(nodeList[i].id + " decreased by 10px, width: " +
                            nowWidth + ", height: " + nowHeight);
                console.log(event);
            }
        }
    }

    function changeColour() {
        var nodeList = document.getElementsByClassName("selected");

        for (var i = 0; i < nodeList.length; i++) {
            switch (true) {
                case (nodeList[i].classList.contains("green")):
                    nodeList[i].classList.remove("green");
                    nodeList[i].classList.add("yellow");
                    console.log(nodeList[i].id + " colour changed from green to yellow");
                    break;
                case (nodeList[i].classList.contains("yellow")):
                    nodeList[i].classList.remove("yellow");
                    nodeList[i].classList.add("red");
                    console.log(nodeList[i].id + " colour changed from yellow to red");
                    break;
                case (nodeList[i].classList.contains("red")):
                    nodeList[i].classList.remove("red");
                    nodeList[i].classList.add("blue");
                    console.log(nodeList[i].id + " colour changed from red to blue");
                    break;
                case (nodeList[i].classList.contains("blue")):
                    nodeList[i].classList.remove("blue");
                    nodeList[i].classList.add("green");
                    console.log(nodeList[i].id + " colour changed from blue to green");
                    break;
            }
        }
    }

    function lowerZ() {
        var nodeList = document.getElementsByClassName("selected");

        for (var i = 0; i < nodeList.length; i++) {
            var node = nodeList[i];
            var nodeZMinus = getStyle(node).zindex - 1;

            node.style.zIndex = nodeZMinus;
            console.log(node.id + " Z-Index lowers to: " + nodeZMinus);
        }
    }

    function higherZ() {
        var nodeList = document.getElementsByClassName("selected");

        for (var i = 0; i < nodeList.length; i++) {
            var node = nodeList[i];
            var nodeZPlus = getStyle(node).zindex + 1;

            node.style.zIndex = nodeZPlus;
            console.log(node.id + " Z-Index lowers to: " + nodeZPlus);
        }
    }

    function deselectBox() {
        var nodeList = document.querySelectorAll("div.selected");

        for (var i = 0; i < nodeList.length; i++) {
            var node = nodeList[i];

            node.classList.remove("selected");
        }
        console.log("Deselected all");
    }

    function selectedBox() {
        var count = 0;
        var nodeList = document.querySelectorAll("div .box");

        for (var i = 0; i < nodeList.length; i++) {
            var node = nodeList[i];

            node.classList.add("selected");
            count++;
        }
        console.log("Selected: " + count);
    }

    function deleteBox(box) {
        var nodeList = document.querySelectorAll(box);

        for (var i = 0; i < nodeList.length; i++) {
            var node = nodeList[i];

            content.removeChild(node);
            console.log("Removed: " + node.id);
        }
    }

    function moveBox(key) {
        var nodeList = document.getElementsByClassName("selected");

        for (var i = 0; i < nodeList.length; i++) {
            var node = nodeList[i];
            var step = 10;
            var contentHeight = getStyle(content).height;
            var contentWidth = getStyle(content).width;
            var nodeWidth = getStyle(node).width;
            var nodeHeight = getStyle(node).height;
            var left = node.offsetLeft;
            var top = node.offsetTop;

            switch (true) {
                case (key == "ArrowUp" && top - step >= 0):
                    event.preventDefault();
                    node.style.top = (top - step) + "px";
                    break;
                case (key == "ArrowDown" && (top + step) <= (contentHeight - nodeHeight)):
                    event.preventDefault();
                    node.style.top = (top + step) + "px";
                    break;
                case (key == "ArrowLeft" && left - step >= 0):
                    node.style.left = (left - step) + "px";
                    break;
                case (key == "ArrowRight" && left + step <= (contentWidth - nodeWidth)):
                    node.style.left = (left + step) + "px";
                    break;
            }
        }
    }

    function makeRandomBox() {
        var rand = makeBox("div #box1");
        var randomBox = document.getElementById(rand);
        var randForm = getRandomInt(1, 2);

        switch (randForm) {
            case (1):
                changeForm(randomBox);
                console.log("Random form: Circle");
                break;
            case (2):
                console.log("Random form: Square");
                break;
        }
        var randGreen = "green";
        var randYellow = "yellow";
        var randRed = "red";
        var randBlue = "blue";
        var randColour = getRandomInt(1, 4);

        switch (true) {
            case (randomBox.classList.contains(randGreen)):
                randomBox.classList.remove(randGreen);
                console.log("Removing colour: " + randGreen);
                break;
            case (randomBox.classList.contains(randYellow)):
                randomBox.classList.remove(randYellow);
                console.log("Removing colour: " + randYellow);
                break;
            case (randomBox.classList.contains(randRed)):
                randomBox.classList.remove(randRed);
                console.log("Removing colour: " + randRed);
                break;
            case (randomBox.classList.contains(randBlue)):
                randomBox.classList.remove(randBlue);
                console.log("Removing colour: " + randBlue);
                break;
        }
        switch (randColour) {
            case (1):
                randomBox.classList.add(randGreen);
                console.log("Random colour: " + randGreen);
                break;
            case (2):
                randomBox.classList.add(randYellow);
                console.log("Random colour: " + randYellow);
                break;
            case (3):
                randomBox.classList.add(randRed);
                console.log("Random colour: " + randRed);
                break;
            case (4):
                randomBox.classList.add(randBlue);
                console.log("Random colour: " + randBlue);
                break;
        }
    }

    function timerAnimation() {
        var nodeList = document.querySelectorAll("div.selected");

        for (var i = 0; i < nodeList.length; i++) {
            var node = nodeList[i];

            node.classList.toggle("circle");
            console.log(node.id + " has changed form");

            switch (true) {
                case (node.classList.contains("green")):
                    node.classList.remove("green");
                    node.classList.add("yellow");
                    console.log(node.id + " colour changed from green to yellow");
                    break;
                case (node.classList.contains("yellow")):
                    node.classList.remove("yellow");
                    node.classList.add("red");
                    console.log(node.id + " colour changed from yellow to red");
                    break;
                case (node.classList.contains("red")):
                    node.classList.remove("red");
                    node.classList.add("blue");
                    console.log(node.id + " colour changed from red to blue");
                    break;
                case (node.classList.contains("blue")):
                    node.classList.remove("blue");
                    node.classList.add("green");
                    console.log(node.id + " colour changed from blue to green");
                    break;
            }
            var nodeWidth = getStyle(node).width;
            var nodeHeight = getStyle(node).height;
            var randomLeft = getRandomInt(0, (getStyle(content).width - nodeWidth));
            var randomTop = getRandomInt(0, (getStyle(content).height - nodeHeight));
            var left = Math.floor(randomLeft / 10) * 10;
            var top = Math.floor(randomTop / 10) * 10;

            node.style.left = left + "px";
            node.style.top = top + "px";
        }
    }

    function multiTimerAnimation() {
        var times = 5;
        var totalTime = 1000;
        var interTime = totalTime / times;
        var animate;
        var count = 1;

        animate = setInterval(function() { animateFunction(); }, interTime);

        function animateFunction() {
            if (count <= times) {
                console.log("Animation " + count);
                timerAnimation();
            } else {
                clearInterval(animate);
            }
            count++;
        }
    }

    function myAction() {
        console.log("Selected boxes will flash for 3 seconds!");
        var times = 20;
        var totalTime = 3000;
        var interTime = totalTime / times;
        var flash;
        var count = 1;

        flash = setInterval(function() { flashFunction(); }, interTime);

        function flashFunction() {
            if (count <= times) {
                var nodeList = document.querySelectorAll("div.selected");

                for (var i = 0; i < nodeList.length; i++) {
                    var node = nodeList[i];

                    console.log("Flash " + count);
                    node.classList.toggle("black");
                }
            } else {
                clearInterval(flash);
            }
            count++;
        }
    }

    window.addEventListener("resize", function() {
        center(box1);
    }, false);

    document.addEventListener("keypress", function(event) {
        var key = event.key;

        if (key === "q") {
            makeBigger();
        }
    });

    document.addEventListener("keypress", function(event) {
        var key = event.key;

        if (key === "w") {
            makeSmaller();
        }
    });

    document.addEventListener("keydown", function(event) {
        var key = event.key;

        if (key === "e") {
            changeForm(false);
        }
    });

    document.addEventListener("keydown", function(event) {
        var key = event.key;

        if (key === "r") {
            changeColour();
        }
    });

    document.addEventListener("keydown", function(event) {
        var key = event.key;

        if (key === "t") {
            makeBox("div.selected");
        }
    });

    document.addEventListener("keydown", function(event) {
        var key = event.key;

        if (key === "a") {
            lowerZ();
        }
    });

    document.addEventListener("keydown", function(event) {
        var key = event.key;

        if (key === "s") {
            higherZ();
        }
    });

    document.addEventListener("keydown", function(event) {
        var key = event.key;

        if (key === "y") {
            deleteBox("div .selected");
        }
    });

    document.addEventListener("keydown", function(event) {
        var key = event.key;

        if (key === "ArrowUp" || key === "ArrowDown" ||
            key == "ArrowLeft" || key == "ArrowRight") {
            moveBox(key);
        }
    });

    document.addEventListener("keydown", function(event) {
        var key = event.key;

        if (key === "u") {
            deselectBox();
        }
    });

    document.addEventListener("keydown", function(event) {
        var key = event.key;

        if (key === "i") {
            selectedBox();
        }
    });

    document.addEventListener("keydown", function(event) {
        var key = event.key;

        if (key === "p") {
            makeRandomBox();
        }
    });

    document.addEventListener("keydown", function(event) {
        var key = event.key;

        if (key === "d") {
            multiTimerAnimation();
        }
    });

    document.addEventListener("keydown", function(event) {
        var key = event.key;

        if (key === "f") {
            myAction();
        }
    });

    console.log("Brower height: " + browserHeight + "px");
    console.log("Brower width: " + browserWidth + "px");
    descSize(content);
    descSize(box1);
    descPos(box1);
    center(box1);
    descPos(box1);
    descSize(box1);
    makeBoxSelectable(box1);
    makeBoxDBClickable(box1);
})();
