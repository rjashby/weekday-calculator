import Pizza from "../src/js/pizza.js";

describe("Pizza", () => {

  test("It should create a pizza object with three properties, crust, topping, and sauce", () => {
    const pizza1 = new Pizza("thin", "cheese", "red");
    expect(pizza1.crust).toEqual("thin");
    expect(pizza1.topping).toEqual("cheese");
    expect(pizza1.sauce).toEqual("red");
  });

  test("It should check to see what type of pizza it is based on shape")
});