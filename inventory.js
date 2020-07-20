
export default class Inventory {

  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }
}



// const enokiMushroom = new Inventory("Enoki", 1);
// enokiMushroom.quantity += 1;
//
// console.log(enokiMushroom);
// ** You can only default export one thing -- usually its a class.
