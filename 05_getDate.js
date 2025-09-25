/**
 * Write an arrow function that returns the current date and time in the format `YYYY-MM-DD HH:MM:SS`
 */

// I'm making an arrow function to handle all the date formatting logic.
const getFormattedDateTime = () => {
    // The first step is to create a new Date object.
    // This captures a snapshot of the exact date and time when this line runs.
    const now = new Date();

    // .getFullYear() is straightforward, it gives you the 4-digit year.
    const year = now.getFullYear();

    // This was the tricky part! .getMonth() starts from 0 (Jan=0, Feb=1, etc.).
    // So, I have to add 1 to get the real month number.
    const month = String(now.getMonth() + 1).padStart(2, '0');

    // .getDate() gives the day of the month (1-31).
    const day = String(now.getDate()).padStart(2, '0');

    /*
     * For the month, day, and all the time parts below:
     * 1. I convert the number to a String() first.
     * 2. Then I use .padStart(2, '0'). This handy method ensures the string is
     * at least 2 characters long. If it's not, it adds '0's to the start.
     * So, 9 becomes "09", but 10 stays "10". Perfect!
     */

    // --- Extracting Time Parts ---

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Now I combine all the formatted parts into the final string.
    // I'm using a template literal (the backticks ``) because it's super readable.
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

// --- Using the Function ---

// Now I just call my function to get the neatly formatted string.
const currentDateTime = getFormattedDateTime();

// And finally, log it to the console to see the result!
console.log(currentDateTime);
