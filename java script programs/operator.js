// operators?
// what is operator?
// it is a special symbol used to perform operations on variables anf values.
// let a = 101;    // assignment operator
// Arithmetic operator.
// Assignment operator.
// Comparison operator.
// Ternary operator.
// Logical operator.

// Arithmetic operator.----> Arithmetic operations.
/*
    Addition (+)
    Substraction (-)
    Multiplication (*)
    Division (/)
    Modulos -- Reminder (%)
    Exponential -- (**)
    Increment (++)
    Decrement (--)
*/
//   Addition (+)
    let a = 10;
    let b = 20;
    let sum = a + b
    console.log(sum)
    console.log(10+30)

    let sub = a - b
    console.log(sub)

    let mul = a * b
    console.log(mul)

    let div = a / b
    console.log(div)

    let mod = 20 % 3
    console.log(mod)

    console.log(2**5)

    //   Increment (++)
    // pre increment (++a)
    // post increment (a++)
    console.log(a)
    console.log(a++) // 10 + 1 = 11 (post increment)
    console.log(a)  // 11
    console.log(++a)    // 12
    console.log(a--)    // post decrement
    console.log(a)
    console.log(--a)

    for(let i = 1;i<=10;i++){   // i = 1 1 + 1 = 2 == 2 + 1 = 3.......10.11
        console.log(i)
    }

    //  Assignment operator.
    /*
            = Assignment operator let x = 10;
            +=  x += 5  ===> (x = x + 5)    ===> x = 15
            -=  x -= 5  ===> (x = x - 5)    ===> x = 10
            *=  x*= 5   ===> (x = x * 5)    ===> x = 50
            /=  x /= 5  ===> (x = x / 5)    ===> x = 10
            %=  X %= 5  ===> (x = X % 5)    ===> x = 0
            **= x **= 5 ===> (x= x**5)      ===> x = 0
    */
   let x = 10;
   console.log(x += 5)
   console.log(x -= 5)
   console.log(x *= 5)
   console.log(x /= 5)
   console.log(x %= 5)
   x = 5
   console.log(x **= 5)

   // comparison Operator 
   /*
        equal to (==)
        strict equal to (===)
        Not Equal (!=)
        strict Not Equal (!==)
        > greater than
        < less than
        >= greater than equal to
        <= less than equal to
    */

    //     equal to (==) ---> compare only values.
    let m = 10;
    let n = "10";
    let k = 10;
    console.log(m==n) 

    //  strict equal to (===) compare values with data types
    console.log(m===n)
     console.log(m===k)
     console.log(m!=n)
     console.log(m!==n)
     console.log(m>n)
     console.log(m<n)
    console.log(m>=n)
    console.log(m<=n)

// Ternary operator ---> 

//  Symbol
// condition ? expressionTrue : expressionFalse;

let age = 17;
let message = age >= 18 ? "Adult" : "Minor"
console.log(message)

// Logical operator ---> used to combine conditions
// AND operator (&&)
// OR operator (||)
// Not operator  (!)

// AND operator ---> both constions should be true then result true
/*
    input consition                     output condition    
    A(true)         B(true)           ===> true
    A(false)        B(true)           ===> false
    A(true)         B(false)          ===> false
    A(false)        B(false)          ===> false  
*/
age  = 25;
let hasLicesnse = true;
console.log(age >= 18   && hasLicesnse)
age = 17;
console.log(age >= 18   && hasLicesnse)


// OR operator ---> either constion should be true then result true
/*
    input consition                     output condition    
    A(true)         B(true)           ===> true
    A(false)        B(true)           ===> true
    A(true)         B(false)          ===> true
    A(false)        B(false)          ===> false  
*/

console.log(age >= 18   ||  hasLicesnse)

// Not (!) ----> Reverse the result
console.log(hasLicesnse)
console.log(!hasLicesnse)