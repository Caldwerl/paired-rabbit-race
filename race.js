var rabbit, turtle;
var inputRabbitSpeed, inputRabbitFocus, inputRabbitName, inputTurtleSpeed, inputTurtleFocus, inputTurtleName;
var distraction, rabbitMove, turtleMove, rabbitAction, turtleAction;
var endDistance;
var confirmation;
var turn = 0;
var finishLine = false;



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

  confirmation = confirm("The distance to the goal line is 100 miles. Rabbit and Turtle, are set! Start simulation?");

  //checks for user confirmation
  if (confirmation == true) {

    // if rabbit and turtle are not at finishline, continue to next turn
    while((finishLine == false) && (confirmation == true)) {
      distraction = Math.random() * 10;

      turn += 1;

      confirmation = confirm("Turn " + turn + "\n\n"
        + rabbit.movement(distraction)
        + "\n\n"
        + turtle.movement(distraction) + "\n\nContinue?")

      //finish game if rabbit crosses the finishLine
      if (rabbit.currentMiles >= endDistance) {
        alert(rabbit.name + " won!");
        finishLine = true;
      }

      //finish game if turtle crosses the finishline.
      else if (turtle.currentMiles >= endDistance) {
        alert(turtle.name + " won!");
        finishLine = true;
      };
    };
  }
  else {
    alert("Goodbye!")
  }
}


