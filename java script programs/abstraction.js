// What is Abstraction?
// Abstraction is the process of hiding implementation details and exposing the necessary functionlaties to the user.
// it helps reduce complexity and improve code maintenabilty.

class Car{
    #startEngine(){
        console.log("Checking Battery")
        console.log("Injecting Fuel...")
        console.log("Starting Engine...")
    }
    start(){
        this.#startEngine();
        console.log("Car is ready to drive....")
    }
}

const car = new Car();
car.start()