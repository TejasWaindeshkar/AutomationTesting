console.log("welcome to Utkarshaa Academy Pune")
console.log("Welcome Tejas")

// variables 
// declare - 3 ways
// 1. var keyword (legacy way) - Not recomended
// 2. let keyword
// 3. const keyword

let age = 25;
age = 26
console.log(age)

var name = "Ramesh"
var name = "Ramesh Tambe"
name = "Tejas";
console.log(name)

// const pi = 3.14159;
// // pi = 3.15; // TypeError: Assignment to constant variable.
// console.log(pi)
/*
Bank ---> Account open (saving) ----> Account Number (Fix) ---> Balance (change)
const AccountNumber = '1234567898765';
let balance = '1000';

*/
// 1. var keyword (legacy way) - Not recomended -- older way 

var AccountNumber = 123456789
console.log(AccountNumber)
AccountNumber = 987654321   // reassigned 
console.log(AccountNumber)

var AccountNumber = 987654322   // redeclare (limitation)
console.log(AccountNumber)

// Function Scoped ---> limitation 
// what is function.
function greet(){
    var name = "Tejas";
    var age = 25;
    if(true){
        var city = "pune";
    }
    console.log(name)
    console.log(age)
    console.log(city)
}

greet()
greet()

function add(a,b){
    return a + b ;
}

console.log(add(10,20))
console.log(add(20,20))

// console.log(city)   // ReferenceError: city is not defined
if(true){
        var x = 10;
    }
    
console.log(x)

// let variable -- Modern way (ES6)

let Balance = 10000;
console.log(Balance)
Balance = 15000;    // reassign
console.log(Balance)

// let Balance = 15000;    // redeclare
console.log(Balance)
// let block scoped

if(true){
        let y = 15;
        console.log(y)
    }
    

    for(let i = 0;i<=10;i++){
        console.log(i)
    }
 //   console.log(i)
// console.log(y) // ReferenceError: y is not defined

//3 const -- block scoped
// cannot reassign or redclare

const pi = 3.14159;
//pi = 3.15; // TypeError: Assignment to constant variable.
console.log(pi)

// const pi = 3.15; // TypeError: Assignment to constant variable.
console.log(pi)
 
// Hoisting 
// Java script moves declarations to the top of their applicable scope during execution setup.

// console.log(browser)
// var browser = "chrome"
// console.log(browser)
//const browser;
// let browser 
// console.log(browser) // ReferenceError: Cannot access 'browser' before initialization TDZ - Temporal Dead Zone
// let browser = "chrome" 


//console.log(browser) // ReferenceError: Cannot access 'browser' before initialization TDZ - Temporal Dead Zone
//const browser = "chrome" 


// Naming Rules for Variables.
// valid variable Names
// let name;
let firstName;
let _user;
let $amount;
let user123;

// inavalid variables Names
// let 123name;
// let first-name;
// let var;
// let class;
// let switch;


//Rules: 
// 1 Variable Names can contains letters, digits, _, $.
// 2 cannot start with number.
// 3 cannot use java script reserved keyword.
// 4 java script case sensitive.

let lastName = "Ghadi";
let LastName = "Mahamuni";

console.log(LastName)