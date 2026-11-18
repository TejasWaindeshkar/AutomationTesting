// Exception Handling?
// What is Exception? -- It is an unexpected event or error that occurs during program execution and intrupts normal flow of execution.
// Exception Handling? -- is uded to handle runtime errors gracefully so that program does not crash un expectedly.

// try, catch, finally, throw.
// console.log(username);  // ReferenceError: username is not defined
// let num = 10;
// num.toUpperCase();  // TypeError: num.toUpperCase is not a function
// if(true{
//     console.log("Hello")
// })      // SyntaxError: Unexpected token '{'

//let arr = new Array(-1);    // RangeError: Invalid array length

// try catch block
try{
    let arr = new Array(-1); 
}catch(error){
    console.log("Exception Handled")
    console.log(error.message)
}


try{
    let num = 10;
    num.toUpperCase()
}catch(e){
    console.log(e.message)
}

// throw statement - used to create custom exception.
// let age = 15;
// if(age<18){
//     throw new Error("Age is must be 18 or above");  // create custom exception
// }

function withdraw(balance,amount){
    if(amount>balance){
        throw new Error("Insufficient Amount")
    }
    let remainingBalance = balance - amount;
    console.log(remainingBalance);
}

try{
    withdraw(5000,7000)
}catch(error){
    console.log(error.message)
}


// finally block ---- the finally block always executes whether an error occurs or not occurs.

//let a = 10;
try{
    console.log(a)
}catch(error){
    console.log(error.message)
} finally{
    console.log("Always Executed")
}
