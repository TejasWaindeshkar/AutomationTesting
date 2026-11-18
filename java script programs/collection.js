// what is collection?
// collection is way to store multiple values together.
// Indexed collection (Array) - An array stores multiple values in an ordered collection. 
// Keyed collection (Map & Set)
// Map - A Map stores data in key value pair.
// Set - A set stores unique values. duplicate values automatically removes.
const employee ={
    id : 101,
    name : "Sunita",
    role : "QA Engineer",
    101 : "value1"
}
console.log(employee)
// limitation - key must be string

// Map -->  A Map stores data in key value pair.

// Syntax
const map = new Map();
// Map Methods
// set method - setting the data
map.set("id",101);
map.set("name","Sunita")
map.set("role","QA Engineer")
map.set(101,"value1")

console.log(map)

// get method - getting the data
console.log(map.get("id"))
console.log(map.get("name"))
console.log(map.get("role"))


// has method - checking key exists - return boolean value (true & false)
console.log(map.has("id"))
console.log(map.has("id_name"))

// delete method ---> delete the entry
map.delete(101)
console.log(map)

// size method - get the size of the map
console.log(map.size)

// clear method - clean the map
// map.clear()
console.log(map)

for(const [key,value] of map){
    console.log(key,value)
}

map.forEach((value,key)=>{
    console.log(key,value)
})

// entries method
console.log(map.entries())

console.log(map.keys())

console.log(map.values())


// SET --->  A set stores unique values. duplicate values automatically removes.

const num = [10,20,30,40,10,20,67,78]

console.log(num)

const numbers = new Set(num);
console.log(numbers)

// add method 
numbers.add(87)
numbers.add(78)

console.log(numbers)


// delete method
numbers.delete(78)
console.log(numbers)

// has method
console.log(numbers.has(10))
console.log(numbers.has(100))

// size method
console.log(numbers.size)

// clear method
//numbers.clear()
console.log(numbers)

for(const number of numbers){
    console.log(number)
}

console.log("********************")
numbers.forEach((number)=>{
    console.log(number)
})

console.log(numbers.entries())
console.log(numbers.keys())
console.log(numbers.values())

// diff bet map & set