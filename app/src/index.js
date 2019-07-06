
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


const person = {
    name : "Prathamesh",
    walk() {
        console.log(this);
    }
}

// person.walk();

const walk = person.walk;

// console.log(walk);

walk();