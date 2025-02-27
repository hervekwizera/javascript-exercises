class Student {
    constructor(id, name, age, grade, subjects) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.grade = grade; // e.g., "A", "B", "C"
        this.subjects = subjects; // { Math: 80, English: 75 }
        this.attendance = []; // { date: "2025-02-27", status: "Present" }
    }

    // Update student details
    updateDetails(newDetails) {
        Object.assign(this, newDetails);
    }

    // Calculate average score
    calculateAverage() {
        let scores = Object.values(this.subjects);
        return scores.length ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2) : 0;
    }

    // Record attendance
    addAttendance(date, status) {
        this.attendance.push({ date, status });
    }

    // Get attendance summary
    getAttendanceSummary() {
        let totalDays = this.attendance.length;
        let presentDays = this.attendance.filter(att => att.status === "Present").length;
        return `Total Days: ${totalDays}, Present: ${presentDays}, Absent: ${totalDays - presentDays}`;
    }

    // Get student performance report
    getPerformanceReport() {
        return `Student: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}\nAverage Score: ${this.calculateAverage()}\nAttendance: ${this.getAttendanceSummary()}`;
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

    // Find top-performing students
    getTopPerformers(limit = 3) {
        return this.students
            .sort((a, b) => b.calculateAverage() - a.calculateAverage())
            .slice(0, limit)
            .map(student => student.getPerformanceReport());
    }
}

// Example usage:
const school = new School();

const student1 = new Student(1, "Alice", 15, "A", { Math: 85, English: 90, Science: 88 });
const student2 = new Student(2, "Bob", 16, "B", { Math: 70, English: 80, Science: 75 });
const student3 = new Student(3, "Charlie", 14, "A", { Math: 95, English: 92, Science: 97 });

school.addStudent(student1);
school.addStudent(student2);
school.addStudent(student3);

// Adding attendance
student1.addAttendance("2025-02-27", "Present");
student1.addAttendance("2025-02-26", "Absent");
student2.addAttendance("2025-02-27", "Present");

// Display performance reports
console.log(student1.getPerformanceReport());
console.log(student2.getPerformanceReport());

// Get top performers
console.log("Top Performers:\n", school.getTopPerformers());
