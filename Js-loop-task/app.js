

/* 
Write a loop 1 to 200. Use break to exit the loop once you find 100.
*/

// problem 1 ans=============>>>>>>>>>>>>>>

// for (let index = 1; index <= 200; index++) {
    
//     if (index==100) {
//         break
//     }
//     console.log(index);
    
// }


/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

// problem 2 ans=============>>>>>>>>>>>>>>

// let num=1;
// let sum=0

// while (true) {
//     sum+=num
//     if(sum >= 100){
//         break
//     }
//     num++
   
    
// }
// console.log(num);
// console.log(sum);


/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/


// problem 3 ans=============>>>>>>>>>>>>>>

// for (let i = 1; i <=  100; i++) {
//     if (i == 1) {
//         continue
//     }
//    else if (Number.isInteger(Math.sqrt(i))) {
//         console.log(i);
//         break
        
//     }
    
// }




/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/


// problem 4 ans=============>>>>>>>>>>>>>>

// for (let i = 0; i <= 40; i++) {

//     if (i%2==0) {
//         console.log(i);
        
//     }
    
// }


/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
// problem 5 ans=============>>>>>>>>>>>>>>


// for (let i = 55; i < 85; i++) {
//    if (i%2==1 && i%5 !== 0 ) {
//      console.log(i);
     
//    }
    
// }


/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
*/

// problem 6 ans=============>>>>>>>>>>>>>>

// for (let i = 1; i < 61; i++) {

//     console.log("this message 60 times "+i);
    
    
// }