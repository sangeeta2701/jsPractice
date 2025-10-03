//create a function using the function keyword that takes a string as an argument 
// and returns the number of vowels in the string.

// let stringPromt =  prompt("Enter any string");
// console.log(stringPromt);

// function vowelCount(str){
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }

//     console.log(`Number of vowels in the string: ${count}`);
// }  



//using arrow function

const vowelCount = (str)=>{
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char ==="u"){
            count++;

        }
    }
    console.log("count of the vowel in the string are:", count);
}