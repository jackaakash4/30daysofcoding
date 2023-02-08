//BigInt
//new type

typeof 1n;
//1n is BigInt
//above max_safe_integer



//NUllish Coalescing operator ??

//Optional chaining operator?.

let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}
//traditional way
let weight = will_pokemon.pikachu.weight;
console.log(weight);

let jack_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30
    }
}

//to check pikachu is jack's pokemon or not
let weight3 = jack_pokemon?.pikachu?.weight
console.log(weight3)
//output will be undefined