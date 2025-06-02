let myName = "Joseph lewu";

let myAge = 25;

let isMarried
isMarried = false;
isMarried = true;

let stateOfOrigin = "kogi state";

let jobTitle = `Software Engineer`;
jobTitle = `Full Stack Developer`;

let statement = `My name is` + myName + ` i am` 
statement = `My name is ${myName}, i am ${myAge} years old, and I am from ${stateOfOrigin}.
 I work as a ${jobTitle} at Univelcity i am ${isMarried ? 'married to Luna' : 'not married'}.`; 

console.log(jobTitle)
console.log(typeof statement)
console.log(typeof myName)
console.log(typeof myAge)
console.log(typeof isMarried)
