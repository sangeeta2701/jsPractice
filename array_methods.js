//push Method

let fruits = ['Apple', 'Mango', 'Litchi', 'Orange', 'Melon'];
console.log(`food items are ${fruits}`);

fruits.push('Grapes');
console.log("updated array:", fruits);
//updated multiple items

fruits.push("Banana", "Kiwi","Papaya", "Pineapple");
console.log("updated array with multiple items:", fruits);



//***************************Pop Method*******/
 
let deltedItem =  fruits.pop();
console.log("Fruits with delted item:",fruits);
console.log("Deleted Item:", deltedItem);


//*****************To string */
let stringItem =  fruits.toString();
console.log("String converted:",stringItem);


let marks = [70,50,20,88,90];
let convertedMarks = marks.toString();
console.log(convertedMarks); 

//**********************concat */
let marvel_heroes = ["thor", "spiderman","ironman","antman","Dr. Strange"];
// let dc_heroes = ["superman", "batman"];
// let indianHeroes = ["shaktiman","Krish"];
// //single array
// let combinedArray = marvel_heroes.concat(dc_heroes, );
// console.log(`The combined array is ${combinedArray}`);

// //if want to concat multiple arrays
// let combinedArray1 = marvel_heroes.concat(dc_heroes, indianHeroes);
// console.log(`The combined array is ${combinedArray1}`); 


//************unshift*************/
// marvel_heroes.unshift("antman");
// console.log(marvel_heroes); 


//******************shift*********/
// let val = marvel_heroes.shift();
// console.log("deleted array:", val);  


//**********8slice */
console.log(marvel_heroes);
console.log(marvel_heroes.slice(1,3));
console.log(marvel_heroes.slice(1));
console.log(marvel_heroes.slice());  



//****************splice**********/
let arr = [1,2,3,4,5,6,7];
arr.splice(2,2,100,200);
console.log(arr); 

//only add element
// arr.splice(3,0,101);
// console.log(arr);  


//delete
// arr.splice(3,1);
// console.log(arr);   


//replace
arr.splice(2,1,200);
console.log(arr);  



//map
// let nums = [20,40,60,50];
// nums.map((val)=>{
//     console.log(val);
// }) 


//filter
let arr1 = [1,4,6,7];
let evenArr = arr1.filter((val)=>{
    return val % 2 === 0;
});
console.log(evenArr);



