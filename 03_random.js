/**
 * Create one arrow function that generates a random number between a minimum and a maximum given number. 
 * Use it to calculate 10 random numbers between:

    - 0 and 99999
    - 10 and 40
    - 18 and 90
    - 1980 and 2020
 */

// i use the formula Math.floor(Math.random() * (max - min + 1)) + min
// to generate a random number between min and max (both inclusive)
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log("10 random numbers between 0 and 99999:");

// generate 10 random numbers between 0 and 99999
for (let i = 0; i < 10; i++) {
    console.log(getRandomNumber(0, 99999));
}

console.log("-------------------------------");

// generate 10 random numbers between 10 and 40
console.log("10 random numbers between 10 and 40:");
for (let i = 0; i < 10; i++) {
    console.log(getRandomNumber(10, 40));
}

console.log("-------------------------------");

// generate 10 random numbers between 18 and 90
console.log("10 random numbers between 18 and 90:");      
for (let i = 0; i < 10; i++) {
    console.log(getRandomNumber(18, 90));
}

console.log("-------------------------------");

// generate 10 random numbers between 1980 and 2020
console.log("10 random numbers between 1980 and 2020:");
for (let i = 0; i < 10; i++) {
    console.log(getRandomNumber(1980, 2020));
}   
