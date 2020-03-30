// Fruitstand constructor

// should accept owner, name, and startingBalance as parameters
// owner should be a string
// name should be a string
// startingBalance should be a number

function Fruitstand(owner, name, startingBalance) {
  if (typeof owner !== "string") {
    throw new Error("Please enter valid information for owner.");
  }
  if (typeof name !== "string") {
    throw new Error("Please enter valid information for name.");
  }
  if (typeof startingBalance !== "number") {
    throw new Error("Please enter valid information for startingBalance.");
  }
  this.owner = owner;
  this.name = name;
  this.startingBalance = startingBalance;
}

module.exports = Fruitstand;
