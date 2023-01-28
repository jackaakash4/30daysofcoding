//similarly as object, in array we pass the value by refrence

var c = [1, 2, 3, 4, 5, 6];
var d = c;

d.push(123456); //since d is copy of c, when we add another number in d it automatically pushed into c
//this is pass value by refrence


console.log(d);
console.log(c);