export default class Pizza {
  constructor(crust, topping, sauce) {
    this.crust = crust;
    this.topping = topping;
    this.sauce = sauce;
  }

  checkType() {
    if ((this.crust = "thick") && (this.topping = "cheese")) {
      return "Classic Pizza"
    } else {
      return "Other Pizza"
    }
  }
}

// constructor(crust = ["thin", "thick"], topping = ["cheese", "pepperoni", "veggie"], sauce = ["white", "red"]) {