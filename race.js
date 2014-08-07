var rabbit, turtle;
var inputRabbitSpeed, inputRabbitFocus, inputRabbitName, inputTurtleSpeed, inputTurtleFocus, inputTurtleName;
var distraction, rabbitMove, turtleMove, rabbitAction, turtleAction;
var endDistance;
var turn = 0;
var finishLine = false;
var mainDisplay;
var messageString;



function Animal(name, speed, focus) {
  this.name = name;
  this.speed = speed;
  this.focus = focus;
  this.currentMiles = 0;

  this.movement = function(distraction) {
    if (distraction > this.focus) {
      return(this.name + " was distracted and did not moved 0 miles for a total of " + this.currentMiles + " miles.");
    }
    else {
      this.currentMiles += this.speed;
      return(this.name + " moved " + this.speed + " miles for a total of " + this.currentMiles + " miles.");
    }
  }
}

// ==== Hard coded values, comment out if using user input ======
//rabbit = new Animal("rabbit", 6, 4);
//turtle = new Animal("turtle", 3, 9);

var racerInput = function() {
  // =========User Input of rabbit and turtle's attributes ==========
  endDistance = document.getElementById('distance').value;
  inputRabbitName = document.getElementById('quadOneName').value;
  inputRabbitSpeed = document.getElementById('quadOneSpeed').value;
  inputRabbitFocus = document.getElementById('quadOneFocus').value;
  inputTurtleName = document.getElementById('quadTwoName').value;
  inputTurtleSpeed = document.getElementById('quadTwoSpeed').value;
  inputTurtleFocus = document.getElementById('quadTwoFocus').value;
  rabbit = new Animal(inputRabbitName, parseInt(inputRabbitSpeed), parseInt(inputRabbitFocus));
  turtle = new Animal(inputTurtleName, parseInt(inputTurtleSpeed), parseInt(inputTurtleFocus));
}

var startGame = function() {

  racerInput();

  mainDisplay = document.getElementById('mainDisplay');

  messageString = ("The distance to the goal line is " + endDistance + " miles. <br>" + rabbit.name + " and " + turtle.name + ", are set!<br> Start simulation?");

  mainDisplay.innerHTML = "<p>" + messageString + "</p> <br> <button type=button onClick='runRace();'>Start</button>";

}

var updateDisplay = function (displayString) {

  mainDisplay.innerHTML = displayString;
}

var runRace = function() {

  // if rabbit and turtle are not at finishline, continue to next turn
  while((finishLine == false)) {
    distraction = Math.random() * 10;

    turn += 1;

    /*messageString = ("<p>Turn " + turn + "<br><br>"
      + rabbit.movement(distraction)
      + "<br><br>"
      + turtle.movement(distraction) + "</p>");*/

    //finish game if rabbit crosses the finishLine
    if (rabbit.currentMiles >= endDistance) {
      messageString = "<p>" + rabbit.name + " won!</p>";
      finishLine = true;
    }

    //finish game if turtle crosses the finishline.
    else if (turtle.currentMiles >= endDistance) {
      messageString = "<p>" + turtle.name + " won!</p>";
      finishLine = true;
    }
    else {
      messageString = ("<p>Turn " + turn + "<br><br>"
      + rabbit.movement(distraction)
      + "<br><br>"
      + turtle.movement(distraction) + "</p>");
    }

    setTimeout(updateDisplay(messageString), 3000);

  };


}
