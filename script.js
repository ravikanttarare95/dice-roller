const mainDice = document.getElementById("main-dice");
const gameScore = document.getElementById("score");
const btnRoll = document.querySelector(".btn-roll");
const redDice = document.querySelector(".red-dice");
const silverDice = document.querySelector(".silver-dice");

const mainContainer = document.querySelector(".main-container");

mainContainer.addEventListener("click", (element) => {
  let target = element.target;
  if (target.classList.contains("red-dice")) {
    chooseRed();
  } else if (target.classList.contains("silver-dice")) {
    chooseSilver();
  } else if (target.classList.contains("btn-roll")) {
    playGame();
  }
});

function chooseRed() {
  mainDice.src = "./images/dice-1-red.png";
  gameScore.innerText = "-";
}

function chooseSilver() {
  mainDice.src = "./images/dice-1-silver.png";
  gameScore.innerText = "-";
}

function playGame() {
  const mainDice = document.getElementById("main-dice");
  const gameScore = document.getElementById("score");
  mainDice.classList.add("animation");

  setTimeout(() => {
    mainDice.classList.remove("animation");
  }, 500); // Duration of the animation in milliseconds

  const randomNumber = Math.floor(Math.random() * 6) + 1;
  if (mainDice.src.includes("red.png")) {
    switch (randomNumber) {
      case 1:
        mainDice.src = "./images/dice-1-red.png";
        setTimeout(() => {
          gameScore.innerText = "1";
        }, 500);
        //   gameScore.innerText = "1";
        break;
      case 2:
        mainDice.src = "./images/dice-2-red.png";
        //   gameScore.innerText = "2";
        setTimeout(() => {
          gameScore.innerText = "2";
        }, 500);
        break;
      case 3:
        mainDice.src = "./images/dice-3-red.png";
        //   gameScore.innerText = "3";
        setTimeout(() => {
          gameScore.innerText = "3";
        }, 500);
        break;
      case 4:
        mainDice.src = "./images/dice-4-red.png";
        //   gameScore.innerText = "4";
        setTimeout(() => {
          gameScore.innerText = "4";
        }, 500);
        break;
      case 5:
        mainDice.src = "./images/dice-5-red.png";
        //   gameScore.innerText = "5";
        setTimeout(() => {
          gameScore.innerText = "5";
        }, 500);
        break;
      case 6:
        mainDice.src = "./images/dice-6-red.png";
        //   gameScore.innerText = "6";
        setTimeout(() => {
          gameScore.innerText = "6";
        }, 500);
        break;
    }
  } else if (mainDice.src.includes("silver.png")) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        mainDice.src = "./images/dice-1-silver.png";
        setTimeout(() => {
          gameScore.innerText = "1";
        }, 500);
        //   gameScore.innerText = "1";
        break;
      case 2:
        mainDice.src = "./images/dice-2-silver.png";
        //   gameScore.innerText = "2";
        setTimeout(() => {
          gameScore.innerText = "2";
        }, 500);
        break;
      case 3:
        mainDice.src = "./images/dice-3-silver.png";
        //   gameScore.innerText = "3";
        setTimeout(() => {
          gameScore.innerText = "3";
        }, 500);
        break;
      case 4:
        mainDice.src = "./images/dice-4-silver.png";
        //   gameScore.innerText = "4";
        setTimeout(() => {
          gameScore.innerText = "4";
        }, 500);
        break;
      case 5:
        mainDice.src = "./images/dice-5-silver.png";
        //   gameScore.innerText = "5";
        setTimeout(() => {
          gameScore.innerText = "5";
        }, 500);
        break;
      case 6:
        mainDice.src = "./images/dice-6-silver.png";
        //   gameScore.innerText = "6";
        setTimeout(() => {
          gameScore.innerText = "6";
        }, 500);
        break;
    }
  }
}
