/* Prompt the user to enter their full name. Generate a username for the based on the input.
Start username with@, followed by there name and ending with the full name length. */

let namePrompt = prompt("Enter your full name without spaces");
console.log(namePrompt);

let userName = "@"+namePrompt+ namePrompt.length;
console.log("Your username is:", userName);