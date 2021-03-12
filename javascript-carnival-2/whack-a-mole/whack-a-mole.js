  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //


//create variable and store cell reference in it.
var cellRef = document.getElementsByTagName("td");
var len = cellRef.length;
let score = 0;
let timer = 0;
let timeLimit = 10;
document.getElementById("score").innerHTML = "Score: " + score;
document.getElementById("start-btn").addEventListener("click", startGame)

//create a function to select random cells
function random() {
  num = Math.floor(Math.random() * len);
  console.log(num);
  return num;
}
//create a function to put mole into a cell.
function display_mole() {
  var mole = document.createElement("img");
  mole.src = "./images/mole1.png";
  mole.id = "mole";
  mole.style.padding = "10px";
  cellRef[random()].append(mole);
  document.getElementById("mole").addEventListener("click", whackedMole);
}
function whackedMole() {
  playSound();
  this.remove();
  display_mole();
  counter();
}
function playSound() {
  var sound = document.createElement("audio");
  sound.src = "./whack-audio.wav";
  sound.play();
  return;
}
//count the score
function counter() {
  score++;
  document.getElementById("score").innerHTML = "Score: " + score;
}
//set the timer 
function countdown() {
  var secs = 15;
  function tick() {
    var counter = document.getElementById("counter");
    secs--;
    counter.innerHTML = "0:" + (secs < 10 ? "0" : "") + String(secs);
    if (secs >= 0) {
      setTimeout(tick, 1000);
    } else {
      alert(`Game Over 
      You have whacked ${score} moles.`);
      document.location.href = "";
    }
  }
  tick();
}
//start the game 
function startGame() {
  display_mole();
  countdown()
}