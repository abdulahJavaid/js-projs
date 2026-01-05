// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

// DOM Elements
const btnConvert = document.querySelector("#convert");
const figure = document.querySelector("#figure");
const lengthEl = document.getElementById("length-data");
const volumeEL = document.getElementById("volume-data");
const massEl = document.getElementById("mass-data");
const numUp = document.querySelector(".num-up");
const numDown = document.querySelector(".num-down");

// click event on button
btnConvert.addEventListener("click", function () {
  renderData(figure.value);
});

figure.addEventListener("focus", function () {
  document.addEventListener("keydown", function (e) {
    if ((e.key === "Enter")) {
      renderData(figure.value);
    }
  });
});

numDown.addEventListener("click", function () {
  const valueNum = Number(figure.value);
  const figuremMin = figure.min;
  let assign = 0;
  if (valueNum === "" || valueNum <= 0) {
    figure.value = assign;
  } else {
    figure.value = valueNum-1;
  }
});

numUp.addEventListener("click", function () {
  const valueNum = Number(figure.value);
  const figuremMin = figure.min;
  let assign = 0;
  if (valueNum === "" || valueNum < 0) {
    figure.value = assign;
  } else {
    figure.value = valueNum+1;
  }
});

// fucntion to render the conversions
function renderData(value) {
  // if the value is flse
  value = (value)? value: 0;
  // the conversions
  const mToFt = (value * 3.281).toFixed(2);
  const ftToM = (value / 3.281).toFixed(2);
  const ltrToGal = (value * 0.264).toFixed(2);
  const galToLtr = (value / 0.264).toFixed(2);
  const kgToLb = (value * 2.204).toFixed(2);
  const lbToKg = (value / 2.204).toFixed(2);

  // data to render
  let textLength = `${value} meters = ${mToFt} feet | ${value} feet = ${ftToM} meters`;
  let textVolume = `${value} liters = ${ltrToGal} gallons | ${value} gallons = ${galToLtr} liters`;
  let textMass = `${value} kilos = ${kgToLb} pounds | ${value} pounds = ${lbToKg} kilos`;

  // rendering data
  lengthEl.textContent = textLength;
  volumeEL.textContent = textVolume;
  massEl.textContent = textMass;
}
