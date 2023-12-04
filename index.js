const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeleft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitposition;
let currenttime = 60;
let timerID = null;

function randomsquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomsquare = squares[Math.floor(Math.random() * 9)];
  randomsquare.classList.add("mole");

  hitposition = randomsquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitposition) {
      result++;
      score.textContent = result;
      hitposition = null;
    }
  });
});

function movemole() {
  timerID = setInterval(randomsquare, 1000);
}

movemole();

function countdown() {
  currenttime--;
  timeleft.textContent = currenttime;
  if (currenttime == 0) {
    clearInterval(countdownid);
    clearInterval(timerID);
    alert("Game over! your score is" + result);
  }
}

let countdownid = setInterval(countdown, 1000);
