var buttonColor = ["red", "blue", "green", "yellow" ];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;


function startOver(){
    gamePattern = [];
    started = false;
    level = 0;
}

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
 })

$(".btn").click(function(){


    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    makeSounds(userChosenColor)
    animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length-1);


 })

 function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){

        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

     $("body").addClass("game-over");
     $("h1").text("game-over press any other key to restart the game")
    
     var audio = new Audio("sounds/wrong.mp3")
     audio.play();


     setTimeout(function(){
        $("body").removeClass("game-over")
     }, 200)

     startOver();
    }

   
}

function nextSequence(){
    userClickedPattern = [];

    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);

var randomChoosenColor = buttonColor[randomNumber];

gamePattern.push(randomChoosenColor);

$("#"+ randomChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      makeSounds(randomChoosenColor)
    
}

 


function makeSounds(name){

    var audio = new Audio("sounds/" + name + ".mp3")
        audio.play();
      
 }

 function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");

    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
 }

 

 