class Student {
    constructor(id, name, age, grade, subjects) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.grade = grade; // e.g., "A", "B", "C"
        this.subjects = subjects; // { Math: 80, English: 75 }
    }

    // Method to update student details
    updateDetails(newDetails) {
        Object.assign(this, newDetails);
    }

    // Method to calculate the average score of subjects
    calculateAverage() {
        let scores = Object.values(this.subjects);
        return scores.length ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2) : 0;
    }

    // Method to display student info
    getInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}, Average Score: ${this.calculateAverage()}`;
    }
}

class School {
    constructor() {
        this.students = [];
    }

    // Add a student
    addStudent(student) {
        this.students.push(student);
    }

    // Find student by ID
    findStudent(id) {
        return this.students.find(student => student.id === id);
    }

    // Remove student
    removeStudent(id) {
        this.students = this.students.filter(student => student.id !== id);
    }

    // Get students by grade
    getStudentsByGrade(grade) {
        return this.students.filter(student => student.grade === grade);
    }

    // Get all students
    listStudents() {
        return this.students.map(student => student.getInfo());
    }
}

// Example usage:
const school = new School();

const student1 = new Student(1, "Alice", 15, "A", { Math: 85, English: 90 });
const student2 = new Student(2, "Bob", 16, "B", { Math: 70, English: 80 });

school.addStudent(student1);
school.addStudent(student2);

console.log(school.listStudents()); // Display all students
console.log(school.findStudent(1)); // Find Alice
student1.updateDetails({ age: 16 }); // Update Alice's age
console.log(school.getStudentsByGrade("A")); // Get students with Grade A
