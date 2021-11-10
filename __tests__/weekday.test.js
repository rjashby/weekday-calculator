import Weekday from "../src/js/weekday.js";

describe("Weekday", () => {

  test("It should create a Weekday object with a day, month, and year", () => {
    const weekday1 = new Weekday(12, 12, 1912);
    expect(weekday1.day).toEqual(12);
    expect(weekday1.month).toEqual(12);
    expect(weekday1.year).toEqual(1912);
  });

  test("It should ")
});