// Data Types: 2 categories 

let firstName;
console.log(typeof(firstName))

// primitive Data Types - store a single value and these are immutable.
// Non Primitive Data Types - store collection of data are mutable.

// primitive Data Types
// 1. string
// 2. number
// 3. BigInt
// 4 Boolean
// 5. undefined
// 6. null 
// 7. symbol

// Non Primitive Data Types
// 1. object
// 2. Array
// 3. Function
// 4. Date
// 5. Map
// 6. Set

// 1. string - used to store text.

let name = "Vipul";
name[0]='v';
console.log(name[0])
console.log(name)
let city = 'pune';
let lastName = `Mahanubhav`

console.log(typeof(name))

//2 Number. --> used for integers and decimal values.
let age = 25;
let salary = 156000.35;
console.log(typeof(age))

//3 . BigInt -> used to store very large integers beyong number limits.

let bigNumber = 1234567898765432123456789098765432123456n;

//4. Boolean ---> represnts true or false.
let isAdmin = false;
console.log(age>=18)

//5. undefined ---> A varible declared but not assigned any value.

let LastName;
console.log(LastName)

//6. Null --> represents an intentional empty value.

let user = null;
console.log(user)

//7 Symbol ---> creates unique identifiers.
let id1 = Symbol("()=>")
console.log(id1)

// Non Primitive Data Types --> store collections of values. mutable
// 1 object
// 2 Array
// 3 Function
// 4 Date
// 5 Map
// 6 Set

// 1 object ---> An object store data in key value pair.

let employee = {
    name: "Aditya",
    age: 30,
    role: "Automation Test Enginner",
    101: "A-A01" 
}

// name,age,role ---> keys (properties)
// "Aditya", 30, "Automation Test Enginner" ----> values 

console.log(employee)
console.log(employee.name)
console.log(employee["role"])
employee.company = "Apexon";    // Adding property
console.log(employee)
employee.age = 31;
console.log(employee)
delete employee.company;
console.log(employee)

// 2. Array ---> An array is used to store multiple values in single variable.

let browsers = ["Chrome","Firefox","Safari","Opera","Edge","IE",90,true,null]
console.log(browsers)
// indexes ---> 0th 
console.log(browsers[0])
console.log(browsers[2])

browsers.push("webkit")
console.log(browsers)
browsers.pop(); //---> remove last element
console.log(browsers)

//3. Function ---> A function is a reusable block of code.

function addition(a,b){
    return a + b;
}

console.log(addition(10,15))
console.log(addition(15,15))

// function login(username,password){
//     page.locator("#username").fill(username)
//     page.locator("#password").fill(password)
//     page.locator("#login").click()
// }

// login("Admin","admin123")

//4. Date ---> the Date object it used to work with date and time.
let today = new Date();
console.log(today)
console.log(today.getFullYear())
console.log(today.getMonth())
console.log(today.getDate())
console.log(today.getDay())
console.log(today.getTime())

// 5. Map ---> A Map store data in key & value pair.
// A map can use different types of values as keys.
let users = new Map();
users.set(1,"Aditya")
users.set(2,"Bhagyashri")
users.set(3,"Ramesh")
users.set("id","A-101")
console.log(users)
console.log(users.get(1))
console.log(users.has(4))
users.delete(3)
console.log(users)

// 6. Set ----> A set store unique values.
// duplicate values are automatically removed.

let numbers = [10,20,30,40,50,10,30,20]
console.log(numbers)

let snumbers = new Set(numbers)
console.log(snumbers)

snumbers.add(56)
console.log(snumbers)
