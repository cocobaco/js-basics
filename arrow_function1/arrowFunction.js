// https://www.youtube.com/watch?v=h33Srr5J9nY

function sum(a, b) {
    return a + b;
}

let sum2 = (a, b) => a + b;

function isPositive(number) {
    return number >= 0;
}

let isPositive2 = (number) => number >= 0;

console.log(sum(3, 5));

console.log(sum2(3, 5));

console.log(isPositive(-5));

console.log(isPositive2(-5));

const contentEl = document.getElementById('content');

contentEl.addEventListener('click', function() {
    console.log('Click');
});

contentEl.addEventListener('click', () => console.log('Click'));

