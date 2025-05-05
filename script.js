const mainDice = document.getElementById("main-dice");
const gameScore=document.getElementById("score");
function playGame() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  switch (randomNumber) {
    case 1:
      mainDice.src = "./images/dice-1-red.png";
      gameScore.innerText = "1";
      break;
    case 2:
      mainDice.src = "./images/dice-2-red.png";
      gameScore.innerText = "2";
      break;
    case 3:
      mainDice.src = "./images/dice-3-red.png";
      gameScore.innerText = "3";
      break;
    case 4:
      mainDice.src = "./images/dice-4-red.png";
      gameScore.innerText = "4";
      break;
    case 5:
      mainDice.src = "./images/dice-5-red.png";
      gameScore.innerText = "5";
      break;
    case 6:
      mainDice.src = "./images/dice-6-red.png";
      gameScore.innerText = "6";
      break;
  }
}
