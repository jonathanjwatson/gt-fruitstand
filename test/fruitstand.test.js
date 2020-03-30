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
    it("should throw an error, if owner is not a string", () => {
      // ARRANGEMENT
      const ownerString = 0;
      const nameString = "test";
      const startingBalance = 0;
      const errMessage = "Please enter valid information for owner.";
      // ACTION
      const failingFruitstand = () =>
        new Fruitstand(ownerString, nameString, startingBalance);
      // ASSERTION
      expect(failingFruitstand).toThrowError(errMessage);
    });
    it("should throw an error, if name is not a string", () => {
      // ARRANGEMENT
      const ownerString = "test";
      const nameString = 0;
      const startingBalance = 0;
      const errMessage = "Please enter valid information for name.";
      // ACTION
      const failingFruitstand = () =>
        new Fruitstand(ownerString, nameString, startingBalance);
      // ASSERTION
      expect(failingFruitstand).toThrowError(errMessage);
    });
    it("should throw an error, if startingBalance is not a number", () => {
      // ARRANGEMENT
      const ownerString = "test";
      const nameString = "test";
      const startingBalance = "test";
      const errMessage = "Please enter valid information for startingBalance.";
      // ACTION
      const failingFruitstand = () =>
        new Fruitstand(ownerString, nameString, startingBalance);
      // ASSERTION
      expect(failingFruitstand).toThrowError(errMessage);
    });
  });
});
