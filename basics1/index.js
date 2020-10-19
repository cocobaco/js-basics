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
selectedColor.push('yellow');  // add item at the end
console.log(selectedColor);
selectedColor[0] = 'orange';  // change item
console.log(selectedColor);
selectedColor.splice(1, 1);  // delete item
console.log(selectedColor);

// function
function greet(firstName, lastName) {
    greeting = 'Hola ' + firstName + ' ' + lastName;
    return greeting;
    // console.log('Hola ' + firstName + ' ' + lastName);
}

// greet('Ron', 'Swanson')
document.write("Functions demo:" + "<br>");

document.write("greet: ", greet('Ron', 'Swanson') + '<br>');

function square(num) {
    return num * num
}

document.write("square(4) = ", square(4), '<br>');

document.write("variables demo:" + "<br>");

// calling x after definition 
var x = 5; 
document.write("x = ", x, "<br>"); 

// calling y after definition  
let y = 10; 
document.write("y = ", y, "<br>"); 

// calling var z before definition will return undefined 
document.write("z = ", z, "<br>"); 
var z = 2; 

// calling let a before definition will give error 
// document.write(a); 
// let a = 3; 

var img_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png";
var img = document.createElement('img');
img.src = img_url;
img.classList.add('key-image');
document.body.appendChild(img);