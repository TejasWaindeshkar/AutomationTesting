// what is loop ?
// block of code execute repetedly until  a specified condition is met.
// for loop - the for loop is commonly used when we know how many times we want to execute the block of code.
// Syntax
/*
    for(initialization; condition; increment/decrement){
        // block of code
    }
*/
// let i = 1;     // ----> initialization
// i <= 5;     // -----> condition
// i++         // ----> increment 

for(let i = 1;i<=10;i++){
    console.log(i)
}

// for loop with Array
let fruits = ["Apple","Banana","Mango","Orange","Kiwi"]

for(let i = 0; i < fruits.length;i++){
    console.log(fruits[i])
}

// while loop - While loop executres a code as long as condition is true.
// Syntax
/*
    while(condition){
        // block of code
    }
*/

let i = 6;  // initialization
while(i <= 5){  // condition
    console.log(i)
    i++             // increment/decrement
}

// do...While loop ---> the do...while loop executes the code at least once, even if condition is false.
// Syntax
/*
    do{
        // block of code
    }while(condition);
*/
console.log("*********************")
let j = 6;
do{
    console.log(j)
    j++;
}while(j<=5)

// for...of loop   ---> arrays & strings
  for(let fruit of fruits){
    console.log(fruit)
  }

  let name = "Vipul";

  for(let char of name){
    console.log(char)
  }

  //for...in loop ---> objects (key & value pair)

  let emp = {
    name : "Aditya",
    age : 30,
    department : "QA"
  }

  for(let key in emp){
    console.log(key)
  }

    for(let key in emp){
    console.log(key + " : " +emp[key])
  }

  // nested for loop 

  for(let i = 1;i<=3;i++){
        for(let j = 1;j<=3;j++){
            console.log(i, j)           // 1, 1     1,2    1,3     // 2, 1  2,2  2,3  // 3,1   3,2   3,3
         }   
  }