//String Methods

//1)Length
let str = "My Work ";
console.log(str);
console.log(str.length); 


//lowercase
lowerCase = str.toLocaleLowerCase();
console.log(lowerCase);

upperCse = str.toLocaleUpperCase();
console.log(upperCse);

trimedStr = str.trim();
console.log(trimedStr);
console.log(trimedStr.length);


let str2 = "123456789";
console.log(str2);
console.log(str2.slice(2));

console.log(str.concat(str2));


console.log(str2.replace(5, "S"));

let str3 = "Helololo";
res1 = str3.replace("lo", "p");
console.log(str3);
console.log(res1);
res2 =  str3.replaceAll("lo","p");
console.log("Res2", res2); 

console.log(str3.charAt(5));