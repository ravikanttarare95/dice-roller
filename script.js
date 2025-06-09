const mainDice = document.getElementById("main-dice");
const gameScore = document.getElementById("score");
const mainContainer = document.querySelector(".main-container");

mainContainer.addEventListener("click", (element) => {
  let target = element.target;
  if (target.classList.contains("red-dice")) {
    chooseDice("red");
  } else if (target.classList.contains("silver-dice")) {
    chooseDice("silver");
  } else if (target.classList.contains("btn-roll")) {
    playGame();
  }
});

function chooseDice(color) {
  mainDice.src = `./images/dice-1-${color}.png`;
  gameScore.innerText = "-";
}

// function chooseRed() {
//   mainDice.src = "./images/dice-1-red.png";
//   gameScore.innerText = "-";
// }

// function chooseSilver() {
//   mainDice.src = "./images/dice-1-silver.png";
//   gameScore.innerText = "-";
// }

function playGame() {
  const mainDice = document.getElementById("main-dice");
  const gameScore = document.getElementById("score");
  mainDice.classList.add("animation");

  const randomNumber = Math.floor(Math.random() * 6) + 1;

  setTimeout(() => {
    mainDice.classList.remove("animation");
    gameScore.innerText = `${randomNumber}`;
  }, 500); // Duration of the animation in milliseconds

  if (mainDice.src.includes("red.png")) {
    mainDice.src = `./images/dice-${randomNumber}-red.png`;

    /* 
      switch (randomNumber) {
        case 1:
          mainDice.src = "./images/dice-1-red.png";
          break;
        case 2:
          mainDice.src = "./images/dice-2-red.png";
          break;
        case 3:
          mainDice.src = "./images/dice-3-red.png";
          break;
        case 4:
          mainDice.src = "./images/dice-4-red.png";
          break;
        case 5:
          mainDice.src = "./images/dice-5-red.png";
          break;
        case 6:
          mainDice.src = "./images/dice-6-red.png";
          break;
      }
    */
  } else if (mainDice.src.includes("silver.png")) {
    mainDice.src = `./images/dice-${randomNumber}-silver.png`;
    /*
      switch (randomNumber) {
        case 1:
          mainDice.src = "./images/dice-1-silver.png";
          break;
        case 2:
          mainDice.src = "./images/dice-2-silver.png";
          break;
        case 3:
          mainDice.src = "./images/dice-3-silver.png";
          break;
        case 4:
          mainDice.src = "./images/dice-4-silver.png";
          break;
        case 5:
          mainDice.src = "./images/dice-5-silver.png";
          break;
        case 6:
          mainDice.src = "./images/dice-6-silver.png";
          break;
      }
    */
  }
}
