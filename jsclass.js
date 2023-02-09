class Parent {
    constructor(firstName, lastName, country, titles){
        this.firstName = firstName;
        this.lastName = lastName;
        this.country= country;
        this.titles = titles;

    }
    getPersonInfo(){
        return(`${this.firstName} ${this.lastName}, a ${this.titles} developer based in ${this.country}`)
    }
    parentMethod(){
        //code goes here
    }
}

const p1 = new Parent('Aakash', 'Shrestha', 'Nepal', 'FullStackDeveloper')

