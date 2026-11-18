// what is function?
// A Function is a reusable block of code that perform a specific task.
// Function Declaration
function greet(name){
        // body
        console.log("Hello All, Welcome....",name);
}
// calling a Function.
greet("Sumit");
greet("Tejas")

// Function Expression ---> A function assigned to a variable.

const greet1 = function(){
    console.log("Welcome")
}
greet1()

// Arrow Function
const greet2 = ()=>{
    console.log("Hello Welcome")
}
greet2()

// with parameters
const add = (a,b)=>{
    return a + b;
}
console.log(add(5,6))

const sub = (a,b) => a - b;
console.log(sub(7,4))

// Anonymous Function (unnamed function)
setTimeout(function(){
    console.log("Executed after 1 seconds")
},1000)

// IIFE (Immediately Invoked Function Expression)
// A function that runs immediately after it is defined.
let result = (function(){
    console.log("IIFE Function Executed")
})();

let multiplication = (function(a,b){
    console.log( a * b);
})(10,20);

// constructor Function - used to create objects
function person(name, age){
    this.name = name;
    this.age = age;
}

const p1 = new person("Ramesh",25)
const p2 = new person("Vipul",30)
console.log(p1.name)
console.log(p1.age)
console.log(p2)

// callback function
// A function passed as an argument  to another function.

function greet4(name,callback){
    console.log("Hello " + name)
    callback();
}

function bye(){
    console.log("Good Bye")
}
greet4("Sumit",bye)
greet4("Vipul",greet2)

// recursive function ---> A function calls itself.

function factorial(number){
    if(number === 1) return 1;
    return number * factorial(number - 1)
}
console.log(factorial(4))