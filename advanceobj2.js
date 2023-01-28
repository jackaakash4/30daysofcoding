class Player{
    constructor(name, type){
        this.name =  name;
        this.type = type;
    }
    introduce(){
        console.log(`HI my name is ${this.name} and I am ${this.type}`);
    }
}

class wizard extends Player{
    constructor(name, type){
    super(name, type)
    }

    play(){
        console.log(`Weeeee I am ${type}`);
    }
}

const wizard1 = new wizard('Aakash', 'PirateKing');
const wizard2 = new wizard('Aryan', 'SoulKing');

