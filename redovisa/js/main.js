/**
 * A function to wrap it all in.
 */
(function () {
    "use strict";

    var dateAndTime = document.getElementById('date-time');

    if (document.getElementById('js-image')) {
        var jsImage = document.getElementById('js-image');

        jsImage.innerHTML = '<img src="img/js.jpg" alt="JavaScript" class="js-image">';
    }

    function formatDate() {
        var d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.toString().length < 2) {
            day = '0' + day;
        }

        var formattedDay = [year, month, day].join('/');

        return formattedDay;
    }

    var theDate = '<p>'+ formatDate() + '</p>';

    dateAndTime.innerHTML = theDate;

    console.log("All ready.");
}());
