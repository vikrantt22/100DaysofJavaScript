let age = 40

// console.log(age);
// console.log(typeof(age));

age = String(age);
// console.log(age);
// console.log(typeof(age));

let isLoggedIn = true // it can be converted to 1 on number conversion
// on converting empty string into boolean it gets false

let numIsLoggedIn = Number(isLoggedIn)
// console.log(numIsLoggedIn);

// NaN => not a number is assigned when a string that cannot be converted to number is converted to number
let name = "123vikrant"

let numName = Number(name)
// console.log(numName);

// undefined => undefined is also gets converted into NaN
let sid = undefined

let numsid = Number(sid)
// console.log(numsid);

// when null is converted into number is converts into 0
let sname = null;
let numSname = Number(sname);
// console.log(numSname);

// *************** Operations ***************

// console.log(3+3)
// console.log(3-3)
// console.log(3*3)
// console.log(3**3)
// console.log(3/3)
// console.log(3%3)

let str1 = 'Vikrant'
let str2 = ' Salunkhe'
let str3 = str1 + str2

// console.log(str3);

console.log(1 + "2")
console.log("1" + 2)
console.log("1" + 2 + 3)
console.log(1 + 2 + "3")


//operator conversion can also be done by using + symbol
// console.log(+true)
// console.log(+false)

//incremental operator

let num1 = 10
num1++
// console.log(num1); // 11 (first use value then increment)

let num2 = 10
++num2
// console.log(num2); // 11 (first increment then use value)

let myName = "vikrant"
myName = Number(myName)
console.log(myName)

console.log("2" == 2) // true
console.log("2" === 2) // strict check with datatype gives false

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // coverts null into zero gives true

// equality operator and comparison operator works on different logic equality operator doesn't involve conversion of datatypes

console.log(undefined == 0) //false
console.log(undefined > 0) //false
console.log(undefined >= 0) //false