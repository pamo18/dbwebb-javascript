(function () {
    'use strict';
    window.console.log('Sandbox is ready!');
    var sweden = document.getElementById('sweden');
    var italy = document.getElementById('italy');
    var england = document.getElementById('england');
    var japan = document.getElementById('japan');
    var flag = document.getElementById('flag');
    var swedenFlag = '<div class="sweden"><div class="part1"></div>'+
                     '<div class="part2"></div></div><p>Sweden</p>';
    var italyFlag = '<div class="italy"><div class="part1"></div>'+
                    '<div class="part2"></div></div><p>Italy</p>';
    var englandFlag = '<div class="england"><div class="part1"></div>'+
                      '<div class="part2"></div></div><p>England</p>';
    var japanFlag = '<div class="japan"><div class="part1"></div>'+
                    '<div class="part2"></div></div><p>Japan</p>';

    function drawFlag(countryFlag) {
        flag.innerHTML = countryFlag;
    }

    function hideFlag() {
        flag.style.display = "none";
    }

    function showFlag() {
        flag.style.display = "inline-block";
    }

    sweden.addEventListener("click", function() {
        drawFlag(swedenFlag);
        showFlag();
        console.log("Drawing Sweden flag");
    });

    italy.addEventListener("click", function() {
        drawFlag(italyFlag);
        showFlag();
        console.log("Drawing Italy flag");
    });

    england.addEventListener("click", function() {
        drawFlag(englandFlag);
        showFlag();
        console.log("Drawing England flag");
    });

    japan.addEventListener("click", function() {
        drawFlag(japanFlag);
        showFlag();
        console.log("Drawing Japan flag");
    });

    flag.addEventListener("click", function() {
        hideFlag();
        console.log("Hiding flag");
    });
})();
