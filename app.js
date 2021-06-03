// let dog = {
//   name: 'Beef',
//   age: 2,
//   breed: 'Chihuahua',
//   bark () {
//     console.log(`Woof woof! My name is ${this.name}`)
//     const sayAge = () => {
//       console.log(`I am ${this.age} years old!`)
//     }
//     sayAge()
//   }
// }

// dog.bark()

// function User (name, username, email, password) {
//   this.name = name
//   this.username = username
//   this.email = email
//   this.password = password
// this.level = 'standard user'
// this.printInfo = function () {
//   console.log(`
//     Name: ${this.name}
//     Username: ${this.username}
//     Email: ${this.email}
//     Password: ${this.password}
//     Level: ${this.level}
//   `)
// }
// }

// const user1 = new User('John Doe', 'johndoe', 'johndoe@gmail.com', 'password1234')

// user1.printInfo()

class User {
  constructor (name, username, email, password) {
    this.name = name
    this.username = username
    this.email = email
    this.password = password
    this.level = 'standard user'
  }

  printInfo () {
    console.log(`
      Name: ${this.name}
      Username: ${this.username}
      Email: ${this.email}
      Password: ${this.password}
      Level: ${this.level}
    `)
  }
}

const user1 = new User('John Doe', 'johndoe', 'johndoe@gmail.com', 'password1234')

user1.printInfo()
