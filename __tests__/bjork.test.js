import Bjork from "../src/js/bjork";

describe("Bjork", () => {

  test("should correctly create a bjork object with four lengths", () => {
    const bjork1 = new Bjork(4, 5, 5, 3)
    expect(bjork1.side1).toEqual(4);
    expect(bjork1.side2).toEqual(5);
    expect(bjork1.side3).toEqual(5);
    expect(bjork1.side4).toEqual(3);
  });

});