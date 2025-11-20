//print today
var today = new Date();
console.log(today);

//spacific date
var d=new Date(2025-10-25);
console.log(d);

//24 hour formate
var mydate=new Date();
console.log(mydate.toTimeString())

//local time
var local=new Date();
console.log(local.toLocaleString()); //11/20/2025
console.log(local.toLocaleDateString()); //11/20/2025, 11:43:45 PM
console.log(local.toLocaleTimeString()); //12:10:48 AM

//print current month
console.log(local.getMonth())

//getdate()
console.log(local.getDate())

//getMin
console.log(local.getMinutes())

//getsec
console.log(local.getSeconds())

//getmilisec
//getsec
console.log(local.getMilliseconds())