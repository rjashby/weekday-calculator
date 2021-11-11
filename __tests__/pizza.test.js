import Pizza from "../src/js/pizza.js";

describe("Pizza", () => {

  test("It should create a pizza object with three properties, crust, topping, and sauce", () => {
    const pizza1 = new Pizza("thin", "cheese", "red");
    expect(pizza1.crust).toBe("thin");
    expect(pizza1.topping).toBe("cheese");
    expect(pizza1.sauce).toBe("red");
  });

  test("It should check to see what type of pizza it is based on pizza profiles", () => { 
  const pizzaTest = new Pizza ("thick", "cheese", "red")
  expect(pizzaTest.checkType()).toBe("Classic Pizza")
  });
});