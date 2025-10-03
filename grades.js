/* Write a code which can give grades to students according to there scores:
1)90-100, A
2)70-89, B
3)60-69, C,
4)50-59, D,
5)0-49, F */

let score = prompt("Enter your score between 0-100");
if( score >= 90 && score <= 100){
    console.log(`Based on your score ${score} your grade is A`);

}else if (score >= 70 && score <= 89){
    console.log(`Based on your score ${score} your grade is B`);
}else if( score >= 60 && score <= 69){
    console.log(`Based on your score ${score} your grade is C`);
}else if (score >= 50 && score <= 59){
    console.log(`Based on your score ${score} your grade is D`);
}else{
    console.log(`Based on your score ${score} your grade is F`);
}