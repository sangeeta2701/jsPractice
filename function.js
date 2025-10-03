//************sum function*********/
function sum(a,b){
    return a + b;
}

//arrow function
const sumNum = (a,b)=>{
    console.log(a+b);
}



//***************multiply************/
function mul(a,b){
    return a*b;
} 

const mulNum = (a,b)=>{
    return a*b;
} 


//***8callback function***********/
let arr = [1,2,3,4,5,6];
arr.forEach((val)=>{
    console.log(val);
})