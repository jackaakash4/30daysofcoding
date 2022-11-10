const first = () => {
    const greet = 'HI';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();