// js functions pre ES2015 :
function maFonction() {
    // instructions
    return 1
}

// js function post ES2015
const myArrowFunction = () => {
    // instructions
    return 1
}

// Implicit returns 
const implicitReturn = (a,b) => a+b;

//console.log(implicitReturn(3,5))

// this keyword context
const car = {
    model: 'E36',
    manif: 'BMW',
    carName: function() {
        console.log(this)
        return this.model + ' ' + this.manif  // this refers to car
    },
    carName2: () => {
        console.log(this)
        return this.model + ' ' + this.manif  // this refers to car
    }
}

console.log(car.carName2())