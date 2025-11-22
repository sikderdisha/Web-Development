//sum of two numbers using function
function get(){
    let num1=10;
    let num2=20;
    console.log(num1+num2);
}

get();

//print hlw world
function hello(){
    console.log("hello world");
}
hello();

//function with perameter
function greet(name){
    console.log('hello '+name);
}
greet('Disha'); 

//print even or odd
function cal(num){
    if(num % 2==0){
        console.log("This is an EVEN number");
    }
    else{
        console.log("This is an ODD number");
    }
}
cal(15);

//sum of two number
function getSum(num1, num2){
    console.log(num1 + num2);
}

getSum(10, 70);

//multiplecation table
function mul(number){
    for(var i = 1; i <= 10; i++){
        console.log(i * number);
        //console.log(number + " × " + i + " = " + (number * i));
    }
}

mul(5);  // 5 এর table
mul(3);  // 3 এর table

//sum of array
function sum(array) {
    let s = 0;  // sum শুরুতে 0
    for (let index = 0; index < array.length; index++) {
        s += array[index];  // array element যোগ
    }
    console.log("Sum:", s);
}

sum([1,2,3,4,5,6]);  
