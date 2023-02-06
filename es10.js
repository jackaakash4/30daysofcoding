//flat() method used in array

const array = [1, 2, 3, 4, 5];
const nestarray = [1, [2,4], [3,5]];
const morearray = [1, 2, [3,4,[5]]];
array.flat();

nestarray.flat();   //no nested
morearray.flat();   //[5] will not be flat
