const utils = require("./utils");
const Fruitstand = require("./fruitstand");
const fruitClasses = require("./lib/Fruit");

const badFruitStand = new Fruitstand("test", "test", 0);

// console.log(badFruitStand);

utils.printHelloWorld();
utils.addition(2,5);

const banana = new fruitClasses.Fruit("banana", .5);
console.log(banana);

const watermelon = new fruitClasses.Seedless("Watermelon", 5);
console.log(watermelon);