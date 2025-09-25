// Write an arrow function that checks if a given year is a leap year

const isLeapYear = (year) => {
    /*
     * This single line of logic can be broken down into two main parts:
     *
     * PART 1: (year % 4 === 0 && year % 100 !== 0)
     * This checks for the main rule: The year is divisible by 4 BUT NOT by 100.
     * This correctly identifies years like 2024 as leap years and years like 1900 as common years.
     *
     * PART 2: (year % 400 === 0)
     * This checks for the exception to the exception: The year is divisible by 400.
     * This correctly identifies years like 2000 as leap years.
     *
     * The '||' (OR) in the middle means the whole thing is TRUE if either Part 1 OR Part 2 is true.
     */
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

// Let's test it with the current year (or a recent one).
const year = 2024;

// Call the function and see what it returns.
const result = isLeapYear(year);

// I'm using a template literal to make the output easy to read.
console.log(`${year} is a leap year:`, result); 