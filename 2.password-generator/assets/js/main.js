// Importing all characters for password generation
// import * as chars from "./password-generation-chars"; // instead of this script included on index

// on click generating the passwords
document.querySelector("#generate").addEventListener("click", function () {
  let lengthInput = document.querySelector("#length");
  let length = lengthInput.value;
  length = length === "" ? 15 : length;

  for (let i = 1; i < 3; i++) {
    let psw = "";
    for (let j = 0; j < length; j++) {
      psw += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    document.querySelector("#password-" + i).value = psw;
  }
});

// restricting user to type only from 5 - 15
let input = document.querySelector("#length");
input.addEventListener("input", function (e) {
  let value = parseInt(this.value, 10);
  let min = parseInt(this.min, 10);
  let max = parseInt(this.max, 10);

  if (value < min) {
    this.value = min;
  } else if (value > max) {
    this.value = max;
  }
});

// when copy icon is clicked
let span = document.querySelector(".copy-password-1");
console.log(span);
span.addEventListener("click", function () {
  span.classList.add("active");
  setTimeout(function () {
    span.classList.remove("active");
  }, 1000);
});

// // // //
// // //
// // The code to copy text to clipboard did not work
// Maybe because of the reason that input is disabled

//   ["#password-1", "#password-2"].forEach((field) => {
//     let input = document.querySelector(field);
//     console.log(field);
//     let text = input.value;
//     console.log(text);
//     input.addEventListener("click", function () {
//       // let text = input.value;
//       // console.log(text)

//       // input.select();
//       // input.setSelectionRange(0, 99999); // mobile
//       // document.execCommand("copy");

//       navigator.clipboard.writeText(text).then(() => {
//         input.classList.add("active");
//       });
//     });
//   });
