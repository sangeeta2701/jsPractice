//create a toggle button that chnages the screen to dark mode when clicked and light-mode when clicked again

// let modeBtn =  document.querySelector("#mode");
// let currMode = 'light';
// modeBtn.addEventListener("click", ()=>{
//     // console.log("You are trying to chnage mode");
//     if(currMode === 'light'){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(currMode);
// });

//***********************similar event for mouseover************/

let btnMode =  document.querySelector("#mode");
let currMode = "light";
btnMode.addEventListener("mouseover",()=>{
  if(currMode === "light"){
    currMode = "dark";
    document.querySelector("body").style.backgroundColor = 'black';
  }else{
    currMode = "light";
    document.querySelector("body").style.backgroundColor = 'white';
  }
  console.log(currMode);
}); 

