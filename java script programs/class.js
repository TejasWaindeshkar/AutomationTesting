// class & object, constructor.
// what is class? --> A class is blueprint for creating objects.
class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name}`)
        console.log(`My age is ${this.age}`)
    }
}

// constrctor()  initializes object properties.
// this refers to the current object
// greet() is method of the class.

// what is object?  ---> An object is an instance of a class.
const p1 = new person("Aditya",25)      // real time entity
const p2 = new person("Sunita",30)
const p3 = new person();
// Access the properties & methods
p1.greet()
p2.greet()
p3.greet()
console.log(p1.name)

// diff bet class & object
//          class                            object
// blueprint / template                    instance of an class
// defines properties and methods          contains actual data
// created using class keyword             created using new keyword
// one class can create multiple objects   each object is unique.
// class is logical entity                 object is real / physical entity
// class didn't required memory            object required memory.


// constructor
// A constructor is a special method inside the java script class.
// that automaticaaly called when a new object is created.
// it is mainly used to initialize the object properties.


class car{
       constructor(){   
        this.brand = "Toyota";
        this.model = "Innova";
       } 
}

const c1 = new car()
console.log(c1.model)
console.log(c1.brand)

const c2 = new car("Maruti Suziki","Grand Vitara")
console.log(c2.model)
console.log(c2.brand)

class student{
    constructor(name = "Ramesh", marks = 90){
        this.name = name;
        this.marks = marks;
    }
}

const s1 = new student();
console.log(s1.name)
console.log(s1.marks)

const s2 = new student("Vipul",98);
console.log(s2.name)
console.log(s2.marks)

class demo{
    hello(){
        console.log("Hello Welcome");
    }
}

const d1 = new demo();
d1.hello()