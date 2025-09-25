/**  Write a function that takes a name and a favorite color as arguments and returns a sentence like:
 "Hello, my name is [name] and my favorite color is [color]." **/

function createMessage(name, color) {
    return `Hello, my name is ${name} and my favorite color is ${color}.`;
}

// Example usage:
let message = createMessage("Luci", "black");
console.log(message); // Output: Hello, my name is Luci and my favorite color is black.

