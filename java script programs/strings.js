// what is string in javascript?
// A string is a sequence of characters used to represent text. In JavaScript, strings are one of the primitive data types and are used to store and manipulate textual data. Strings can be created using single quotes (' '), double quotes (" "), or backticks (` `) for template literals.
let name = "Aditya  Ghadi"
let city = 'Pune'
let country = `India`
let description = `My name is ${name} and I live in ${city}, ${country}.`
let description1 = 'My name is ' + name + ' and I live in ' + city + ', ' + country + '.'
console.log(description1) // Output: My name is Aditya Ghadi and I live in Pune, India.
console.log(description) // Output: My name is Aditya Ghadi and I live in Pune, India.
city[0]='p';
console.log(city) // Output: Pune
console.log(typeof(city)) // Output: string

// string constructor
let stringObject = new String("Hello, World!");
console.log(stringObject) // Output: [String: 'Hello, World!']
console.log(typeof(stringObject)) // Output: object

// methods of string
// 1. length property ---> returns the number of characters in a string.
console.log(name.length) // Output: 13  
console.log(city.length) // Output: 4
console.log(description.length) // Output: 51

// 2. charAt() method ---> returns the character at a specified index in a string.
console.log(name.charAt(0)) // Output: A
console.log(city.charAt(1)) // Output: u
console.log(description.charAt(11)) // Output: A

for(let char of city){
    console.log(char)
}

for(let i=0; i<name.length; i++){
    console.log(name.charAt(i))
}

// 3. concat() method ---> concatenates two or more strings and returns a new string.
let str1 = "Hello";
let str2 = "World";
let str3 = str1.concat(" ", str2, " ", name, " ", city, " ", country);
console.log(str3) // Output: Hello World

// 4. includes() method ---> determines whether a string contains a specified substring and returns true or false.
let str4 = "JavaScript is a programming language.";
console.log(str4.includes("programming")) // Output: true
console.log(str4.includes("Python")) // Output: false

// 5. indexOf() method ---> returns the index of the first occurrence of a specified substring in a string. If the substring is not found, it returns -1.
let str5 = "JavaScript is a programming language & Java is also programming language.";
console.log(str5.indexOf("programming")) // Output: 16
console.log(str5.indexOf("Python")) // Output: -1

// 6. lastIndexOf() method ---> returns the index of the last occurrence of a specified substring in a string. If the substring is not found, it returns -1.
console.log(str5.lastIndexOf("programming")) // Output: 52
console.log(str5.lastIndexOf("Python")) // Output: -1   

// 7. toUpperCase() method ---> converts a string to uppercase letters and returns a new string.
let str6 = "JavaScript is a programming language.";
let upperStr = str6.toUpperCase();
console.log(upperStr) // Output: JAVASCRIPT IS A PROGRAMMING LANGUAGE.    
console.log(str6) // Output: JavaScript is a programming language. (original string remains unchanged)

//8. toLowerCase() method ---> converts a string to lowercase letters and returns a new string.
let lowerStr = upperStr.toLowerCase();
console.log(lowerStr) // Output: javascript is a programming language.
console.log(upperStr) // Output: JAVASCRIPT IS A PROGRAMMING LANGUAGE.

// 9. slice() method ---> extracts a section of a string and returns it as a new string, without modifying the original string.
let str7 = "JavaScript is a programming language.";
let slicedStr = str7.slice(0, 10);
console.log(slicedStr) // Output: JavaScript
console.log(str7) // Output: JavaScript is a programming language. (original string remains unchanged)
let slicedStr1 = str7.slice(-10);
console.log(slicedStr1) // Output: language.

// 10. substring() method ---> returns a portion of the string between the start and end indexes, or to the end of the string.
let str8 = "JavaScript is a programming language.";
let substringStr = str8.substring(0, 10);
console.log(substringStr) // Output: JavaScript
console.log(str8) // Output: JavaScript is a programming language. (original string remains unchanged)
let substringStr1 = str8.substring(-10);    -10 == 0
console.log(substringStr1) // Output: is a programming language.
// what is the difference between slice() and substring() method?
// The slice() method can accept negative indices, which count from the end of the string, while the substring() method does not accept negative indices. 
// The slice() method can also accept a second parameter that specifies the end index, while the substring() method only accepts a start index and an optional end index. 
// The slice() method returns a new string, while the substring() method also returns a new string. 

// 11. trim() method ---> removes whitespace from both ends of a string and returns a new string.
let str9 = "   JavaScript is a programming language.   ";
console.log(str9.length) // Output: 35
let trimmedStr = str9.trim();
console.log(trimmedStr.length) // Output: 31
console.log(trimmedStr) // Output: JavaScript is a programming language.
console.log(str9) // Output:    JavaScript is a programming language.   (original string remains unchanged)

// 12. trimStart() method ---> removes whitespace from the beginning of a string and returns a new string.
let str10 = "   JavaScript is a programming language.   ";
console.log(str10.length) // Output: 35
let trimmedStartStr = str10.trimStart();
console.log(trimmedStartStr.length) // Output: 31
console.log(trimmedStartStr) // Output: JavaScript is a programming language.   ;
console.log(str10) // Output:    JavaScript is a programming language.   (original string remains unchanged)

// 13. trimEnd() method ---> removes whitespace from the end of a string and returns a new string.
let str11 = "   JavaScript is a programming language.   ";
console.log(str11.length) // Output: 35
let trimmedEndStr = str11.trimEnd();    
console.log(trimmedEndStr.length) // Output: 31
console.log(trimmedEndStr) // Output:    JavaScript is a programming language.
console.log(str11) // Output:   JavaScript is a programming language.    (original string remains unchanged)

// 14. replace() method ---> returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
let str12 = "JavaScript is a programming language. JavaScript is also a scripting language.";
let replacedStr = str12.replace("JavaScript", "Python");
console.log(replacedStr) // Output: Python is a programming language. JavaScript is also a scripting language.
console.log(str12) // Output: JavaScript is a programming language. JavaScript is also a scripting language. (original string remains unchanged)  

// 15. replaceAll() method ---> returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
let str13 = "JavaScript is a programming language. JavaScript is also a scripting language.";
let replacedAllStr = str13.replaceAll("JavaScript", "Python");
console.log(replacedAllStr) // Output: Python is a programming language. Python is also a scripting language.
console.log(str13) // Output: JavaScript is a programming language. JavaScript is also a scripting language. (original string remains unchanged) 

// 16. split() method ---> splits a string into an array of substrings, and returns the new array. The split is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.
let str14 = "JavaScript is a programming language.";
let splitStr = str14.split(" ");
console.log(splitStr) // Output: [ 'JavaScript', 'is', 'a', 'programming', 'language.' ]
console.log(str14) // Output: JavaScript is a programming language. (original string remains unchanged)
let splitStr1 = str14.split("a");
console.log(splitStr1) // Output: [ 'JvScript is ', ' prgrmming l nguage.' ]
