// Numbers

const score = 400
// console.log(score)

const balance = new Number(400)
// console.log(balance);

const stringNumber = balance.toString();

// console.log(stringNumber)
// console.log(typeof(stringNumber)) // converted the numbers datatype into string using toString function in Number object

const otherNumber = new Number(100000000)
// console.log(otherNumber.toLocaleString()) // gives us the comma seperated values in us format
// console.log(otherNumber.toLocaleString("en-IN")) // in indian format using "en-IN"

const randomNumber = new Number(1000.8976)
// console.log(randomNumber);

// console.log(randomNumber.toPrecision(5)) // gives us the precise value

// console.log(balance.toFixed(2)) // gives the floating number upto specified decimal point

//*************************** Maths ***************************

console.log(Math)

const randomNum = Math.random() * 6 + 1
console.log(Math.floor(randomNum));

// for generating values between specific values
// (Math.random() * (max - min + 1)) + min


