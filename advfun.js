//advanced array

const array = [1, 2, 3, 4];
const double =[];
const newArray = array.forEach((num)=>{
    double.push(num * 2);
})
console.log('for each', double);


//map
//it creates new array mapA but foreach can't do that


const mapArray = [2, 3, 4, 5];

const mapA = mapArray.map((num)=>{
    return num*2;   //map alwawys have return value
})

console.log('map', mapA);


//in short we can write
const mapArrayy = [2, 3, 4, 5];
const shortA = mapArrayy.map(num => num*2);
console.log(shortA);


//filter

const filterArray = shortA.filter(num => {
    return (num > 5);
})
console.log(filterArray);

//reduce

const reduceArray = array.reduce((accumulator, num)=>{
    //accumulator is sth where we can store sth that happen in body
    //return accumulator + num;  accumulator = accumulator + num

    return accumulator + num;
}, 0)//value of accumulator = 0 in our case

console.log('reduce', reduceArray);

// answer is reduce 10
