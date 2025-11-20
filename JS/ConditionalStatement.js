//Find the largest number
let num1=10;
let num2=78;

if(num1 > num2 ){
console.log("The largest number is " + num1);
} else {
    console.log("The largest number is " + num2);
}

//optional

let largest = (100 > 50) ? 100 : 50;
console.log("The largest number is " + largest);

//Even or Odd
let num=29;
if(num % 2==0){
console.log('This is a even number')
}
else{
    
console.log('This is a odd number')
}

//optional
num = 28;
console.log((num % 2 == 0) ? "This is an even number" : "This is an odd number");


//Check Age for Voting
let x =43;
if(x >= 18){
    console.log('Eligible to vote')
}
else{
    console.log('Not eligible')
}

//check Positive, Negative or Zero
let myvlue=-48;

if(myvlue < 0){
    console.log('This is a negative number')
}
else if(myvlue > 0){
    console.log('This is a positive number')
}
else{
    console.log('This is a zero')
}

//switch

var max=10;

switch(max){
    case 1:
        console.log('Wrong ans')
        break;
    case 10:
        console.log('congratulations.')
        break;
    default:
        console.log('not found')
        break;
}

