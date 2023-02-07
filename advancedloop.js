//javascript looping

const basket = ['apple', 'oranges', 'grapes'];
//1. for loop
for(let i = 0; i < basket.length; i++){
    console.log(basket[i]);
}

//2 forEach
basket.forEach(item =>{
    console.log(item);
})

//3. for of
//combination of for and foreach
//iterating - arrays, string

for(item of basket){
    console.log(item);
}

//for in
//works with object's properties
//this is not iterating 
//this is enumerating

const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000,
}

for (item in detailedBasket){
    console.log(item)
}