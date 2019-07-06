
// car, ;et and const keyword

// var -> fucntion
// let -> block
//const -> block

// function sayHello() {
//     for(var i = 0; i < 5; i++){
//         console.log(i);
//     }
//     console.log(i);
// }


// function sayHello() {
//     for(let i = 0; i < 5; i++){
//         console.log(i);
//     }
//     console.log(i);
// }

// sayHello();

// const x = 1;
// x = 2;


// Object : Its a collection of key value pairs;

// const person = {
//     name : 'Prathamesh',
//     walk() {},
//     talk() {},
// };

// person.walk();
// person[name] =  'Manik';

// const targetMember = 'name';
// person[targetMember.value] =  'Manik';



// every function in javascript is an object almost everything
// And function have properties and method we can use
// by using bind method we can invoke function inside object individually

const person = {
    name : "Prathamesh",
    walk() {
        console.log(this);
    }
}

person.walk();

const walk = person.walk.bind(person);

// console.log(walk);

walk();


// Function : its block of code;

// Simple function
// const square = function(number) {
//     return number * number
// }

// console.log(square(5));


// Arrow function

const square = number => number * number;

console.log(square(4));

const jobs = [
    {id : 1, isActive : true },
    {id : 2, isActive : true },
    {id : 3, isActive : false },
]

// const jobActive = jobs.filter(function(job){ return job.isActive });
const jobActive = jobs.filter( job => job.isActive );

console.log(jobActive);