import {Person} from './Person';

export class Teacher extends Person {
    constructor(name, degree, marks) {
        super(name);
        this.degree = degree;
        this.marks = marks
    }

    teach() {
        console.log("Teach");
    }
}

