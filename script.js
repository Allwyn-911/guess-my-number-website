let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector(".score").textContent = score;
document.querySelector(".check").addEventListener("click", function () {
  document.querySelector(".score");
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "😑 No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🥳 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😶‍🌫️ YOU LOST THE GAME !";
    }
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "📈 Too high!";
    if (score > 0) {
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".message").textContent = "start guessing.....🤔";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
  });
});
