// String Programs
// Reverse String
// check string is palindrome?
let str = "madam";
let reverse = str.split("").reverse().join(""); // split -- ['m','a','m','a','m'] ---> reverse ['m','a','m','a','m']  ---> 'madam'
console.log(reverse);
if(str === reverse){
    console.log("Palindrome")
} else{
    console.log("Not A palindrome")
}

str = "JavaScript";
let rev = "";
for(let i = str.length-1;i>=0;i--){     // i = 9  , 8
    rev = rev + str[i];                 // str[9] = t    // rev = tp
}
console.log(rev)


// remove duplicate characters
let str1 = "automation"; // ato 

let result = [...new Set(str1)]
console.log(result.join(""))


// non duplicate 
let nondup = new Set();
for(let char of str1){
    if(nondup.has(char)){
        console.log(char)
    }
    nondup.add(char)
    console.log(nondup)
}

// check anagram --- if two strings are anagram if they contain the same characters

// listen
// silent

// state
// taste

let str2 = "state"
let str3 = "taste"

let result1 = str2.toLowerCase().split("").sort().join("") 
let result2 = str3.toLowerCase().split("").sort().join("")
if(result1 === result2){
    console.log("Anagarm")
}else{
    console.log("Not Anagram")
}


// "playwright Automation"
// "noitamotuA thgirwyalp"

let str4 = "playwright Automation"
let revr ="";
for(let i = str4.length-1;i>=0;i--){    
    revr = revr + str4[i];                
}
console.log(revr)

// "playwright Automation"
// "thgirwyalp noitamotuA"
let str6 = "playwright Automation"
// let str5 = str6.split(" ").map(word => word.split().reverse().join("")).join(" ");
// console.log(str5)
// let res1 = str5.split(" ").reverse().join(" ");
// console.log(res1)

let words = str6.split(" ");
let res1 = "";
for(let i = 0; i< words.length;i++){
    let reverseword = "";
    for(let j = words[i].length-1; j >= 0; j--){
        reverseword = reverseword + words[i][j]
    }
    res1 += reverseword + " ";
}
console.log(str6)
console.log(res1)

// count vowels in a string
// aeiou

let str7 = "JavaScript";
let count = 0;
for(let i = 0; i < str7.length; i++){
    if("aeiouAEIOU".includes(str7[i])){
        count++;
    }
} 
console.log(count)