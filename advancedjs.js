//condition? expr1: expr2;
//teranory operation
function isUserValid(bool){
    return bool;
}

var answer = isUserValid(true)? "You may enter": "Access Denied";

//switch case
function moveCommand(direction){
    var whathappens;
    switch(direction){
        case "forward": 
            whathappens = "you encounter a monster";
            break;
        case "back": 
            whathappens = "You arrived home";
            break;
        case "right": 
            whathappens = "You run into a troll";
            break;
        case "left": 
            whathappens = "You run into a river";
            break;
        default:
            whathappens = "please enter a valid direction";

    

        }
        return whathappens;
}

// ES5 and ES6 == ECMAScript version 6
//  ECMA internation
//  ECMAScript == javascript

//let and const instead of var

const player = 'Jack';
let experience = 100;
let wizardLevel = false;

if (experience = 90){
    let wizardLevel = true;
}
 


