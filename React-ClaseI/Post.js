class Post {
  constructor(title, author, description, date, readTime, image) {
  this.title = title
  this.author = author
  this.description = description
  this.date = date
  this.readTime = readTime 
  this.image = image
  }
  get summary() {
    const value = `${this.author} - ${this.description}`
    return value
  }
  set authorDesc(string){
    const array = string.split('-')
    this.author = array[0]
    this.description = array[1]
  }
}

const Post1 = new Post('H1', 'Jorgeo80', 'Pruebas 1', '02/02/2020', '5 min', 'url.com')

console.log(JSON.stringify(Post1))
console.log(Post1.summary)
Post1.authorDesc = 'Jorge O - Pruebas 2'
console.log(Post1.summary)

