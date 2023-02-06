//flat() method used in array

const array = [1, 2, 3, 4, 5];
const nestarray = [1, [2,4], [3,5]];
const morearray = [1, 2, [3,4,[5]]];
array.flat();

nestarray.flat();   //no nested
morearray.flat();   //[5] will not be flat
morearray.flat(2);  //[5] will also be flat

  
const entries = ['jack', 'aakash',,,,,,,'jacky']
entries.flat(); //it will clear the data

//flatMap()
//it will add add 'Shrestha' with the entries
const fullName = entries.flatMap(name => name + ' Shrestha')
fullName;

//another example
//trimStart and trimEnd
//it will trim start and end of string
userEmail = '       jackaakash4@gmail.com';
userEmail2 = 'jackaakash4@gmail.com         ';
console.log(userEmail.trimStart())
console.log(userEmail2.trimEnd()) 


//fromEntries
//convert array into object
userProfiles = [['Jack', 21], ['Aakash', 20], ['Aryan', 16]];
const obj = Object.fromEntries(userProfiles);

//and entries does exact opposite turning object into array
Object.entries(obj);
//object into array

//rry catch and throw
//error handling

try{
    bob + 'hi'
} catch(error){
    //if try is error do this
    console.log('you messed up' + error)
}
//output will be 'you messed upReferenceError: bob is not defined
