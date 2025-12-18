//access array element
let person=[];
person[0]='shilpa';
person[1]='nipa';
person[2]='dipa';

document.getElementById('demo').innerHTML=person;

//print array

let fruits=['mango','banana','apple'];
let len=fruits.length;
let text=' ';
for(let i=0;i<len;i++){
    text +="<li>"+fruits[i]+"</li>";
}
document.getElementById("fruits").innerHTML = text;

//for each
let fruit=['mango','banana','apple','melon'];
let l=fruits.length; 
let text2=" ";


    function myFunction(item, i){
    text2 += "<li>" + i + ": " + item + "</li>"; // i হল index, item হল element
}


fruit.forEach(myFunction);
document.getElementById("fruit").innerHTML = text2;