// stock data for the company
export function getStockData() {
    let getPrice = (Math.random()*3).toFixed(2);
    let getTime = new Date().toLocaleTimeString("en-GB", {12: true});

  return {
    name: "QtechAI",
    sym: "QTA",
    price: getPrice,
    time: getTime,
  };
}

