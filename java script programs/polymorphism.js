// What is polymorphism?
// Greek word 
// poly --> Many
// morphism ---> forms

// one name, many forms
// Method overriding
class Animal{
    sound(){
        console.log("Animal makes sound")
    }
}

class Dog extends Animal{
    sound(){        // method overriding
        console.log("Dog Barks")
    }
}

class Cat extends Animal{
    sound(){        // method overriding
        console.log("cat meows")
    }
}

let dog = new Dog()
dog.sound()

let cat = new Cat()
cat.sound()

// method name sound() same behavior is different.

class payment{
    pay(){
        console.log("Making payment")
    }
}

class CreditCard extends payment{
    pay(){
        console.log("Payment using credit card")
    }
}

class UPI extends payment{
    pay(){
        console.log("Payment using UPI")
    }
}

class NetBanking extends payment{
    pay(){
        console.log("Payment using Net Banking")
    }
}

let payments = [new CreditCard(), new UPI(), new NetBanking()]

payments.forEach(payment =>{
    payment.pay()
})

// RBI ----> Home Loan ---- ROI (6.00)
// SBI 

// Method oveloading --- Not supported 

class calculator{
    add(a,b){
        return a + b;
    }

    add(a,b,c){ // method overloading
        return a + b + c;
    }
}

let cal = new calculator();
console.log(cal.add(10,20))

// arguments.length
class Calculator{
    add(a,b,c){
        if(arguments.length === 2){
            return a + b;
        }
        if(arguments.length === 3){
            return a + b + c;
        }
    }
}
let calc = new Calculator();
console.log(calc.add(10,20))
console.log(calc.add(10,20,20))

// default parameters 

class Calculator1{
    add(a,b,c=0){
        return a+b+c;
    }
}

let calc1 = new Calculator1()
console.log(calc1.add(10,20))
console.log(calc1.add(10,20,25))

