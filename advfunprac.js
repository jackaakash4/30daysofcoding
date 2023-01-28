const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const mapArray = array.map(num=>num*2);
console.log('map array', mapArray);

const filterArray =  mapArray.filter((num)=>{
    return (num>10);
})
console.log('filter array', filterArray);


const reduceArray = filterArray.reduce((accumulator, num)=>{
    return accumulator+num;
},0)

console.log('reduce array: ', reduceArray);
