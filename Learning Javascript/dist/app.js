// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person = {
    name: "Cindy",
    age: 28,
    country: "Austrailia"
}

function logData() {
    return person.name + " is " + person.age + " years old and lives in " + person.country
}

console.log(logData())

let age = 15

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age < 6) {
    console.log("free")
} else if (age < 18) {
    console.log("child discount")
} else if (age < 27) {
    console.log("student discount")
} else if (age < 67) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}

//Practicing for loops
// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
// console.log("The 5 largest countries in the world:")
// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i])
// }

//Practicing unshift, shift, pop, push
let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries.shift()
largeCountries.unshift("China")
largeCountries.pop()
largeCountries.push("Pakistan")

console.log(largeCountries)

//Practicing logical operators
let dayOfMonth = 31
let weekday = "Friday"

if (dayOfMonth === 13 && weekday === "Friday") {
    console.log("😱")
}

// Create a function that returns a random item from the array
let hands = ["rock", "paper", "scissor"]

function getHand() {
    let randomIndex = Math.floor(Math.random() * hands.length)
    return hands[randomIndex]
}

console.log(getHand())


//Newer version of how to run a function when a button is clicked
// let inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function () {
//     console.log("Button clicked from addEventListener")
// })

//If possible, use const. If not, use let.
const basePrice = 260
const discount = 120
let shippingCost = 12
let shippingTime = "5-7 days"

shippingCost = 15
shippingTime = "7-14 days"

let totalPurchase = basePrice + shippingCost / discount

console.log("Total Estimate: $" + totalPurchase + ". Shipping in " + shippingTime)

let mySaves = []

for (let i = 0; i < mySaves.length; i++) {
    //     //The += allows the loop to take the previous value and concatenate it with the current array the user is looking at
    ulEl.innerHTML += "<li>" + mySaves[i] + "</li>"
}

// How to use .innerHTML to render a Buy! button inside a div container
const container = document.getElementById("container")
container.innerHTML = "<button onclick='buy()'>Buy!</button>"
my first solution-- > container.innerHTML = "<button>" "Buy!" "</button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

function buy() {
    // Use += because this signifies it ADDING to the DOM instead of replacing the previous element
    container.innerHTML += "<p>Thank you for buying!</p>"
}

