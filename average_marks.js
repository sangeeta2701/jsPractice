/*For a given array with marks of students -> [85,97,44,37,76,60]
find the average marks of teh entire class */

let marks = [85,97,44,37,76,60];
let sum = 0;
for(let val of marks){
    sum += val;
}
console.log("Total of marks:",sum);
let avg = sum/marks.length;
console.log("Average of the total marks:",avg);