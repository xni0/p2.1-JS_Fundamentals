/**
 * Write a function that prints numbers from 1 to 100. 
 * But for multiples of three, print "Fizz" instead of the number, 
 * and for multiples of five, print "Buzz". For numbers that are multiples 
 * of both three and five, print "FizzBuzz".
 */

// I'm creating a function to hold the logic.
function fizzBuzz() {

    // First, I need a 'for' loop to count from 1 all the way to 100.
    for (let i = 1; i <= 100; i++) {

        // The most important condition has to go FIRST.
        // I check if the number 'i' is divisible by 3 AND 5.
        // The modulo operator (%) gives the remainder. If the remainder is 0, it's perfectly divisible.
        // The '&&' means 'and', so both sides have to be true.
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } 
        
        // If the first condition was false, THEN I check if it's only divisible by 3.
        // This is an 'else if', so it only runs if the 'if' above it was false.
        else if (i % 3 === 0) {
            console.log("Fizz");
        } 
        
        // If that was also false, I'll check if it's only divisible by 5.
        else if (i % 5 === 0) {
            console.log("Buzz");
        } 
        
        // And if NONE of the above conditions were met...
        // The 'else' is the fallback for a normal number.
        else {
            console.log(i);
        }
    }
}

// Finally, I have to call the function to actually make it run
fizzBuzz();