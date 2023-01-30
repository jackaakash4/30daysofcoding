//important new feature
//padStart()    //space at start or padding
//padEnd()      //space at end

//example

'Turtle'.padStart(10);
//'     Turtle'
'Turtle'.padEnd(10);
//'Turtle       '

//another feature added

const fun = (
    a, 
    b,
    c,
    d,
       ) => { //it's valid
    console.log(a);
}

fun(1,2,3,4,);
// 1


//nextone

Object.values
Object.entries
Object.keys

let obj = {
    username0: 'Sante',
    username1: 'Jack',
    username2: 'Mr. Aakash'
};

//it makes object like an array
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

//it only select values
Object.values(obj).forEach(value =>{
    console.log(value);
})

//it will display both value and their variable
Object.entries(obj).forEach(value =>{
    console.log(value);
})

//username is replaced by empty sting to get it cleaner
Object.entries(obj).map(value=>{
    return value[1] + value[0].replace('username', '');
})


//Async Await















