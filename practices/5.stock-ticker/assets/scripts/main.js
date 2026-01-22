// main file for js scripts

// importing data
import { getStockData } from "./fakeStockApi.js";

class Checks {
  static price = 0;
//   static ticker = "green";
}

// code can be modified a little

renderStockTicker();

setInterval(function () {
  renderStockTicker();
}, 1500);

// function to render stock data
function renderStockTicker() {
  let returned = getStockData();

  const stockName = document.querySelector("#stock-name");
  const stockSymbol = document.querySelector("#stock-symbol");
  const stockPrice = document.querySelector("#stock-price");
  const stockTime = document.querySelector("#stock-time");

  stockName.textContent = "Name: " + returned.name;
  stockSymbol.textContent = "Symbol: " + returned.sym;
  stockPrice.textContent = "Price: " + returned.price;
  stockTime.textContent = "Time: " + returned.time;

  if (Checks.price < returned.price) {
    // Checks.ticker = "green";
    stockPrice.classList.add("green");
    stockPrice.classList.remove("grey");
    stockPrice.classList.remove("red");
    Checks.price = returned.price;
  } else if (Checks.price > returned.price) {
    // Checks.ticker = "red";
    stockPrice.classList.remove("green");
    stockPrice.classList.remove("grey");
    stockPrice.classList.add("red");
    Checks.price = returned.price;
  } else {
    // Checks.ticker = "grey";
    stockPrice.classList.remove("green");
    stockPrice.classList.add("grey");
    stockPrice.classList.remove("red");
    Checks.price = returned.price;
  }

}