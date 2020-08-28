// https://www.youtube.com/watch?v=W6NZfCO5SIk&t=360s

// first js comment
var hello_str = 'Hello World'  // string literal
let age = 30;  // number literal
let isHoliday = false;  // boolean literal
let firstName = undefined;
selectedColor = null;


// let hello_str = 'Hello World'

console.log(hello_str + '. Is it holiday? ' + isHoliday);
console.log(age);

// var name cannot be a reserved keyword
// cannot start with a number (1name)
// cannot contain a space or hypen (-)
// case-sensitive

// object
let person = {name: 'Ron', age: 45};
console.log(person);

// array
selectedColor = ['red', 'green' , 'blue', 'pink'];
console.log(selectedColor);

// function
function greet(firstName, lastName) {
    console.log('Hola ' + firstName + ' ' + lastName);
}

greet('Ron', 'Swanson')

function square(num) {
    return num * num
}

console.log(square(4));