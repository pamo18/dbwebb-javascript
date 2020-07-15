(function () {
    'use strict';

    var myContent = document.getElementById('content');

    function formatDateTime() {
        var d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = d.getDate(),
            year = d.getFullYear(),
            hour = d.getHours(),
            minute = d.getMinutes(),
            second = d.getSeconds();

        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.toString().length < 2) {
            day = '0' + day;
        }
        if (minute.toString().length < 2) {
            minute = '0' + minute;
        }
        if (second.toString().length < 2) {
            second = '0' + second;
        }

        var formattedDay = [year, month, day].join('/');

        var formattedTime = [hour, minute, second].join(':');

        return formattedDay +  '<br>' + formattedTime;
    }
    var formattedDateTime = formatDateTime();

    var header = '<h3>Date & Time</h3>';

    var theDate = '<div class="date"><p>'+ formattedDateTime + '</p></div>';

    myContent.innerHTML = header + theDate;
    window.console.log('Sandbox is ready!');
})();
