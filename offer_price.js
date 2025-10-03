/* for a given array with price of 5 items -> [250,645,300,900,50]
all items have an offer od 10% OFF on them. Chnage the array to store final price after applying offer. */

let itemPrice = [250,645,300,900,50] 


//using for of
// let idx = 0;
// for(let val of itemPrice){
//     let offer = val/10;
//     itemPrice[idx] = itemPrice[idx] - offer;
//     console.log(`value after offer ${itemPrice[idx]}`);
//     idx++;
// }
// console.log(itemPrice); 

//using for loop

for( let i = 0; i<itemPrice.length; i++){
    let offer = itemPrice[i]/10;
    itemPrice[i] = itemPrice[i] - offer;

}
console.log("updated array", itemPrice); 


