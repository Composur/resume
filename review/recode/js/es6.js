const log = console
    .log
    .bind(console)

var a = [1, 3]
log(...a)

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`hello, ${this.name}, i am ${this.age} years old`);
    }
}
class Student extends Person {
    constructor(name, age, score) {
        super(name, age);
        this.score = score;
    }

    sayScore() {
        console.log(`hello, ${this.name}, i am ${this.age} years old, i get ${this.score}`);
    }
}