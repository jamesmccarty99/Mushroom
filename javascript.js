// UNIVERSAL JAVASCRIPT FOR THE ENTIRE MUSHROOM SITE ****************

//GLOBAL CART STATS
let itemStats = {
    itemQuantity: parseInt(localStorage.getItem("itemStats-itemQuantity")),
    cartOn: false,
    enokiInCart: parseInt(localStorage.getItem("itemStats-enokiInCart")),
};

//SETTING VALUES
localStorage.setItem("itemStats-itemQuantity", itemStats.itemQuantity);
localStorage.setItem("itemStats-enokiInCart", itemStats.enokiInCart);
let getQuantity = parseInt(localStorage.getItem("itemStats-itemQuantity"));
let getEnokiInCart = parseInt(localStorage.getItem("itemStats-enokiInCart"));
itemStats.itemQuantity = getQuantity;
enokiInCart = getEnokiInCart;
// console.log("itemStats.itemQuantity " + itemStats.itemQuantity);

//VARIABLES
const enokiQuantity = document.querySelector("#enokiQuantity");
const shitakeQuantity = document.querySelector("#shitakeQuantity");
const totalCostElement = document.querySelector("#totalCostElement");
const cartPin = document.querySelector(".shopping-cart-num");
let totalCostDollars = 0;
let totalCostCents = 0;
const enokiCostDollars = 30;
const enokiCostCents = 95;
const mushrooms = {
    enoki: localStorage.getItem("enoki"),
    shitake: localStorage.getItem("shitake")
};
const enokiDiv = document.querySelector(".checkout-enoki");
const shitakeDiv = document.querySelector(".checkout-shitake");
let mainContent = document.querySelector(".wrap");
let mobilePopUp = document.querySelector(".mobile-pop-up");

checkCart(0);
checkCart(1);
checkCheckout();
update();

//UPDATES AND CHECKING localStorage

    function update() {

      // getQuantity += getEnokiInCart;

      if(enokiQuantity !== null) {
      enokiQuantity.innerHTML = getQuantity;
    }

    if(shitakeQuantity !== null) {
    shitakeQuantity.innerHTML = getQuantity;
    }
    }

    function checkCheckout() {
          if(enokiDiv !== null) {
          if(mushrooms.enoki === "true") {
            enokiDiv.style.display = "block";
          } else {
            enokiDiv.style.display = "none";
          }
        }

        if(getQuantity === 0) {
          mushrooms.enoki = "false";
          mushrooms.enoki = localStorage.getItem("enoki");
        }

        }

    function checkCart() {

    localStorage.getItem("itemStats-itemQuantity");
    localStorage.getItem("itemStats-enokiInCart");
    getIcon();
    return [localStorage.setItem("itemStats-itemQuantity", getQuantity), localStorage.setItem("itemStats-enokiInCart", getEnokiInCart)];
    }



function getIcon() {
  if(getQuantity === 0) {
      cartPin.style.display = "none";
      mushrooms.enoki = localStorage.getItem("enoki");
        mushrooms.enoki = "false";
        if(enokiDiv !== null) {
         enokiDiv.style.display = "none";
         totalCostDollars = 0;
         totalCostCents = 0;
         totalCostElement.innerHTML = `TOTAL: $${totalCostDollars}.${totalCostCents}0`;
       }
       if (shitakeDiv !== null) {
         shitakeDiv.style.display = "none";
         totalCostDollars = 0;
         totalCostCents = 0;
         totalCostElement.innerHTML = `TOTAL: $${totalCostDollars}.${totalCostCents}0`;
       }

  } else if(getQuantity === 1) {
    cartPin.src="icons/one.png";
      cartPin.style.display = "block";
        if(totalCostElement !== null) {
      totalCostDollars = enokiCostDollars;
      totalCostCents = enokiCostCents;
        ifNumbBigger();
      totalCostElement.innerHTML = `TOTAL: $${totalCostDollars}.${totalCostCents}`;
    }
    } else if (getQuantity === 2) {
      cartPin.src="icons/two.png";
      cartPin.style.display = "block";
      if(totalCostElement !== null) {
      totalCostDollars = enokiCostDollars * getQuantity;
      totalCostCents = enokiCostCents * getQuantity;
        ifNumbBigger();
      totalCostElement.innerHTML = `TOTAL: $${totalCostDollars}.${totalCostCents}`;
    }
    }  else if (getQuantity === 3) {
      cartPin.src="icons/three.png";
      cartPin.style.display = "block";
      if(totalCostElement !== null) {
      totalCostDollars = enokiCostDollars * getQuantity;
      totalCostCents = enokiCostCents * getQuantity;
        ifNumbBigger();
      console.log("CENTS" + totalCostCents);
      totalCostElement.innerHTML = `TOTAL: $${totalCostDollars}.${totalCostCents}`;
    }
  }  else if(getQuantity < 0) {
      getQuantity = 0;
  } else {
    alert("cart is at max capacity");
    getQuantity = 3;
  }
}

