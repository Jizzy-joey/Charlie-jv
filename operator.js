let num1 = 5;
let num2 = 10;
let num3 = 25;

// addition
let sum = num1 + num2;

console.log("The sum of num1 and num2 is: ", sum);

// subtraction
let difference = num2 - num1;
console.log("The difference between num2 and num1 is: ", difference);

// multiplication
let product = num1 * num3;
console.log("The product of num1, num2, and num3 is: ", product); 

// division
let quotient = num3 / num1;
console.log("The quotient of num3 and num1 is: ", quotient);

// modulus
let remainder = num3 % num2;
console.log("The remainder of num3 divided by num2 is: ", remainder);

// addition assignment
sum += num3;
console.log("The new sum after adding num3 is: ", sum);

// subtraction assignment
difference -= 7;
console.log("The new difference after subtracting num7 is: ", difference);

// multiplication assignment
product *= 2.7;
console.log("The new product after multiplying by 2.7 is: ", product);

// division assignment
quotient /= 10;
console.log("The new quotient after dividing by 10 is: ", quotient);

// modulus assignment
remainder %= 3;
console.log("The new remainder after modulus with 3 is: ", remainder);

// exponentiation assignment
let power = num2 ** 2;
console.log("The value of num2 raised to the power of 2 is: ", power);
power **= 1/3
console.log("The cube root of power is: ", power);

// increment
num1++;
console.log("The value of num1 after incrementing is: ", num1);

// decrement
num2--;
console.log("The value of num2 after decrementing is: ", num2);

// create a variable x and assign it the increment of sum
let x = ++sum;
console.log("The value of x after incrementing sum is: ", x);
console.log("The new  value of sum is  ", sum);

// create a variable y and assign it the decrement of difference
let y = --difference;
console.log("The value of y after decrementing difference is: ", y);

