var rabbit, turtle;
var inputRabbitSpeed, inputRabbitFocus, inputRabbitName;
var inputTurtleSpeed, inputTurtleFocus, inputTurtleName;

var distraction;
var endDistance;
var turn = 0;
var finishLine = false;

var mainDisplay;
var messageString;
var trackLayout;



function Animal(name, speed, focus) {
  this.name = name;
  this.speed = speed;
  this.focus = focus;
  this.currentMiles = 0;

  this.movement = function(distraction) {
    if (distraction > this.focus) {
      return(this.name + " was distracted and moved 0 miles for a total of "
        + this.currentMiles + " miles.");
    }
    else {
      this.currentMiles += this.speed;
      return(this.name + " moved " + this.speed + " miles for a total of "
      + this.currentMiles + " miles.");
    }
  }
}

var racerInput = function() {
  // =========User Input of rabbit and turtle's attributes ==========
  endDistance = document.getElementById('distance').value;
  inputRabbitName = document.getElementById('quadOneName').value;
  inputRabbitSpeed = document.getElementById('quadOneSpeed').value;
  inputRabbitFocus = document.getElementById('quadOneFocus').value;
  inputTurtleName = document.getElementById('quadTwoName').value;
  inputTurtleSpeed = document.getElementById('quadTwoSpeed').value;
  inputTurtleFocus = document.getElementById('quadTwoFocus').value;
  rabbit = new Animal(inputRabbitName, parseInt(inputRabbitSpeed),
    parseInt(inputRabbitFocus));
  turtle = new Animal(inputTurtleName, parseInt(inputTurtleSpeed),
    parseInt(inputTurtleFocus));
}

var startGame = function() {

  racerInput();

  mainDisplay = document.getElementById('mainDisplay');

  setTrackLayout();

  messageString = ("The distance to the goal line is " + endDistance
    + " miles. <br>" + rabbit.name + " and " + turtle.name
    + ", are set!<br> Start simulation?");

  mainDisplay.innerHTML = trackLayout + "<p>" + messageString
    + "</p> <br> <button type=button onClick='runRace();'>Start</button>";

}

var updateDisplay = function (displayString) {

  mainDisplay.innerHTML = displayString;
}

var setTrackLayout = function () {

  trackLayout ="<div style='width:600px'>"
    + "<div style='border: 1px solid black'>"
    + "<img src='rabbit.jpg' style='margin-left:"
    + Math.floor((rabbit.currentMiles / endDistance) * 100) + "%'"
    + " height='150' width='150' /></div>"
    + "<div style='border: 1px solid black; border-top: none'>"
    + "<img src='turtle.jpg' style='margin-left:"
    + Math.floor((turtle.currentMiles / endDistance) * 100) + "%'"
    + " height='150' width='150' /></div></div><br>";
}

var runRace = function () {

  distraction = Math.random() * 10;

  turn ++;

  //finish game if rabbit crosses the finishLine
  if (rabbit.currentMiles >= endDistance &&
      turtle.currentMiles >= endDistance) {

    trackLayout = "<img src='rabbit.jpg' /><img src='turtle.jpg' />";

    messageString = "<p>" + rabbit.name + " and " + turtle.name
      + " have tied!</p>";

    finishLine = true;

  }
  //finish game if rabbit crosses the finishLine
  else if (rabbit.currentMiles >= endDistance) {

    trackLayout = "<img src='rabbit.jpg' />";

    messageString = "<p>" + rabbit.name + " won!</p>";

    finishLine = true;
  }
  //finish game if turtle crosses the finishline.
  else if (turtle.currentMiles >= endDistance) {

    trackLayout = "<img src='turtle.jpg' />";

    messageString = "<p>" + turtle.name + " won!</p>";

    finishLine = true;
  }
  else {

    setTrackLayout();

    messageString = ("<p>Turn " + turn + "<br><br>"
      + rabbit.movement(distraction)
      + "<br><br>"
      + turtle.movement(distraction)
      + "<br><button type=button onClick='runRace();'>Continue</button></p>");
  }

  updateDisplay(trackLayout + messageString);
}
