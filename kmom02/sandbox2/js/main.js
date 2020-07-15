(function () {
    'use strict';

    var smiley = document.getElementById('smiley');

    document.addEventListener("keydown", function(event) {
        var contentHeight = document.getElementById('content').clientHeight;
        var contentWidth = document.getElementById('content').clientWidth;
        var smileyHeight = document.getElementById('smiley').clientHeight;
        var smileyWidth = document.getElementById('smiley').clientWidth;
        var key = event.key;
        var left = smiley.offsetLeft;
        var top = smiley.offsetTop;
        var step = 10;

        switch (true) {
            case (key == "ArrowUp" && top - step >= 0):
                event.preventDefault();
                smiley.style.top = (top - step) + "px";
                break;
            case (key == "ArrowDown" && (top + step) <= (contentHeight - smileyHeight)):
                event.preventDefault();
                smiley.style.top = (top + step) + "px";
                break;
            case (key == "ArrowLeft" && left - step >= 0):
                smiley.style.left = (left - step) + "px";
                break;
            case (key == "ArrowRight" && left + step <= (contentWidth - smileyWidth)):
                smiley.style.left = (left + step) + "px";
                break;
        }
    });
    window.console.log('Sandbox is ready!');
})();
