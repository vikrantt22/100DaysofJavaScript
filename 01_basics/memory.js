// stack memory => primitive datatypes (pass by value)
//Heap memory => Non-primitive datatype (pass by reference)

let name = "vikrant"
let anotherName = name

console.log(anotherName)

anotherName = "savita"
console.log(anotherName)
console.log(name)

//all of the above code is stored in a stack memory hence only another name copy of name gets change but not name

//Heap memory (pass by reference)

let userOne = {
    email : "vikrantsalunkhe731@gmail.com",
    rollNo : 46
}

console.log(userOne.email)

let userTwo = userOne //making userTwo object by passing the values of userOne object

userTwo.email = "vikrant.signin22@gmail.com" //modified email property

console.log(userOne.email) //beause the value is passed by reference therefore the userOne property got also change on modifying userTwo property




