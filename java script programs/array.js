// what is Array in java script?
// An array is a special variable, which can hold more than one value at a time.
// It is a data structure that can hold a collection of values, which can be of different data types such as numbers, strings, objects, etc.

// How to create an array in JavaScript?
// There are four ways to create an array in JavaScript:
// 1. Using the Array constructor
// 2. Using the array literal syntax
// 3. Using the Array.of() method
// 4. Using the Array.from() method

// 1. Using the Array constructor
let fruits = new Array( "Orange", "Banana", "Apple", "Mango",);
console.log(typeof(fruits)); // object

// 2. Using the array literal syntax
let fruits1 = ["Apple", "Banana", "Mango", "Orange"];
console.log(typeof(fruits1)); // object

// 3. Using the Array.of() method
let fruits2 = Array.of("Apple", "Banana", "Mango", "Orange");
console.log(typeof(fruits2)); // object

// 4. Using the Array.from() method
let fruits3 = Array.from(["Apple", "Banana", "Mango", "Orange","Kiwi"]);
console.log(typeof(fruits3)); // object

// Array Methods    
// 1. length() method ---> returns the number of elements in an array.
console.log(fruits.length)
console.log(fruits3.length)


// 2. push() method ---> adds one or more elements to the end of an array and returns the new length of the array.
console.log(fruits)
fruits.push("Kiwi","Papaya")
console.log(fruits.length)
console.log(fruits) 

//3. pop() method ---> removes the last element from an array and returns that element. 
fruits.pop()
console.log(fruits.length)
console.log(fruits) 

// 4. shift() method ---> removes the first element from an array and returns that element.
fruits.shift()
console.log(fruits.length)
console.log(fruits)

// what is the difference between pop() and shift() method?
// The pop() method removes the last element from an array, while the shift() method removes the first element from an array. 
// The pop() method returns the removed element, while the shift() method also returns the removed element. 
// The pop() method changes the length of the array, while the shift() method also changes the length of the array. 

// 5. unshift() method ---> adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.unshift("Pineapple","Grapes")
console.log(fruits.length)
console.log(fruits)

// what is the difference between push() and unshift() method?
// The push() method adds one or more elements to the end of an array, while the unshift() method adds one or more elements to the beginning of an array. 
// The push() method returns the new length of the array, while the unshift() method also returns the new length of the array. 
// The push() method changes the length of the array, while the unshift() method also changes the length of the array.

// 6. splice() method ---> adds and/or removes elements from an array.
// Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)  
// startIndex: The index at which to start changing the array.
// deleteCount: The number of elements to remove from the array.
// item1, item2, ...: The elements to add to the array. 

fruits.splice(2,1,"Strawberry","Blueberry")
console.log(fruits.length)
console.log(fruits)

// 7. slice() method ---> returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
// Syntax: array.slice(startIndex, endIndex)  
// startIndex: The index at which to begin extraction.  
// endIndex: The index at which to end extraction. The element at this index will not be included in the new array.
let slicedFruits = fruits.slice(1,5)
console.log(slicedFruits)   
console.log(slicedFruits.length)
console.log(fruits)
let duplicateFruits = fruits.slice()
console.log(duplicateFruits)

// what is the difference between splice() and slice() method?
// The splice() method changes the original array, while the slice() method does not change the original array. 
// The splice() method can add and/or remove elements from an array, while the slice() method only returns a shallow copy of a portion of an array. 
// The splice() method takes three parameters: startIndex, deleteCount, and item1, item2, ..., while the slice() method takes two parameters: startIndex and endIndex.

//8. forEach() function ---> executes a provided function once for each array element.
fruits.forEach(function(fruit,index){ 
    console.log(fruit,index);
});

fruits.forEach((fruit,index) => console.log(fruit,index));   

// 8. map() function ---> creates a new array populated with the results of calling a provided function on every element in the calling array. 
let numbers = [6,4,1,3,2,5,10,11,12,13,14,15]
let CubeNumbers = numbers.map(function(number){
    return number * number * number;
})
console.log(numbers)
console.log(CubeNumbers)

// 9. filter() function ---> creates a new array with all elements that pass the test implemented by the provided function.
let evenNumbers = numbers.filter(function(number){
    return number % 2 === 0;
})

let oddNumbers = numbers.filter(function(number){
    return number % 2 !== 0;
})
console.log(evenNumbers)
console.log(oddNumbers)

// 10. reduce() function ---> executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let sum = numbers.reduce(function(sum, num){
    return sum + num;
},0)    
// sum = 1
// sum = 1 + 2 = 3  
// sum = 3 + 3 = 6
// sum = 6 + 4 = 10
// sum = 10 + 5 = 15
console.log(sum)

// 11. find() function ---> returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
let firstEvenNumber = numbers.find(function(number){
    return number % 2 === 0;
})
console.log(firstEvenNumber)

let findNumber = numbers.find(function(number){
    return number > 3;
})
console.log(findNumber)

// 12. sort() function ---> sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
let sortedNumbers = numbers.sort(function(a,b){
    return a - b;
})
console.log(sortedNumbers)
console.log(fruits)
fruits.sort()
console.log(fruits)

let sortedNumbersDesc = numbers.sort(function(a,b){
    return b - a;
})
console.log(sortedNumbersDesc)
numbers.sort()
console.log(numbers)

// 13. reverse() function ---> reverses the order of the elements of an array in place. (The first array element becomes the last, and the last array element becomes the first.)
let reversedNumbers = numbers.reverse()
console.log(reversedNumbers)

// 14. join() function ---> joins all elements of an array into a string.
console.log(typeof(fruits)) // object
let fruitsString = fruits.join(", ")
console.log(fruitsString)  
console.log(typeof(fruitsString)) // string 

// find unique elements in an array
let duplicateNumbers = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,1,2,3]
let uniqueNumbers = [...new Set(duplicateNumbers)]
console.log(uniqueNumbers)

// find duplicate elements in an array
let duplicateElements = duplicateNumbers.filter((item, index) => {
    return duplicateNumbers.indexOf(item) !== index;
}); 
console.log(duplicateElements)

// find the largest number in an array
let largestNumber = Math.max(...numbers)
console.log(largestNumber)

// find the smallest number in an array
let smallestNumber = Math.min(...numbers)
console.log(smallestNumber)

// find the second largest number in an array
let secondLargestNumber = numbers.sort((a,b) => b - a)[1]
console.log(secondLargestNumber)

// count the number of occurrences of each element in an array
let countOccurrences = duplicateNumbers.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;   // 1 = 2, 2 = 2, 3 = 2, 4 = 2, 5 = 2, 6 = 1, 7 = 1, 8 = 1, 9 = 1, 10 = 1
    return acc;
}, {});
console.log(countOccurrences)

const str = "Hello World Hello";
const words = str.split(" ");   
console.log(words) // ["Hello", "World", "Hello"]

const countWords = words.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
console.log(countWords)

// merge two arrays and remove duplicates
let array1 = [1,2,3,4,5]
let array2 = [4,5,6,7,8]
let mergedArray = [...new Set([...array1, ...array2])]
console.log(mergedArray) // [1, 2, 3, 4, 5, 6, 7, 8]    

// merge two arrays and keep duplicates
let mergedArrayWithDuplicates = [...array1, ...array2]
console.log(mergedArrayWithDuplicates) // [1, 2, 3, 4, 5, 4, 5, 6, 7, 8]        

// find common elements in two arrays
let commonElements = array1.filter(value => array2.includes(value))
console.log(commonElements) // [4, 5]   