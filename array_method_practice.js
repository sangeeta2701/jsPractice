// /**Create an array to store companies: "Bloomberg", "Microsoft","Uber","Google","IBM","Netflix" 
//  * 1)Remove the first company from the array
//  * 2)Remove uber and add ola in its place
//  * 3)Add amazon at the end
 
// */ 


// let companies = ["Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"];
// console.log(companies);


// //1)Remove the first company from the array
// // companies.shift();
// // console.log(companies); 


// //2)Remove uber and add ola in its place
// companies.splice(2, 1 ,"Ola");
// console.log(companies);

// //3)Add amazon at the end
// companies.push("Amazon");
// console.log(companies);  




//Q2) We are give array of marks of students. filter out the marks of students that scorred 90+.

// let marks = [87,93,64,88,96,42];
// let filterMrks = marks.filter((val)=>{
//     return val > 90;
// });
// console.log(filterMrks); 



//Q3 take a number n as an input from user. Create an array of numbers from 1 to n. Also using reduce method calculate the sum.
let n = prompt("Enter a number");
let arr = [];
for(let i = 1; i <= n; i++){
    arr[i-1] = i;
}
console.log(arr);

let sumArr = arr.reduce((prev, curr)=>{
    return prev + curr;
});
console.log("sum:",sumArr); 

//use reduce method to calculate the products of all teh numbers 
let prodArr = arr.reduce((prev,curr)=>{
    return prev*curr;
});
console.log("product:", prodArr);
