// all the js code here

// adding even listener on load (refresh)
window.addEventListener("DOMContentLoaded", function () {
  renderDiceImages();
});

// get random numbers on pressing enter
window.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    renderDiceImages();
  }
});

// rendering the dice images
function renderDiceImages() {
  let randomNums = getRandomNumArr();
  if (randomNums[0] > randomNums[1]) {
    this.document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
    this.document.querySelector("small").innerHTML = "(Refresh or press Enter)";
  } else if (randomNums[0] < randomNums[1]) {
    this.document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
    this.document.querySelector("small").innerHTML = "(Refresh or press Enter)";
  } else {
    this.document.querySelector("h1").innerHTML = "That was a draw!";
    this.document.querySelector("small").innerHTML = "(Refresh or press Enter)";
  }
  this.setTimeout(function () {
    document
      .querySelector(".img1")
      .setAttribute("src", `./images/dice${randomNums[0]}.png`);
    document
      .querySelector(".img2")
      .setAttribute("src", `./images/dice${randomNums[1]}.png`);
  }, 200);
}

// geting two random numbers
function getRandomNumArr() {
  let nums = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
  ];
  return nums;
}
