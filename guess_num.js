/* create a game where you stsrt with any random number. Ask the user to keep guessing
the game number untill the use enters the correct number. */

let gameNum = 27;
let userNum = prompt("Guess the game number: ");
while(userNum != gameNum){
    userNum = prompt("You entered wrong number. Guess again");


}
console.log("Congrats, You entered right number");