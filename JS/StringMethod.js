//length
let text = 'hey I am disha';
console.log(text);
console.log(text.length); //14

//slice
console.log(text.slice(4, 14));

let x = "Disha,Puja,Mim";
console.log(x.slice(6, 10)); //puja

// d-0  -13
// i-1   -12
// s-2  -11
// h=3  -10
// a=4  -9
// ,=5  -8
// p=6  -7
// u=7  -6
// j=8  -5
// a=9 -4
// ,=10 -3
// m=11 -2
// i=12 -1
// m=13 0

//for negative value
let y = "Disha,Puja,Mim";
console.log(y.slice(-14,-9)); //disha

//substring
console.log(x.substring(6, 10)); //puja

//substr
let n='hey you fool';
console.log(n.substr(8,4)); //fool
console.log(n.substr(8)); //index 8 thike baki sob print hobe

//replace
let s = n.replace('fool','ugly');
console.log(s); //hey you ugly

//uppercase
let text1='disha';
let text2=text1.toUpperCase();
console.log(text2);

//lowercase
console.log(text1.toLowerCase());

//concat
let h= 'hello';
let w='world';
let t=h.concat(' ' + w);
console.log(t); //hello world

//trim()
text='    hey  me!     ';
console.log(text);//unnesessary space in both sides
console.log(text.trim());

//charAt()
console.log(t.charAt(4)); //return o

// charCodeAt() return unicade value
console.log(t.charCodeAt(4));  //111

//split()
let new_text='hello world';
console.log(new_text.split(" , "));