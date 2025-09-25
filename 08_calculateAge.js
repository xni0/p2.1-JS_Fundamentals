// Write a function that calculates the age of a person based on their birthdate.

/**
 * @param {Date} birthdate - A JavaScript Date object representing the person's birthdate.
 * @returns {number} The calculated age in years.
 */

function calculateAge(birthdate) {
    // First, get today's date so I have something to compare against.
    const today = new Date();

    // My initial, simple calculation. This gives a rough age.
    // I'm using 'let' because I might need to adjust this value down by one.
    let age = today.getFullYear() - birthdate.getFullYear();

    // Now for the correction part. I'll check the month and day.
    // getMonth() is 0-indexed (Jan=0), but that's okay because I'm just finding the difference.
    const monthDiff = today.getMonth() - birthdate.getMonth();
    const dayDiff = today.getDate() - birthdate.getDate();

    // This is the core logic to see if their birthday has passed this year.
    // The condition is true if:
    // 1. We haven't reached their birth month yet (e.g., today is Sep, birthday is Dec -> monthDiff is negative).
    // OR
    // 2. We are IN their birth month, but we haven't reached their birthday yet
    //    (e.g., today is Sep 25, birthday is Sep 30 -> monthDiff is 0 and dayDiff is negative).
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        // If the condition is true, they haven't had their birthday this year, so subtract 1 from the age.
        age--;
    }

    // Now the age is accurate, so I can return it.
    return age;
}

// Create a Date object for the birthday we want to test.
const birthdate = new Date("2000-06-15");

// Call the function and print the result in a nicely formatted message.
console.log(`Age for birthdate ${birthdate.toDateString()}:`, calculateAge(birthdate));