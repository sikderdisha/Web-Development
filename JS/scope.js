//global scope
//if-elae,object,funcion everywhere it works
var name='dipa';

function me(){
    console.log(name);
}
me();

function she(){
    var me='you';
    console.log(me);
}

she();//it works

//if we want to console outside the function it shows error
//this is local variable
// function he(){
//     var e='your';
    
// }
// console.log(e);

//block scope
if(true){
    let x=30;
    console.log(x);
}
 console.log(x);//error