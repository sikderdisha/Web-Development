let myData={
    name:"Disha",
    age:22,
    education:'Bsc in CSE',
    qualification:'Graduate'
};
console.log(myData);
console.log(myData.name);

//Constructor Function
//Constructor function সাধারণ ফাংশনের মতোই, তবে এটি নতুন object তৈরি করার জন্য ব্যবহার হয়।
function MyData(name, age, education, qualification) {
    this.name = name;
    this.age = age;
    this.education = education;
    this.qualification = qualification;
}

let info1 = new MyData('Kabir', 20, 'Bsc in CSE', 'student');
let info2 = new MyData('Nila', 20, 'Bsc in CSE', 'student');

console.log(info1);
console.log(info2);
