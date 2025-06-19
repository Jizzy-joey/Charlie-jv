function handleScoreIncrease(score) {
    return score +10
  // TODO: implement score increase logic here
}

console.log(handleScoreIncrease(12))
console.log(handleScoreIncrease(2))
console.log(handleScoreIncrease(60))
console.log(handleScoreIncrease(130))

function handleGreeting() {
    return 'good morning'
}

function handleAddition(num1, num2=0) {
    const result = num1 + num2;
    console.log(result);   
}
handleAddition(12,7)
handleAddition(12,70)
handleAddition(3,6)
handleAddition(3)

function generateRandomNumber(val=10) {
const random = Math.random() * val;
console.log(Math.floor(random));
}

generateRandomNumber()
generateRandomNumber(100)
generateRandomNumber(1000)
generateRandomNumber(200)

//Arrow function//
const handleStrCapitalize =(str) => {
    str = str.toLowerCase()
    let firstChar = str.charAt(0).toUpperCase()
   return str.replace(str[0], firstChar)}

const handlePower = (num, power) => num ** power

console.log(handlePOWER(4, 2))

console.log(handleStrCapitalize(`frontend`))
console.log(handleStrCapitalize(`production`))
console.log(handleStrCapitalize())


//write a function called reminder that takes two parameters and returns the remainder of the first parameter divided by the second parameter

remainder(5, 5)
remainder(15, 27)
remainder(200, 150)

function remainder(val, divider) {
    console.log(val % divider);
}