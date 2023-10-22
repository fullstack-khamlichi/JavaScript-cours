// inheritance pre es2015

const human = {
    breathing: true,
    // greating(){}
    greating: function() {
        return 'salam'
    }
}

const programmer = {
    sleep: false,
    __proto__: human,
}

//console.log(programmer.greating())

// Classes post es2015
class Person {
    constructor (name) {
        this.name = name;
    }

    static staticHello = () => 'static salam'

    hello() {
        return `hello my name is ${this.name}`
    }

    set name(value) {
        this.name = name
    }

    get name() {
        return this.name
    }
}

const p = new Person('Youness')
//console.log(p.hello());

class coder extends Person {
    hello() {
        return super.hello() + ' from coder classe'
    }
}

const cd = new coder('khalid')

//console.log(cd.hello())
console.log(Person.staticHello())