//local variable

function t(){
let x=8;//local for function
console.log(x);
}
t();

//if want to access x outside the funtion
// console.log(x); //it gives error



//automatically global
function m(){
    name='dipa'; //it will be a global variable
    console.log(name);
}
m();
console.log(name);