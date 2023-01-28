//cloning inside the nested object

let obj ={
    a: 'a',
    b: 'b',
    c: {
        deep: 'I am inside nested object'
    }
};

let clone = {...obj};
//for cloning inside insted object
let superClone= JSON.parse(JSON.stringify(obj))

obj.c.deep = 'NOTHING HAPPEN';

console.log(obj)
console.log(clone)
console.log(superClone) //it can clone inside the nested object too


