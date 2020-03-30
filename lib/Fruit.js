class Fruit{
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }
}

class Seedless extends Fruit{
    constructor(name, weight){
        super(name, weight);
        this.seeds = 0;
    }
    
}

module.exports = {
    Fruit: Fruit,
    Seedless: Seedless
}