function ifNumbBigger() {
  if (totalCostCents >= 200) {
    totalCostCents -= 200;
    totalCostDollars += 2;
  }
  if(totalCostCents >= 100) {
      totalCostCents -= 100;
      totalCostDollars += 1;
  }
}

function mathProbs() {
  if(enokiCostCents >= 100) {
    enokiCostDollars += 1;
    enokiCostCents = 0;
  }
}

function underConstruction() {
  alert("Sorry page under construction. Can not add items.");
}


//ADDING ITEMS TO CART

function addToCart() {
  if(getQuantity < 3) {
          console.log("lshjhdjgh");
  getQuantity += 1;
  itemStats.itemQuantity = getQuantity;
  // console.log(itemStats.itemQuantity);
  getIcon();
  return localStorage.setItem("itemStats-itemQuantity", getQuantity);
}
}

// function addEnoki() {
//     getEnokiInCart += 1;
//   itemStats.enokiInCart = getEnokiInCart;
//   console.log(itemStats.enokiInCart);
//   getIcon();
//   localStorage.setItem("itemStats-enokiInCart", getEnokiInCart);
//   console.log("ENOKI: " + getEnokiInCart);
//   return  getQuantity += getEnokiInCart;
//   }


function removeItems() {
if (getQuantity >= 0) {
  if(getQuantity > 0) {
  getQuantity = 0;
  enokiQuantity.innerHTML = `${getQuantity}`;
}
console.log(getQuantity);
getIcon();
}
return [localStorage.setItem("itemStats-itemQuantity", getQuantity), localStorage.setItem("enoki", mushrooms.enoki)];
}





function addEnokiNum() {
  if(getQuantity < 3) {
    getQuantity += 1;
    enokiQuantity.innerHTML = `${getQuantity}`;
    getIcon();
    totalCostElement.innerHTML = `TOTAL: $${totalCostDollars}.${totalCostCents}`;
    itemStats.itemQuantity = getQuantity;
    console.log(itemStats.itemQuantity);
    return localStorage.setItem("itemStats-itemQuantity", getQuantity);
  }
  }

  function addShitakeNum() {
    if(getQuantity < 3) {
      if(getQuantity < 0) {
        getQuantity = 0;
      }
      getQuantity += 1;
      shitakeQuantity.innerHTML = `${getQuantity}`;
      getIcon();
      totalCostElement.innerHTML = `TOTAL: $${totalCostDollars}.${totalCostCents}`;
      itemStats.itemQuantity = getQuantity;
      console.log(itemStats.itemQuantity);
      return localStorage.setItem("itemStats-itemQuantity", getQuantity);
    }
    }

//REMOVE ITEMS FROM CART

function removeEnokiNum() {
if(getQuantity < 4) {
  getQuantity -= 1;
  enokiQuantity.innerHTML = `${getQuantity}`;
  getIcon();
  itemStats.itemQuantity = getQuantity;
  console.log(itemStats.itemQuantity);
  return localStorage.setItem("itemStats-itemQuantity", getQuantity);
}
}

    function removeShitakeNum() {
    if(getQuantity < 4) {
      getQuantity -= 1;
      shitakeQuantity.innerHTML = `${getQuantity}`;
      getIcon();
      itemStats.itemQuantity = getQuantity;
      console.log(itemStats.itemQuantity);
      return localStorage.setItem("itemStats-itemQuantity", getQuantity);
    }
    }

    //ECT

    function popUpError() {
      alert("under construction");
    }

function mobileDropdown() {
  if(mainContent.style.display != "none") {
mainContent.style.display = "none";
mobilePopUp.style.display = "block";
} else if(mainContent.style.display === "none") {
  mainContent.style.display = "block";
  mobilePopUp.style.display = "none";
}
}
