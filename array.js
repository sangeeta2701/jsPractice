let marks = [90,46,70,83,55];
console.log(marks);

console.log(marks.length); 

console.log(marks[1]);

//chnage values 
marks[0] = 46;
console.log("Updated array: ", marks);


//loop array, print all elements of array using loop

// let heroes = ["IronMan", "Thor", "SpiderMan", "CaptionAmerica", "Hulk", "AntMan"];
// for(let idx = 0; idx<heroes.length; idx++){
//     console.log(heroes[idx]);
// } 


//using for of

// let heroes = ["IronMan", "Thor", "SpiderMan", "CaptionAmerica", "Hulk", "AntMan"];
// for(let idx of heroes){
//     console.log(idx);
// }  

let cities = ["Delhi", "Mumbai", "Pune", "Bangalore", "Hydrabad", "Gurgaon"];
for(let item of cities){
    console.log("The cities are:", item.toUpperCase());
}
