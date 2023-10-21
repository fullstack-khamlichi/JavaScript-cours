// var, const, let
// var supports hoisting and let and const do not

'use strict'


a = 10;

console.log(a)
// var supports hoisting
var a;

d = 20;

// let do not supports hoisting
let d;
console.log(d);

var c = b + 2;

// const do not supports hoisting
const b = 2;
console.log(b);