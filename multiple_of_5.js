//Get user input a number using prompt("Enter a number"). Check if the number is a multiple of 5 or not.
let num =  prompt("Enter a number");
if(num % 5 === 0){
    console.log(`The enterend number ${num} is a multiple of 5`);
}else{
    console.log(`The enterend number ${num} is not a multiple of 5`);
}
