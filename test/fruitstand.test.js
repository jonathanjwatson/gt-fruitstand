const Fruitstand = require("../fruitstand");

describe("Fruitstand", () => {
  describe("Initialization", () => {
    it("should create an object with an owner, name, and startingBalance", () => {
      // ARRANGEMENT
      const ownerStringToTest = "Bob the Builder";
      const nameString = "Bob's Fruit Stand";
      const startingBalance = 0;
      // ACTION
      const myFruitstand = new Fruitstand(
        ownerStringToTest,
        nameString,
        startingBalance
      );
      // ASSERTION
      expect(myFruitstand.owner).toEqual(ownerStringToTest);
      expect(myFruitstand.name).toEqual(nameString);
      expect(myFruitstand.startingBalance).toEqual(startingBalance);
    });
  });
});
