// Rest Parameters

function sendCars(...allCarIds){
    allCarIds.forEach(id => console.log(id))
}

sendCars(100, 200, 555, 889)

// Exercise 1

function sendCars(day, ...allCarIds){
    allCarIds.forEach(id => console.log(day, id))
}

sendCars('Monday', 100, 200, 555, 889)

// Destructuring Arrays

let carIds = [1, 2, 5]
let car1, remaingCars;
[car1, ...remaingCars] = carIds;
console.log(car1, remaingCars)

// Destruncturing Objects
let car = {id: 5000, style: 'convertible'};
let id, style;
({id, style} = car);
console.log(id, style);

//Spread Syntax
function startCars(car1, car2, car3){
    console.log(car1, car2, car3)
}

let carIds = [1, 2, 3]
startCars(...carIds)
// 1 2 3
let carCodes = "abc";
startCars(... carCodes)
// a b c

//typeof()

typeof(1)             // number
typeof(true)          // boolean
typeof('hello')       // string
typeof(function(){})  // function
typeof({})            // object
typeof(null)          // object
typeof(undefined)     // undefined
typeof(NaN)           // number

// Common type conversions

foo.toString();                 // convert to string
Number.parseInt('55');          // 55 as a number
Number.parseFloat('55.99')      // 55.99 as a number

// Controlling Loops

let i = 0;
for (; i < 12; i++){
    if (i === 8){
        break; // Termina el loop cuando se cumple la condicion
    }
}
console.log(i)
// 0 1 2 3 4 5 6 7

let i = 0;
for (; i < 4; i++){
    if (i === 2){
        continue; // Salta el elemento y continua con el loop
    }
}
console.log(i)
// 0 1 3

// Functions and Scope

let message = 'Outside';
if (5 === 5){
    let message = 'Equal'
    console.log(message)
}
console.log(message)

// Immediatly Invoked Function Expression IIFE

let app = (function(){
    let carId = 123
    console.log('in function')
    return {}
})()

// Closures

let apps = (function(){
    let carId = 123
    let getId = function(){
        return carId;
    }
    return {
        getId: getId
    }
})()

console.log(apps.getId())

// the THIS keyword
let fn = function() {
    console.log(this === window)
}

fn() // true

let o = {
    carId: 123,
    getId: function(){
        return this.carId
    }
}

console.log(o.getId()) // 123

// Call and Apply

// call
let o = {
    carId: 123,
    getId: function(){
        return this.carId
    }
}

let newCar = {carId: 456}

console.log(o.getId.call(newCar)) // 456

// apply
let o1 = {
    carId: 123,
    getId: function(prefix){
        return prefix + this.carId
    }
}

let newCar = {carId: 456}

console.log(o1.getId.apply(newCar, ['ID: '])) // ID: 456

// bind

let o2 = {
    carId: 123,
    getId: function(){
        return this.carId
    }
}

let newCar = {carId: 456}
let newFn = o2.getId.bind(newCar)

console.log(newFn) // 456

// Arrow Functions

let getId = () => 123 // se puede usar un guion bajo "_" en lugar de los parentesis

let getId = prefix => prefix + 123;

let getId = (prefix, suffix) => prefix + 123 + suffix;

consle .log(getId('ID: ','!')) // ID: 123!

let getId = (prefix, suffix) => {
    return prefix + 123 + suffix
};

// Default parammeters

let trackCar = function(carId, city = 'NY'){
    console.log(`Tracking ${carId} in ${city}.`)
}

console.log(trackCar(123))
console.log(trackCar(123, 'Chicago'))