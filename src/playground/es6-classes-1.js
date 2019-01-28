
class Person {
    // constructor(name = 'Petr Sima') {
    //    this.name = name; 
    // }
    // getGretting() {
    //     return `Hi, I am ${this.name}!`;
    // }
    constructor(name = 'Petr Sima', age = 0) {
        this.name = name;
        this.age = age;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

const me = new Person('Michal Futera', 25);
console.log(me.getDescription());
// console.log(me.getGretting());

const other = new Person();
console.log(other.getDescription());

