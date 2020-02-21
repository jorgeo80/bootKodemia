class Tirangle {
  constructor(side1, side2, side3) {
    this.side1 = side1
    this.side2 = side2
    this.side3 = side3
  }
  get perimeter() {
    const value = this.side1 + this.side2 + this.side3
    return value
  }
  set perimeter(value) {
    const values = value / 3
    this.side1 = values 
    this.side2 = values 
    this.side3 = values 
  }
}

const tirangle1 = new Tirangle(10, 10, 10)
const tirangle2 = new Tirangle(11, 11, 11)
const tirangle3 = new Tirangle(12, 12, 12)

console.log('Triangle 1: ', tirangle1)
console.log('Triangle 2: ', tirangle2)
console.log('Triangle 3: ', tirangle3)


