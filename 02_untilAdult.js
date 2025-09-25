/**
 * Write a program that repeatedly ask the user for their age until they enter a valid adult age (18 or older). 
 * The program should continue asking if the age entered is below 18. Control also if the user input a `NaN` value.
 */

// I'm wrapping everything in a function so I can call it whenever I want.
function askForAge() {
    // I need a variable to hold the age, but I'll declare it here without a value yet.
    // It will get its value inside the loop.
    let age;

    // This do...while loop will run at least one time.
    do {
        // This opens a pop-up box asking the user for their age.
        age = prompt("Please enter your age:");

        // The 'prompt' function always returns a string (text).
        // I have to convert it to an actual number before I can do any comparisons.
        age = Number(age); 

        // Now I need to check for bad input. What if the user typed "hello"?
        // Number("hello") results in NaN (Not a Number). isNaN() is the perfect tool to check for this.
        if (isNaN(age)) {
            alert("That's not a valid number. Please enter a valid age.");
        } 
        // If it IS a number, I then check if it's less than 18.
        else if (age < 18) {
            alert("You are not an adult yet.");
        }

    // This is the condition to KEEP LOOPING.
    // The loop will repeat as long as the input is Not-a-Number OR the age is less than 18.
    // The || symbol means "OR". As soon as both of these are false, the loop will stop.
    } while (isNaN(age) || age < 18);

    // If the code reaches this line, it means the loop has ended,
    // so the age must be a valid number and it's 18 or greater.
    alert("Welcome to my awesome website for adult people");

    // this line changes the content of the HTML page
    // First, I grab the HTML element that has the id="container".
    const container = document.getElementById("container");

    // Now, I'm replacing all the HTML inside that container with a big welcome message.
    container.innerHTML = "<h1>Welcome to my awesome website for adult people!!</h1>";
}

// And finally, I call the function to kick the whole process off
askForAge();