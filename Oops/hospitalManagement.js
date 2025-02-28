class Patient {
    constructor(id, name, age, disease, appointmentDate) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.disease = disease;
        this.appointmentDate = appointmentDate;
        this.medicalHistory = [];
    }

    // Add medical history
    addMedicalHistory(record) {
        this.medicalHistory.push(record);
    }

    // Update appointment
    updateAppointment(newDate) {
        this.appointmentDate = newDate;
        return `${this.name}'s appointment updated to ${this.appointmentDate}`;
    }

    // Get patient details
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Age: ${this.age}, Disease: ${this.disease}, Appointment: ${this.appointmentDate}`;
    }
}

class Hospital {
    constructor() {
        this.patients = [];
    }

    // Add a new patient
    addPatient(patient) {
        this.patients.push(patient);
    }

    // Find patient by ID
    findPatient(id) {
        return this.patients.find(patient => patient.id === id);
    }

    // List all patients
    listPatients() {
        return this.patients.map(patient => patient.getDetails()).join("\n");
    }
}

// Example usage:
const hospital = new Hospital();
const patient1 = new Patient(1, "John Doe", 45, "Diabetes", "2025-03-01");
const patient2 = new Patient(2, "Jane Smith", 30, "Flu", "2025-02-28");

hospital.addPatient(patient1);
hospital.addPatient(patient2);

console.log(hospital.listPatients()); // Show all patients
patient1.addMedicalHistory("Blood sugar level checked - Normal");
console.log(patient1.updateAppointment("2025-03-05")); // Update appointment
