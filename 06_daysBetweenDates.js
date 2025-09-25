/**
 * Write a normal function that calculates the number of days between two given dates
 */

// This function takes two JavaScript Date objects as input.
function daysBetweenDates(date1, date2) {
    // This is a little safety check. If a user passes the dates in the wrong order,
    // my calculation might give a negative number. This 'if' block swaps them to
    // ensure date1 is always the earlier date. This modern [a, b] = [b, a] syntax is a cool trick!
    if (date1 > date2) {
        [date1, date2] = [date2, date1]; // Swap the dates
    }

    // To convert from milliseconds to days, I first need to know how many milliseconds are in one day.
    // I'll store this in a constant to make the code easier to read.
    const oneDay = 24 * 60 * 60 * 1000; // 24 hours * 60 mins * 60 secs * 1000 ms

    // This is the core calculation.
    // Subtracting two Date objects gives the difference in milliseconds.
    const differenceInMs = Math.abs(date2 - date1);

    // Now, I just divide the total milliseconds by how many milliseconds are in one day.
    // I'm using Math.round() to get the nearest whole number of days. This helps account for
    // small discrepancies that can be caused by things like Daylight Saving Time.
    const diffDays = Math.round(differenceInMs / oneDay);

    return diffDays;
}

// First, I create two Date objects to test my function.
const dateA = new Date("2025-01-01"); // Start of the year
const dateB = new Date("2025-10-31"); // End of the year

// Then, I call the function and log the result to the console.
// Using .toDateString() makes the date output look a bit nicer.
console.log(
    `Days between ${dateA.toDateString()} and ${dateB.toDateString()}:`,
    daysBetweenDates(dateA, dateB)
);