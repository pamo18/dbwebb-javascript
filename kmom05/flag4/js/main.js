(function () {
    'use strict';
    /*jshint -W030 */
    window.console.log('Sandbox is ready!');

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
        init: function(country, background, prt1w, prt1h, prt1t, prt1l, prt1bg, prt1br,
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
            part1.style.transition = "visibility 0s, opacity 0.5s linear";
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
            part2.style.transition = "visibility 0s, opacity 0.5s linear";
            country.appendChild(part2);
        },
        reveal: function(show) {
            var back = document.getElementById(this.inner.c);
            var backPart1 = document.getElementById(this.inner.c + " part1");
            var backPart2 = document.getElementById(this.inner.c + " part2");
            var backP = document.getElementById("Country-" + this.inner.c);
            var whichFlag = document.getElementById(this.inner.c + "Back");

            if (show) {
                back.style.backgroundColor = this.inner.ibg;
                backPart1.style.visibility = "visible";
                backPart1.style.opacity = "1";
                backPart2.style.visibility = "visible";
                backPart2.style.opacity = "1";
                backP.innerHTML = this.inner.c;
                whichFlag.style.visibility = "hidden";
                whichFlag.style.opacity = 0;
                whichFlag.style.transition = "visibility 0s, opacity 0.5s linear";
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

    swedishFlag.init("Sweden", "#0f6ba5", 300, 37.5, 81.25, 0,
        "#fdcb2f", "", 37.5, 200, 0, 93.75, "#fdcb2f", "");
    englandFlag.init("England", "#fff", 300, 36, 82, 0,
        "#ca0813", "", 36, 200, 0, 132, "#ca0813", "");
    italienFlag.init("Italy", "#fff", 100, 200, 0, 0,
        "#139149", "", 100, 200, 0, 200, "#cc2e3b", "");
    japanFlag.init("Japan", "#fff", 120, 120, 40, 90, "#ba0831", "50%");

    var flags = [swedishFlag, englandFlag, italienFlag, japanFlag];

    for (var i = 0; i < flags.length; i++) {
        flags[i].draw();
    }

    var sweden = document.getElementById('Sweden');
    var england = document.getElementById('England');
    var italy = document.getElementById('Italy');
    var japan = document.getElementById('Japan');
    var showSE = false;
    var showEN = false;
    var showIT = false;
    var showJA = false;

    sweden.addEventListener("click", function() {
        if (showSE) {
            showSE = false;
            console.log("Hiding flag");
        } else {
            showSE = true;
            console.log("Revealing flag");
        }
        swedishFlag.reveal(showSE);
    });

    england.addEventListener("click", function() {
        if (showEN) {
            showEN = false;
            console.log("Hiding flag");
        } else {
            showEN = true;
            console.log("Revealing flag");
        }
        englandFlag.reveal(showEN);
    });

    italy.addEventListener("click", function() {
        if (showIT) {
            showIT = false;
            console.log("Hiding flag");
        } else {
            showIT = true;
            console.log("Revealing flag");
        }
        italienFlag.reveal(showIT);
    });

    japan.addEventListener("click", function() {
        if (showJA) {
            showJA = false;
            console.log("Hiding flag");
        } else {
            showJA = true;
            console.log("Revealing flag");
        }
        japanFlag.reveal(showJA);
    });
})();
