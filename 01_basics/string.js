// strings in javaScript are primitive type but in java they are objects
// JS provides a functionality to treat strings as objects

let name = "Vikrant" //this is a primitive string

name = name.toUpperCase()
// console.log(name)

const firstName = 'Vikrant'
const lastName = 'Salunkhe'

// console.log(firstName + " " + lastName)

//concatinating string using backticks

// console.log(`${firstName} ${lastName}`)

const gameName = new String("call of duty")

// console.log(gameName)
// console.log(gameName.toUpperCase())
// console.log(gameName)
// // charAt() gives the character present at given index
// indexOf() return the index of character provided


const newName = name.slice(1, 5)
console.log(newName)