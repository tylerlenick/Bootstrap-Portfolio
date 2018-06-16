//globat variables

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var rightAnswers = []
var timer; 
var timerRunning = false;


//Declare questions object



//Declare functions

function onSubmit() {
    alert("its working");
}

function timerStart() {

    if (!timerRunning) {
        
        intervalID = setInterval(countDown, 1000);
        timerRunning = true;

    }

}

function timerStop() {
    timerRunning = false;
    clearInterval(intervalID);
}


function countDown() {
    $("#timer").text(timer);
    timer--;


    if (timer === 0) {

        unanswered++;
        stop();

    }
}



//Declare on click events

$(".new-game").on("click", function() {

    alert("it works");
    $("#txt-area").show();




}