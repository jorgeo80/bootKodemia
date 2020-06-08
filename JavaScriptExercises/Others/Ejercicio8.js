// Classes and Modules
class Car {

}

let car = new Car();
console.log(car)

// Constructors and Properties
class Car {
    constructor(id){
        this.id = id
    }

}

let car = new Car(123);
console.log(car.id)

// Methods

class Car {
    constructor(id){
        this.id = id
    }
    identify(){
        return `Car Id: ${this.id}`
    }
}

let car = new Car(123);
console.log(car.identify())

// Inheritance

class Vehicle {
    constructor() {
        this.type = 'car'
    }
    start() {
        return `Starting: ${this.type}`
    }
}

class Car1 extends Vehicle {
    // constructor() {
    //     super()
    // }
    start() {
        return `in Car start ${super.start()}`
    }

}

let car1 = new Car1();
console.log(JSON.stringify(car1))
console.log(car1.type)
console.log(car1.start())

// Creating a Module

// most be in sperate file
export class Car {
    constructor(id){
        this.id = id
    }
}

// in main file
import { Car } from './models/car.js'
let car = new Car(123)
console.log(car)




