// var, const, let
// var supports hoisting and let and const do not

'use strict'

var a;
a = 10;
b = 20;
console.log(a)

let b;
console.log(b);


const const1 = 10; // constante inchangeable
const const2 = {
	name: 'Youness',
	lastName: 'Khamlichi'
}


const2 = 30; // on peut pas le changer

const2.year = 2023; // on peut changer un des composants
console.log(const2)


const const3 = [1, 2, 3, 4, 5]

const3.push(10, 20, 30)

console.log(const3)

//SCope

// Block scope
// let and const has a block scope visibility
{

}

// function scope
// var has a functional scope visibility
function f() {
	var myvar = 'variable'
}


//node .\Variables.js

// git init
// git add .
// git commit -m 'fisrt commit - variables'

// git remote add origin ....
// git push --set--upstream origin master 



