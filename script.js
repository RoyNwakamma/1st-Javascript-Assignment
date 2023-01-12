let calc = prompt("Please Enter a number: ")
let calc2 = prompt("Enter another number to be added the the first number: ")
const sum = calc + calc2
console.log(sum)


let fname = prompt("Please Enter your first Name: ")
let lname = prompt("Enter your last name: ")
const fnameslice = fname.slice(0,4)
const lnameslice = lname.slice(0,1)
const cocant = `${fnameslice}${lnameslice}`
console.log(`Your CapacityBay userId is ${cocant}`)