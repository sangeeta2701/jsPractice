//Data Types

//object
const student = {
    fullName: "Sangeeta Gupta",
    age: 23,
    percentage: 93.33,
    isPasses: true 

}

//in objects if we want to reassign any value
student["age"] = student["age"]+5;
student["fullName"] = "Ankita";



console.log(`The age of the student is: ${student.age}`);
console.log(`The name of the student is: ${student.fullName}`); 


//Practice Assigmnet: Create a constant object to show the produect details of any product from the amaozon/flipkart

const product = {
    productNmae: "Parker Jotter Standard CT Ball Pen",
    productPrice: 270,
    productColor: "Black",
    productImage: "https://www.crossword.in/cdn/shop/files/parker-jotter-standard-ct-ball-pen-black-st0041877-40542821777625.jpg?v=1746607567&width=391",
    productOffer: 5

}
console.log(product);