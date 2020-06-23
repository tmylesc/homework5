$(document).ready(function() {
    //Displays current day and time on currentDay id line
    $("#currentDay").text(moment().format("dddd MMMM Do h:mm a"));

    //Loads local storage for hour details
    $(".hourRow .hourDetails").each(function() {
        var time = $(this).parent().attr("value");
        $(this).val(localStorage.getItem(time));
    });

    //On click for save button to save info to local storage
    $(".saveBtn").on("click", function () {
        var time = $(this).parent().attr("value");
        var details = $(this).siblings(".hourDetails").val();
        localStorage.setItem(time, details);
    });

    //Shows if hour is past present or future
    function timeTracker() {
        var currentTime = moment().hour();

        $(".hourRow").each(function() {
            var hourRow = $(this).attr("value");

            console.log($(this).attr("value"), currentTime);

            if (hourRow < currentTime) {
                $(this).children(".hourDetails").css("background-color", "lightgray");
            }

            else if (hourRow === currentTime) {
                $(this).children(".hourDetails").css("background-color", "lightcoral");
 
            }

            else if (hourRow > currentTime) {
                $(this).children(".hourDetails").css("background-color", "lightgreen");
            }



        })
    }

    timeTracker();

});