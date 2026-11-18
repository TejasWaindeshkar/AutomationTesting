// What is Encapsulation?
// Encapsulation is the process of wrapping data and methods into a single unit and restricring direct access to internal data.

const employee = {
    name : "Vipul",
    salary : 75000
}

employee.salary = -100000; // invalid
console.log(employee)
console.log(employee.salary)

// anyone can update the direct salary.
// Enacapsulation - private fields(#), getters setters methods or closure

// getters setters
class Employee{
    constructor(name,salary){
     this.name = name;
     this._salary = salary;     // treat like private
    }

    getSalary(){        // getters
        return this._salary;
    }
    setSalary(amount){      // setters
        if(amount > 0){
            this._salary = amount;
        } else{
            console.log("Salary must be positive")
        }
    }
}

const emp = new Employee("Sonali",69000)
console.log(emp.getSalary())
emp.setSalary(-100000)
console.log(emp.getSalary())

// data is accessed through methods, allowing validations.


// private fields(#)

class BankAccount{
    #balance;  // private field
    constructor(balace){
        this.#balance = balace;
    }

    deposit(amount){
        this.#balance += amount;
    }
    getBalance(){
        return this.#balance;
    }
}

const acc = new BankAccount(100000)
acc.deposit(50000)
console.log(acc.getBalance())

// closure 

function bankAccount(balance){
    let currentBalance = balance;

    return{
        deposit(amount){
            currentBalance += amount;
        },
        getBalace(){
            return currentBalance;
        }
    }
}
const account = bankAccount(100000)
console.log(account.getBalace())
account.deposit(45000)
console.log(account.currentBalance)
console.log(account.getBalace())


class ATM{
    #pin = 4321;    // private field
    validatePin(inputpin){
        return this.#pin === inputpin;
    }
}

const atm = new ATM()
console.log(atm.validatePin(1234))
console.log(atm.validatePin(4321))