let obj ={
    a: 'a',
    b: 'b',
    c: 'c'
};

//cloning the object obj to clone
let clone = Object.addign({}, obj);
//new way to clone
let clone2 = {...obj};


//if we clone it doesn't change the clone object while we change original object
obj.c = 5;

console.log(clone); //clone of obj before update
console.log(obj);   //updated
console.log(clone2);    //clone of clone
