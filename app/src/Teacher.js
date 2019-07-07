import {Person} from './Person';

export function promote() {
    console.log('Promote is named export');
}

export default class Teacher extends Person {
    constructor(name, degree, marks) {
        super(name);
        this.degree = degree;
        this.marks = marks
    }

    teach() {
        console.log("Teach");
    }
}

