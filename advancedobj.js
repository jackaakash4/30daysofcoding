//context vs scope

const object4 = {
    a: function(){
        console.log(this);
    }
}

//instantiation
class Player{
    constructor(name, type){
        console.log(this);
        this.name = name;
        this.type = type;
    }
    intro(){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player{
    constructor(name, type){
        super(name, type);
    }
    play(){
        console.log(`WEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Jack', 'Pirate King');
const wizard2 = new Wizard('Aryan', 'The pirate hunter');
