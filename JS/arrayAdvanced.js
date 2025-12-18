//create array
let cars=[`disha`,`15`,`utshob`,`mona`];
console.log(cars);

//alternative
let person=[];
person[0]='shilpa';
person[1]='nipa';
person[2]='dipa';
console.log(person);

//array type
console.log(typeof person); //object

//length property
console.log(cars.length); //4

//access first index
console.log(person[0]);

//access the last element
console.log(cars.length-1);//3
console.log(cars[cars.length-1]);

//print elements using loops
let fruits=['mango','banana','apple'];
let len=fruits.length;

for(let i=0;i<len;i++){
    console.log(i);
    console.log(fruits[i]);
}


//push()
//add new element
let newArr=['x','y','z'];
newArr.push('w');
console.log(newArr);