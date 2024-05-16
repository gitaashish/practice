import name2,{ name , student, car, school } from './lib.js';

console.log(name);


// import {student} from './lib.js';

console.log(student, name2);

document.body.innerHTML = student;



console.log(car, school );

// using 'for in' for object 
for (let index in school){
    console.log(index);
    console.log(school[index]);
}




// using 'for of' for arry 

for (let index of student){
    console.log(index);
}
