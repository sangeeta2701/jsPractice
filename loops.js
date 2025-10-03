//for loop**************


// let i;

// for(i = 1; i <=5; i++){
//     console.log("Apna College");
// }
// console.log("Loop has ended");  


//calculate sum of 1 to 5
// let sum = 0;
// for(let i = 1; i<= 5; i++){
//     sum = sum + i;

// }
// console.log("sum = ",sum);
// console.log("Loop has ended"); 



//while loop*************
// let i = 1;
// while(i<=5){
//     console.log("i =", i);
//     i++;
// }
// console.log("Loop has ended"); 


//do-while *************
// let i = 1;
// do{
//     console.log("i =",i);
//     i++;
// }while(i<=5);  


//for-of loop*************
// let str = "MyWork";
// let arr = [2,3,4,5,6,7,8];
// let len = 0;
// for(let i of arr){
//     console.log("i:", i);
//     len++;
// }
// console.log("Size of the array: ",len); 



//for-in loop**************
let student = {
    name: 'Sangeeta',
    age: 23,
    isPass: true,
}

for(let i in student){
    console.log("i is:", i,`value of ${i}:`, student[i]);
}