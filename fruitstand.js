// Fruitstand constructor

// should accept owner, name, and startingBalance as parameters
// owner should be a string
// name should be a string
// startingBalance should be a number

function Fruitstand(owner, name, startingBalance) {
  this.owner = owner;
  this.name = name;
  this.startingBalance = startingBalance;
}

module.exports = Fruitstand;
