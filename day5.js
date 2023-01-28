//advanced function
const func = () => {
    const greet = 'HI';
    const func1 = () => {
        alert(greet);
    }
    return func1;
}
const newfunc = func();
newfunc();
console.log(newfunc());


