// the game logic goes in this file
// the jQuery code

let gamePattern = [];
let userClickedPattern = [];
let gameColors = ["red", "blue", "green", "yellow"];
// game level displayed on the screen will be gameLevel+1
let gameLevel = null;
let randomNum;
let randomChosenColor;
// var to control debounce
let timer;

// checking for first keypress
$(window).on("keypress", function () {
  if (gameLevel === null) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      nextSequence();
    }, 500);
  }
});

// adding click event
gameColors.forEach(function (element) {
  $(`#${element}`).on("click", function () {
    if (gameLevel !== null) {
      // adding animation
      animatePress($(this));
      // playing audio
      let userChosenColor = $(this).attr("id");
      userClickedPattern.push(userChosenColor);
      verifyPattern(userChosenColor);
    }
  });
});

// to play the sound
function playSound(name) {
  const audio = new Audio(`./sounds/${name}.mp3`);
  audio.play();
}

// to animate the pressed button
function animatePress(name) {
  $(name).fadeOut(100).fadeIn(100).addClass("pressed");
  // removing the pressed class
  setTimeout(() => {
    $(name).removeClass("pressed");
  }, 100);
}

// to generate random number to select a color for sequence
function nextSequence() {
  gameLevel = gameLevel === null ? 0 : ++gameLevel;
  $(`#level-title`).text(`Level ${gameLevel + 1}`);

  randomNum = Math.floor(Math.random() * 4);
  randomChosenColor = gameColors[randomNum];
  gamePattern.push(randomChosenColor);

  playSound(`${randomChosenColor}`);
  animatePress(`#${randomChosenColor}`);
}

// check if the user guess is right
function verifyPattern(userChosenColor) {
  let currentChechk = userClickedPattern.length - 1;
  let correctOption =
    userClickedPattern[currentChechk] === gamePattern[currentChechk];
  let lastChoice = userClickedPattern.length === gamePattern.length;

  if (correctOption && lastChoice) {
    userClickedPattern = [];
    playSound(userChosenColor);
    setTimeout(function () {
      nextSequence();
    }, 1000);
  } else if (correctOption && !lastChoice) {
    playSound(userChosenColor);
  } else {
    userClickedPattern = [];
    gamePattern = [];
    gameLevel = null;
    $(`body`).addClass(`game-over`);
    setTimeout(function () {
      $(`body`).removeClass(`game-over`);
    }, 100);
    $(`#level-title`).text(`Game Over, Press Any Key to Restart`);
    playSound(`wrong`);
  }
}
