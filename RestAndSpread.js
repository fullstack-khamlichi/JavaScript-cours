const a = [1, 2, 3]

const b = [...a, 4, 5, 6] //Spread a // result : [1, 2, 3, 4, 5]

// spreading an array
console.log(...a) // result : 1 2 3 

console.log([a]) // result : [ [ 1, 2, 3 ] ]
console.log([...a]) // result : [ 1, 2, 3 ]

const myNameIs = 'Youness KHAMLICHI'
console.log(...myNameIs) // Spriding a constant // result : Y o u n e s s   K H A M L I C H I

const  func = (a, b, c) => a + b + c;

console.log(func(a)) // result 1,2,3undefinedundefined
console.log(func(...a)) // result : 6
console.log(func.apply(null, a)) // reslt : 6
console.log(func.call(null, a)) // result : 1,2,3undefinedundefined

// Object destructuring
const {first, second, ...restOfIt} = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
}

console.log(first, second, restOfIt) // result : 1 2 { third: 3, fourth: 4, fifth: 5 }

// arrays have indexes, Objects have keys
console.log(Object.keys(restOfIt)) // result : [ 'third', 'fourth', 'fifth' ]

// array destructuring
const [arrayFirst, arraySecond, , , arrayFifth] = a // sachant que a = [1, 2, 3, 4, 5]
console.log(arrayFirst, arraySecond) // result : 1 2
console.log(arrayFifth) // result : 5

// Spreading objects
const objA = {name: "John", age: 30, city: "New York"}
const newObj = { ...objA }
newObj.age = 35
console.log(objA); // result : { name: 'John', age: 30, city: 'New York' }
console.log(newObj); // result : { name: 'John', age: 35, city: 'New York' }