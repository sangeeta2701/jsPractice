let btn1 =  document.querySelector("#btn1");

// btn1.onclick=()=>{
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// } 


//using event listner
btn1.addEventListener("click",()=>{
    console.log("Button1 was clicked - handler 1");
}); 
btn1.addEventListener("click",()=>{
    console.log("Button1 was clicked - handler 2");
});

const handler3 = () => {
    console.log("Button1 was clicked - handler 3");
};
btn1.addEventListener("click", handler3);

btn1.addEventListener("click",()=>{
    console.log("Button1 was clicked - handler 4");
});

//remove listner

btn1.removeEventListener("click",handler3);


// let div =  document.querySelector("div");
// div.onmouseover = ()=>{
//     console.log("you are inside div");
// }