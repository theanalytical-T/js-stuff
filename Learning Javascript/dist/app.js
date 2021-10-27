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

//appending means adding something at the end of the document
//createElement() creates an html element in the DOM

for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    // create element
    // set text content
    // append to ul
    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)
}

// let listItems = ""
// for (let i = 0; i < myLeads.length; i++) {
//     listItems = myLeads[i]
//     li = document.createElement("li")
//     li.textContent = listItems
//     ulEl.append(li)
// }

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

// truthy
// falsy

//These are falsy values
// false
// 0
// ""
// null --> How the developer signalizes emptiness
// undefined --> How JavaScript signalizes emptiness
// NaN

// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

// localStorage.setItem("myCredits", "100")
let myCredits = localStorage.getItem("myCredits")
console.log(myCredits)


// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

const janeBtn = document.getElementById("jane-btn")
janeBtn.addEventListener("click", function () {
    console.log(data[0].score)
})

// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge

function generateSentence(desc, arr) {
    let baseString = `${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for (let i = 0; i < arr.legnth; i++) {
        if (i === lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "
        }
    }
    return baseString
}

const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
console.log(sentence)
const secondSentence = generateSentence("best fruits", ["oranges", "mangoes", "kiwi"])
console.log(secondSentence)

// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]
const secondContainer = document.getElementById("second-container")

function renderImages() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt="Company employees" class="team-img" src="${imgs[i]}">`
    }
    secondContainer.innerHTML = imgsDOM
}

renderImages()