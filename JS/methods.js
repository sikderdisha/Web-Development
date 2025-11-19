// uppercase
let mySum ='Hey this is disha from dhaka,bangladesh';
console.log(mySum.toUpperCase())

// lower case
mySum='HEY THIS IS DISHA FROM DHAKA,BANGLADESH';
console.log(mySum.toLowerCase())

// use of length 
console.log(mySum.length)

// trim() method
// শেষের spaces remove করে
let x='hello world!    '
console.log(x.trim())

// spilt method
x='disha , mim, maria , runa';
console.log(x.split('runa'))

// indexof method
console.log(x.indexOf('runa'))

// string + number
let num1 ='50';
let num2 = 50;
let add=num1+num2;
// the ans will be 5050(string)
console.log(add)
console.log(typeof num1)

// parseFloat 
num1='100.298';
num2=100;
num1=parseFloat(num1) //string to number
let mot=num1+ num2;
console.log(mot)

// parseInt 
num1='100.2990';
num2=100;
num1=parseInt(num1) //string to number
mot=num1+ num2;
console.log(mot)