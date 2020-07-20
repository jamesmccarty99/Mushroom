// UNIVERSAL JAVASCRIPT FOR THE ENTIRE MUSHROOM SITE ****************

class Inventory {

  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }
}

const locationButton = document.querySelector("#location-button");
const jobButton = document.querySelector(".drop-down");
const wearHouseJob = document.querySelector("#wearhouse-job");
// const searchText = document.querySelector("#searchText").value;
const searchBtn = document.getElementById("search-btn");
const itemQuantityOutput = document.querySelector(".quantity");
let itemCurrQuantity = 1;
const totalCostElement = document.querySelector("#totalCostElement");
const cartPin = document.querySelector(".shopping-cart-num");
let totalCostDollars = 30;
let totalCostCents = 95;
const enokiCostDollars = 30;
const enokiCostCents = 95;

let itemsInCart = false;





console.log(sessionStorage.getItem("itemIcon"));

  console.log(sessionStorage.getItem("itemQualtity"));
  const enokiMushroom = new Inventory("Enoki", 1);
  enokiMushroom.quantity += 1;

  console.log(enokiMushroom);

function popUpError() {
  alert("under construction");
}

function addValue() {


    itemCurrQuantity += 1;
    itemQuantityOutput.innerHTML = `${itemCurrQuantity}`;
    totalCostDollars +=  enokiCostDollars;
    totalCostCents += enokiCostCents;
    totalCostElement.innerHTML = `TOTAL: $${totalCostDollars}.${totalCostCents}`;
    if(totalCostCents >= 99) {
        totalCostCents -= 60;
        totalCostDollars += 1;
    } else {

    }
}

function subtractValue() {

  if(itemCurrQuantity > 1) {
    itemCurrQuantity -= 1;
    itemQuantityOutput.innerHTML = `${itemCurrQuantity}`;
    totalCost -= Math.round(enokiCost * 100) / 100;
    totalCostElement.innerHTML = `TOTAL: $${totalCost}`;
  }
}

function addToCart() {
  sessionStorage.setItem("itemIcon", itemsInCart);
  itemCurrQuantity += 1;
  sessionStorage.setItem("itemQualtity", itemCurrQuantity);
  sessionStorage.getItem("itemQualtity");

  cartPin.style.display = "block";
  itemsInCart = true;
    console.log(sessionStorage.getItem("itemIcon"));

    return sessionStorage.setItem("itemIcon", itemsInCart);
}




function dropDownSideBar() {
locationButton.addEventListener("click", () => {

  if (jobButton.style.display == "none") {
  jobButton.style.display = "list-item";
  locationButton.style.color = "#97BBA2";
  //button.style.color = "black";
}  else {
  jobButton.style.display = "none";
  locationButton.style.color = "black";
}
});

searchBtn.addEventListener("click", (e) => {

  let x = searchText.value;
  alert(x);

  // if(searchText === "wearhouse") {
  //   console.log("worked");
  //   wearHouseJob.style.display = "none";
  // }
});
}
