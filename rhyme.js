
const rhyme = `twinkling, twinkling, little star,
How I wonder what you are
Up above the world so high,
Like a diamond in the sky`

//find the index of Diamond
//extract the last line and store it in a variable called last
//find the index of Gold
//if silver exist in that 
//replace star with Sun
//replace the last day with start
//make the rhyme to start with capital letter

//index of diamond

const positionOfDiamond = rhyme.indexOf("diamond");
console.log("The index of 'diamond' is:", positionOfDiamond);

//extract the last line
const last = rhyme.split('\n')[rhyme.split('\n').length - 1].trim();
console.log("Like a diamond in the sky:", last);

//find the index of Gold
const positionOfGold = rhyme.indexOf("Gold");
console.log("The index of 'Gold' is:", positionOfGold);

//check if silver exists
const silverExists = rhyme.includes("silver");
console.log("Does 'silver' exist in the rhyme?", silverExists ? "Yes" : "No");

//replace star with Sun
const rhymeWithSun = rhyme.replace(/star/g, "Sun");
console.log("Rhyme with 'Sun' instead of 'star':", rhymeWithSun);

//replace the last line with 'start'
const rhymeWithStart = rhyme.replace(last, "start");
console.log("Rhyme with 'start' instead of last line:", rhymeWithStart);    

//make the rhyme start with a capital letter
const capitalizedRhyme = rhyme.charAt(0).toUpperCase() + rhyme.slice(1);
console.log("Rhyme with capitalized first letter:", capitalizedRhyme);

