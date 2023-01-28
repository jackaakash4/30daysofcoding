//cloning in nested object

let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'I am inside nested object'
    }
};

let clone = Object.assign({}, obj);
let clone2 = {...obj};

obj.c.deep = 'HaHaHa, I am changed';

console.log(obj);
console.log(clone); /*all clone is changed because deep is inside the nested object.
                     all a, b, c is cloned but not inside the c. there is another object */
console.log(clone2);

