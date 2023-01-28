//pass by refrence vs pass by value in js

//pass by value
//all premitive data type pass data by value
//but objcet pass data by refrence

//pass by value
var a = 5;
var b = a;

b++;

console.log(a);
console.log(b);

//value of a is passed to by pass by value

//pass by refrence

let obj1 = {
    name: 'Aakash',
    password: '1234'
};

let obj2 = obj1;

obj2.name = 'Aryan';

//whole obj1 and obj2's name will change to Aryan because Aryan is passed by refence 
console.log(obj1);
console.log(obj2);


