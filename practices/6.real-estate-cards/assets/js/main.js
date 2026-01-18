// the main js scripts

import { placeholderPropertyObj as placeholder } from "./properties/placeholderPropertiesObj.js";
import { propertyForSaleArr as propertySale } from "./properties/propertyForSaleArr.js";

// rendering properties that are for sale
function renderPropertiesForSale(propertiesForSale = [placeholder]) {

  return propertiesForSale.map((item) => {
      let { propertyLocation, priceGBP, roomsM2, comment, image } = item;
      let roomsArea = 0;
      roomsArea = roomsM2.reduce((counter, item) => {
        return counter += Number(item);
      }, 0);

      return `
            <section class="card">
                <img src="./media/card-images/${image}" alt="Property image">
                <div class="card-right">
                    <h2>${propertyLocation}</h2>
                    <h3>£ ${priceGBP}</h3>
                    <p>${comment}</p>
                    <h3>${roomsArea} m&sup2;</h3>
                </div>
            </section>
        `;
    }).join("");
}

// adding the rendered data to the body
document.getElementById("main").innerHTML = renderPropertiesForSale(propertySale);