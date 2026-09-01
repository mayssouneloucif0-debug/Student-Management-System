// ==============================
// 1. Parent Class: Person
// ==============================

class Person {

    #age;

    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }

    getAge() {
        return this.#age;
    }

    haveBirthday() {
        this.#age++;
    }

    introduce() {
        console.log(`My name is ${this.name}`);
    }
}


// ==============================
// 2. Child Class: Student
// ==============================

class Student extends Person {

    constructor(name, age, speciality) {
        super(name, age);
        this.speciality = speciality;
    }

    study() {
        console.log(`${this.name} is studying`);
    }

    changeSpeciality(newSpeciality) {
        this.speciality = newSpeciality;
    }

    introduce() {
        console.log(`I am student ${this.name}`);
    }
}


// ==============================
// 3. Child Class: Teacher
// ==============================

class Teacher extends Person {

    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    teach() {
        console.log(`${this.name} is teaching ${this.subject}`);
    }

    introduce() {
        console.log(`I am teacher ${this.name}`);
    }
}


// ==============================
// 4. Create Students
// ==============================

const student1 = new Student("Mimi", 21, "MI");
const student2 = new Student("Sifo", 18, "ST");


// ==============================
// 5. Test Student
// ==============================

console.log("----- STUDENT 1 -----");

console.log("Name:", student1.name);
console.log("Age:", student1.getAge());
console.log("Speciality:", student1.speciality);

student1.introduce();
student1.study();

student1.haveBirthday();

console.log("Age after birthday:", student1.getAge());

student1.changeSpeciality("Computer Science");

console.log("New speciality:", student1.speciality);


// ==============================
// 6. Create Teacher
// ==============================

const teacher1 = new Teacher("Ahmed", 35, "Mathematics");


// ==============================
// 7. Test Teacher
// ==============================

console.log("----- TEACHER -----");

console.log("Name:", teacher1.name);
console.log("Age:", teacher1.getAge());
console.log("Subject:", teacher1.subject);

teacher1.introduce();
teacher1.teach();
console.log("Updated Student Management System");