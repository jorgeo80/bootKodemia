// JSON - JavaScript Object Notation
let car = {
    id: 123,
    style: 'convertible'
}

console.log(JSON.stringify(car))

let carIds = [
    {
        carId: 123
    },
    {
        carId: 456
    },
    {
        carId: 789
    },
]

console.log(JSON.stringify(carIds))

let jsonIn = 
`   
    [ 
        {
            carId: 123
        },
        {
            carId: 456
        },
        {
            carId: 789
        }
    ]
`

let carIdsN = JSON.parse(jsonIn)
console.log(JSON.stringify(carIdsN))

// Arrays in JSON

let carArray = [
    {
        id: 123,
        style: 'sedan'
    },
    {
        id: 456,
        style: 'convertible'
    },
    {
        id: 789,
        style: 'sedan'
    }
]

carArray.forEach( car => console.log(car))
carArray.forEach( (car, index) => console.log(car, index))

let convertibles = carArray.filter(car => car.style === 'convertible')
console.log(convertibles)

let result = carArray.every(car => car.id > 0)
console.log(result)

let carFind = carArray.find(car => car.id > 500)
console.log(JSON.stringify(carFind))