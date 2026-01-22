// the js code goes here

const buttons = document.querySelectorAll(".set button");
// const keys = [...buttons].map((item) => {
//   return item.textContent;
// });
const sounds = [
  "./sounds/crash.mp3",
  "./sounds/kick-bass.mp3",
  "./sounds/snare.mp3",
  "./sounds/tom-1.mp3",
  "./sounds/tom-2.mp3",
  "./sounds/tom-3.mp3",
  "./sounds/tom-4.mp3",
];
const keysToIndex = {};
buttons.forEach((btn, idx) => {
  keysToIndex[btn.textContent] = idx;
});

// addin sound on pressing key
window.addEventListener("keydown", function (e) {
  if (keysToIndex[e.key] !== undefined) {
    setSound(buttons[keysToIndex[e.key]], keysToIndex[e.key]);
  }
});

// adding click events
buttons.forEach(function (item, index) {
  item.onclick = function () {
    setSound(item, index);
  };
});

// setting sound and pressed css effect
function setSound(item, indexForSound) {
  item.classList.add("pressed");
  setTimeout(() => {
    item.classList.remove("pressed");
  }, 100);
  let sound = new Audio(sounds[indexForSound]);
  sound.play();
}