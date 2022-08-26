//Data structure array

var fruits = [ "Apple", "Banana", "Orange", "Mango"];
fruits[fruits.length] = "Kiwi";
//it adds "Kiwi" in fruits array
//we can also do fruits.push = "Kiwi"
//fruits = ["Apple", "Banana", "Orange", "Mango", "Kiwi"]

//use of shift();
fruits.shift();
//it left shift the content of fruit array
//fruits = ["Banana", "Orange", "Mango",  "Kiwi"]

//use of pop();
fruits.pop();
//it pops the last element of array fruits
//it pops "kiwi"
//fruits = ["Banana", "Orange", "Mango"]


//use of push(element);
fruits.push("Kera");
//it push "Kera" to the array
//fruit = ["Banana", "Orange", "Mango", "Kera"]

//use of fruits.concat[];
var fruits= fruits.concat["Straw", "Berry"];
//it adds "STraw" and "Berry" to the array
// fruits = ["Banana", "Orange", "Mango", "Kera", "Straw", "Berry"]

// use of sort function
fruits.sort();
//it sorts the element of fruits array

