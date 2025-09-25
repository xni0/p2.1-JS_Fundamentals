// Write a function that prints the multiplication table of a given number.

/**
 * This function prints the multiplication table for a given number, from 1 to 10.
 * @param {number} number - The number for which to generate the table.
 */
function multiplicationTable(number) {
    // I thought it would be nice to print a little header first to say which table this is.
    // The template literal (the backticks ``) makes it easy to insert the 'number' variable into the string.
    console.log(`Multiplication Table for ${number}:`);

    // A 'for' loop is the perfect tool for this repetitive task.
    // I need to count from 1 up to 10.
    // - let i = 1; -> My counter variable 'i' will start at 1.
    // - i <= 10;   -> The loop will continue as long as 'i' is less than or equal to 10.
    // - i++;       -> After each cycle, 'i' will increment by 1.
    for (let i = 1; i <= 10; i++) {
        // Inside the loop, for each value of 'i', I print one formatted line.
        // For example, when i is 3, this will log "5 x 3 = 15" (if the number was 5).
        console.log(`${number} x ${i} = ${number * i}`);
    }
}


// Now I can just call my function whenever I need a multiplication table.
// Let's test it with the number 5.
multiplicationTable(5);

// And to prove it's reusable, let's test it with the number 7.
multiplicationTable(7);


