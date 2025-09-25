/**
 * Create an script that shows a message in the console every second like this:

    ```
    Seconds remaining to the end of the course: 198221312
    Seconds remaining to the end of the course: 198221311
    ...
    ```
 */

// I'm setting up a variable to hold the total number of seconds for the countdown.
let secondsRemaining = 198221312;

// Here's the magic. `setInterval` will run the function I provide every 1000 milliseconds (which is 1 second).
// It also returns a unique ID for this specific timer, which I'm saving in 'intervalId'.
// Saving this ID is super important for stopping the timer later!
const intervalId = setInterval(() => {
    // This is the code that will run every single second.

    // First, I'll log the current number of seconds remaining.
    console.log(`Seconds remaining to the end of the course: ${secondsRemaining}`);

    // Then, I decrement the counter. This is what makes it a "countdown".
    secondsRemaining--;

    // I need a way to stop the timer when it reaches zero.
    // This 'if' statement checks if the counter has gone below 0.
    if (secondsRemaining < 0) {
        // Once the condition is met, I call clearInterval() and pass it the ID I saved earlier.
        // This tells JavaScript to stop running this timer.
        clearInterval(intervalId);
        
        // And finally, I'll print a message to show that the countdown is complete.
        console.log("The course has ended!");
    }
}, 1000); // The '1000' here is the interval in milliseconds.