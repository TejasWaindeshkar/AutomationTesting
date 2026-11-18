// conditional statement - used to perform different actions on different conditions.
// flow control - program execution.
// if statement
// if else statement
// if else if statement
// switch statement
// Nested if statement.


// if statement - if statement executes block of code only if condition is true.
// Syntax
/*
    if(condition){
        // block of code
    }
*/
let age = 18;
if(age>=18){
    console.log("Eligible for Voting")
}

// if else statement - statement executes one of the block. if condition is true then it will executes if block of code & if condition is false then it will executes else block of code.
// Syntax
/*
  if(condition){
        // block of code
    } else{
            // block of code
        }

*/

if(age>=18){
    console.log("Eligible for Voting")
}else{
    console.log("Not Eligible for Voting")
}

let marks = 34;
if(marks >= 35){
    console.log("Pass")
}else{
    console.log("Fail")
}


// if else if ladder statement - used when multiple conditions need to be checked.

// Syntax
/*
    if(condition){
    
    } else if(condition){
     
    } else if(condition){
     
    } else if(condition){
     
    } else if(condition){
     
    } else if(condition){
     
    } else{
        
}

*/

let score = 80;

if(score>=90){
    console.log("Grade A+")
} else if(score >= 75){
    console.log("Grade A")
} else if(score >= 60){
    console.log("Grade B+")
} else if(score >= 40){
    console.log("Grade B")
} else if(score >= 35){
    console.log("Grade Pass")
} else{
    console.log("Fail")
}

// switch statement / switch case statement - used when we want to execute different block of code based on different values of a variable.
// Syntax
/*
    switch(expression){
        case value1:
            // block of code
        break;    
         case value2:
            // block of code
        break;  
         case value3:
            // block of code
        break;  
         case value1:
            // block of code
        break;  
        default:
            // default block of code
    }

*/

let day = 4;
switch(day){
    case 1:
        console.log("Monday")
    break;
    case 2:
        console.log("Tuesday")  
    break;
     case 3:
        console.log("Wedsday")  
    break;
     case 4:
        console.log("Thursday")  
    break;
     case 5:
        console.log("Friday")  
    break;
     case 6:
        console.log("Saturday")  
    break;
     case 7:
        console.log("Sunday")  
    break;
    default:
        console.log("Invalid day")
}

let Grade = "D"

switch(Grade){
    case "A+":
        console.log("Score is more than 90%")
    break;
      case "A":
        console.log("Score is more than 75%")
    break;
      case "B+":
        console.log("Score is more than 60%")
    break;
      case "B":
        console.log("Score is more than 40%")
    break;
      case "Pass":
        console.log("Score is more than 35%")
    break;
      default:
        console.log("Score is less than 35%")    
}

// Nested If Statement - if statement inside another if statement.
// Syntax
/*
    if(condition){
        
        if(condition){
            }
    }
*/

age = 18;
let hasLicense = false;
if(age>=18){
    if(hasLicense){
        console.log("Eligible for Driving")
    }else{
        console.log("License Required")
    }
}else{
    console.log("Not Eleible for Driving due to Age")
}