// oops - object oriented programming sysyem.
// 4 pillars - Inheritance, polymorphism, Abstraction, Encapsulation.

// Inheritance - it is an oop concept.
// Where one class can acquire the properties and methods of another class.
// Reuse existing code
// Avoid duplicate code
// create parent-child relationship.
// extends 
// super

class Animal{
    eat(){
        console.log("Animal is eating")
    }
}

class Dog extends Animal{  // dog - child class  Animal -- parent class
    bark(){
        console.log("Dog is barking")
    }
}

let dog = new Dog();
dog.eat()       // Inherited method
dog.bark()      // own method

// Animal ---> parent class/ super class / Base class
// Dog ------> child class / Sub class / derived class
// extends ---> Establishes inheritance
// eat() ----> Parent class method (inherited method)
// bark()  ---> child class method


// Types of Inheritance
// Single Inheritance
// Multilevel Inheritance
// Hierarchical Inheritance
// Multiple Inheritance --- Not Supported
// Hybrid Inheritance

// Single Inheritance - one child class inherits from one parent class.
class Employee{
    work(){
        console.log("Employee is working")
    }
}

class Developer extends Employee{
    code(){
        console.log("Developer is coding")
    }
}

let dev = new Developer();
dev.code()
dev.work()

// Multilevel Inheritance --> A class inherits from another class and third class inherits from the second class.

// GrandParent  ---> parent ---> child


// class Animal{
//     eat(){
//         console.log("Animal is eating")
//     }
// }

// class Dog extends Animal{  // dog - child class  Animal -- parent class
//     bark(){
//         console.log("Dog is barking")
//     }
// }

class puppy extends Dog{
    play(){
        console.log("puppy is playing")
    }
}

let p1 = new puppy()
p1.play()   // own method
p1.bark()   // inherited from parent
p1.eat()    // parent inherited from grandparent

//  Hierarchical Inheritance ---> multiple child classes inherits from same parent.
            /* Animal (parent class) 
                      |
                      |
                      |
        // Dog       Cat        // tiger   
        */   
// class Animal{
//     eat(){
//         console.log("Animal is eating")
//     }
// }

// class Dog extends Animal{  // dog - child class  Animal -- parent class
//     bark(){
//         console.log("Dog is barking")
//     }
// }

class Cat extends Animal{  // Cat - child class  Animal -- parent class
    meow(){
        console.log("Cat is Meowing")
    }
}

class tiger extends Animal{
    roar(){
        console.log("Tiger is roaring")
    }
}

let c1 = new Cat()
c1.meow() // own method
c1.eat() // parent class method

let t1 = new tiger()
t1.eat()        // parent method
t1.roar()       // own method


// Multiple Inheritance --> one child class inherits directly from multiple parents.
/*
        parent1      parent2
            \        /
               child

*/

class A{
    methodA(){
        console.log("A")
    }
}

class B{
    methodB(){
        console.log("B")
    }
}

// class C extends A, B{   // Not supported

// }

// mixins

const CanEat ={
    eat(){
        console.log("Eating")
    }
}

const CanWalk = {
    walk(){
        console.log("Walking")
    }
}

class Animal1{}

Object.assign(Animal1.prototype, CanEat, CanWalk);      // mixins

let animal = new Animal1()
animal.walk()
animal.eat()

// Hybrid Inheritance --> it is combination of two or more inheritance types
// Hierarchical + multilevel  ==> hybrid

/*
        Animal
      /    |   \
   Dog    Cat    Tiger     
    |
  puppy

*/

// super keyword
// super can call a method from a parent class.

class Animal2{
    sound(){
        console.log("Animal makes sound")
    }
}

class Dog1 extends Animal2{
    sound(){
        super.sound();  // calls parent method
        console.log("Dog barks")
    }
}

const dog1 = new Dog1()
dog1.sound()

// super()  in constructor
class Animal3{
    constructor(name){
        this.name = name;
    }
    display(){
        console.log(`Animal Name: ${this.name}`)
    }
}

class Dog2 extends Animal3{
    constructor(name,bread){
        super(name); // calls parent class constructor
        this.bread = bread;
    }
    showdeatils(){
        console.log(`Name: ${this.name}`)
        console.log(`Bread: ${this.bread}`)
    }

}

let dog2 = new Dog2("Tommy","Labrodor")
dog2.showdeatils()