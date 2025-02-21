class Ride {
    constructor(driver, rider, distance) {
        this.driver = driver;
        this.rider = rider;
        this.distance = distance;
        this.fare = this.calculateFare();
    }

    calculateFare() {
        return this.distance * 2; // Simple fare calculation ($2 per km)
    }

    completeRide() {
        console.log(`Ride completed! Fare: $${this.fare}`);
    }
}

class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}

// Example usage:
const driver = new User("Mike", "Driver");
const rider = new User("Emma", "Rider");

const ride1 = new Ride(driver, rider, 10);
ride1.completeRide();
