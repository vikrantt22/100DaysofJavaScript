const user = {
    username: "vikrant",
    age : 21,
    greet : function() {
        console.log(`Welcome ${this.username}`)
        console.log(this)
    }
}


// const greet1 = () => {
//     console.log(this)
// }

// const greet2 = function() {
//     console.log(this)
// }

// greet1()
// greet2()

//implicite return

const greet = () => ({
    username: "vikrant",
    password: 1234,
})

console.log(greet())