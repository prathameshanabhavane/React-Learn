
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

// const person = {
//     name : "Prathamesh",
//     walk() {
//         console.log(this);
//     }
// }

// person.walk();

// const walk = person.walk.bind(person);

// // console.log(walk);

// walk();


// Function : its block of code;

// Simple function
// const square = function(number) {
//     return number * number
// }

// console.log(square(5));


// Arrow function

// const square = number => number * number;

// console.log(square(4));

// const jobs = [
//     {id : 1, isActive : true },
//     {id : 2, isActive : true },
//     {id : 3, isActive : false },
// ]

// // const jobActive = jobs.filter(function(job){ return job.isActive });
// const jobActive = jobs.filter( job => job.isActive );

// console.log(jobActive);

// Arrow function and this keyword
// stand alone function show window object
/* if we used setTimeout or any function which are delay if we want to show object by 
    using this keyword we can use arrrow function */

// const person = {
//     talk() {
//         console.log('this', this);   
//     }
// }

// person.talk();


// const person = {
//     talk() {
//         setTimeout(function() {
//             console.log('this', this);   
//         },1000);
//     }
// }

// person.talk();

// To get our our object person old method

// const person = {
//     talk() {
//         var self = this;
//         setTimeout(function() {
//             console.log('self', self);   
//         },1000);
//     }
// }

// person.talk();

// by using arrow function we don't have to write that much code its take as simple means they don't rebind this keword

// const person = {
//     talk() {
//         setTimeout(() => { console.log('this', this); },1000);
//     }
// }

// person.talk();


// map : used to list of item

// const colors = ['read', 'green', 'blue','purple'];

// // const colorItem = colors.map(function(color){
// //     return '<li>' + color + '</li>';
// // });

// // console.log(colorItem);

// const colorItem = colors.map(color => `<li> ${color} </li>`);

// console.log(colorItem);

// Object destructuring

// const address = {
//     street : ' ',
//     city : ' ',
//     country : ' '
// };

// // const street = address.street;
// // const city = address.city;
// // const country = address.country;

// const { street, city, country } = address;
// // const { street : st } = address;

// Spread Operator

// const firstArray = [1,2,3];
// const secondArray = [4,5,6];

// // old
// // const combined = first.concat(second);

// // using spread operator its defines as a three dot (...example)

// // const combined = [...first, ...second];

// const combined = [...firstArray, ...secondArray, 7,8,9]; //we can add anywhere

// console.log(combined);

// const clone = [...firstArray];
// console.log(clone);

// const firstObject  = {name : 'Prathamesh'};
// const secondObject = { job : 'Front end developer'};

// const combinedObject = {...firstObject, ...secondObject, location : 'Inida' };

// console.log(combinedObject);

// const cloneObj = {...firstObject};

// console.log(cloneObj);


// Classes

class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("Walk");
    }
}

const preson = new Person('Pratham');

console.log(preson.name);