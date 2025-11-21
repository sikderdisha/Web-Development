//array
var arry = [1,2,3,4,5,6,7,8,9];
console.log(arry); //print array
console.log(arry[3]); //print the value where index is 3

//set new value
arry[9]=24;
console.log(arry);

//change any number
arry[0]='disha';
console.log(arry);

//push()>>insert new value in the end of the array
arry.push('mim');
console.log(arry)

//pop()>>remove the last element from array
arry.pop();
console.log(arry)

//shift method>>delete the 1st elememnt 
arry.shift();
console.log(arry)

//unshift() >>add element in index 0
arry.unshift('antora');
console.log(arry)

//slice()
var newarry=arry.slice(0,5);
console.log(newarry)

//splice()
//array.splice(start, deleteCount, item1, item2, ...);
var mydata=['disha','puja','chaity','antora','anamika','tanishka','mukty','amal','prodip','mariam'];
console.log(mydata);
mydata.splice(1,6); //remove data 1 to 6
console.log('new data will be: ' +mydata);
mydata.splice(4,0,'munia','dipali'); //last a data add korbe,kisu delete hbe na cause of index 4
console.log(mydata)