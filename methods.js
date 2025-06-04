const letters = `He says "A quick Fox\n Jumps Over The Lazy Dog"`

const rhyme =`twinkle twinkle little star 
How I wonder what you are
 Up above the world so high
  Like a diamond in the sky`

//console.log(letters)
//console.log(rhyme)

//string methods
//string length
const len = letters.length
console.log("The length of the string is: ", len)

//string to upper case
const upper = letters.toUpperCase()
console.log("The string in upper case is: ", upper)

//string to lower case
const lower = letters.toLowerCase()
console.log("The string in lower case is: ", lower)

//charAt method
//console.log(letters[0]) // first character
//console.log(letters[letters.length - 1]) // last character

const char9 = letters.charAt(9)
console.log("The character at index 9 is: ", char9)

const char99 = letters.charAt(99)
console.log("The character at index 99 is: ", char99) // returns empty string if index is out of range  

//indexOf method
const indexOfA = letters.indexOf("A")
console.log("The index of 'A' is: ", indexOfA)

const positionOfFox = letters.indexOf("Fox")
console.log("The index of 'Fox' is: ", positionOfFox)

//lastIndexOf method
const lastIndexOfA = letters.lastIndexOf("A")
console.log("The last index of 'A' is: ", lastIndexOfA)

console.log(letters.lastIndexOf("a")) === letters.indexOf("a")
console.log(letters.lastIndexOf("x")) === letters.indexOf("x")

//match method
const vreg = /[aeiou]/gi
const vowels = letters.match(vreg)
console.log("The vowels in the string are: ", vowels)

//includes method
const includesGoat = letters.includes("goat")
console.log("Does the string include 'goat'? ", includesGoat)

const includesFox = letters.includes("Fox")
console.log("Does the string include 'Fox'? ", includesFox)

//startsWith method
const startsWithHe = letters.startsWith("He")
console.log("Does the string start with 'He'? ", startsWithHe ? "yes" : "no")
const startWithSheSays = letters.startsWith("She says")
console.log("Does the string start with 'She says'? ", startWithSheSays ? "yes" : "no it doesn't")

//endsWith method
const endsWithStone = letters.endsWith("Stone")
console.log("Does the string end with 'Stone'? ", endsWithStone ? "yes" : "e no dey")

//concat method
//const concatStr = letters.concat(" ", 'stone')
const concatStr = letters.concat(...[' and stone',' and ', 'water'])
console.log("The concatenated string is: ", concatStr)

//substring method
const subStr = letters.substring(3, 10)
console.log("The substring from index 3 to 10 is: ", subStr)

// slice method
const sliceStr = letters.slice(letters.indexOf('B'), letters.indexOf('O') + 1)
console.log("The sliced string from index 3 to 10 is: ", sliceStr)

// replace method
const replacedStr = letters.replace("Fox", "Cat")
console.log("The string after replacing 'Fox' with 'Cat' is: ", replacedStr)

const replaceVowels = letters.replace(/[aeiou]/gi, "*")
console.log("The string after replacing vowels with '*': ", replaceVowels)

// trim method
const trimmedStr = "   Hello World!   "


//padStart and padEnd methods
const paddedStart = trimmedStr.padStart(100, "*")
console.log("The string after padding at the start is: ", paddedStart)

const paddedEnd = paddedStart.padEnd(130, "*")
console.log("The string after padding at the end is: ", paddedEnd)

// split method
const splitStr = letters.split(" ")
console.log("The string split by spaces is: ", splitStr)

const splitStr2 = letters.split(/[\s,]+/).map(word => word.trim())
console.log("The string split by spaces and trimmed is: ", splitStr2)