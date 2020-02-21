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
  static type(side1, side2, side3){
    if (side1 === side2 && side1 === side3) return 'Triangulo Regular'
    return 'Triangulo Irregular'
  }
}

class Triangle extends Polygon {
  constructor(side1, side2, side3, side4) {
    super(side1, side2, side3)
    this.side4 = side4
  }
  
}

const tirangle1 = new Tirangle(10, 10, 10)
const tirangle2 = new Tirangle(11, 11, 11)
const tirangle3 = new Tirangle(12, 12, 12)

console.log('Triangle 1: ', tirangle1, tirangle1.perimeter)
console.log('Triangle 2: ', tirangle2, tirangle2.perimeter)
console.log('Triangle 3: ', tirangle3, tirangle3.perimeter)

console.log(Tirangle.type(15, 15, 15))
console.log(Tirangle.type(10, 25, 15))
