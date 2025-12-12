//indextof
//return starting index
let text='i am disha';
console.log(text.indexOf('disha')); //5

//lastindexOf
//count number from backword
console.log(text.lastIndexOf('disha')); //5
console.log(text.lastIndexOf('dishaa'));//-1

//search()
console.log(text.search('am')); //2,am starts from index 2

//match
console.log(text.match('am')); //[ 'am', index: 2, input: 'i am disha', groups: undefined ]
console.log(text.match('no')); //null

//includes()
console.log(text.includes('no')); //false
