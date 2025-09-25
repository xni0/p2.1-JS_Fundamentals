/**
 * Use the previous function to calculate 10 different lottery numbers of 5 cyphers each
 */

// This is a compact "arrow function". It's a modern way to write a function in one line.
// It's a reusable tool that will give me a random WHOLE number between a min and a max value.
const getRandomNumber = (min, max) => {
    /*
     * This single line is doing all the magic. Here's my breakdown of the formula:
     *
     * 1. (max - min + 1)
     * This calculates how many numbers are in our desired range.
     * 2. Math.random() * (max - min + 1)
     * Math.random() gives a decimal between 0 and 0.999...
     * Multiplying it by our range size gives us a random decimal from 0 up to (but not including) our range size.
     * 3. Math.floor(...)
     * We need a whole number, so Math.floor() chops off the decimal part, always rounding down.
     * 4. ... + min
     * The result from step 3 is a random number starting from 0. To get it into our desired range,
     * we just add our minimum value.
     */
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Just printing a little header to explain what's coming next.
console.log("10 random lottery numbers of 5 cyphers each:");

// Now, I'll just use a simple 'for' loop to run my code 10 times.
for (let i = 0; i < 10; i++) {
    // Inside the loop, I call my shiny new function.
    // The smallest 5-digit number is 10000 (my 'min').
    // The largest 5-digit number is 99999 (my 'max').
    console.log(getRandomNumber(10000, 99999));
}
