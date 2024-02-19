const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
    // get a number 0-3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
    // Math.random() gives a number between 0 and 1
    // Math.floor() rounds the number down to the nearest integer
    // colors.length gives the number of elements in the colors array
    // Math.random() * colors.length gives a number between 0 and the length of the colors array
    // Math.floor(Math.random() * colors.length) rounds the number down to the nearest integer between 0 and the length of the colors array
    // Math.floor(Math.random() * colors.length) returns a random number between 0 and 3 (inclusive)
    // Math.floor(Math.random() * colors.length) returns a random number between 0 and 3 (inclusive)
    // Math.floor(Math.random() * colors.length) returns a random number between 0 and 3 (inclusive)
    // Math.floor(Math.random() * colors.length) returns a random number between 0 and 3 (inclusive)
    // Math.floor(Math.random() * colors.length) returns a random number between 0 and 3 (inclusive)
}