// Person class definition
class Person {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Location: ${this.location}`;
    }
}

// Example usage of the Person class
const person1 = new Person('Alice', 30, 'New York');
console.log(person1.getDetails());  // Output: Name: Alice, Age: 30, Location: New York

// UberPriceCalculator class definition
class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distanceInMiles, durationInMinutes) {
        // Calculate the total cost
        const totalCost = this.baseFare + (this.costPerMile * distanceInMiles) + (this.costPerMinute * durationInMinutes);
        return totalCost;
    }
}

// Example usage of the UberPriceCalculator class
const uberCalculator = new UberPriceCalculator(2.50, 1.00, 0.25); // base fare $2.50, $1.00 per mile, $0.25 per minute
const distance = 10; // Distance in miles
const duration = 20; // Duration in minutes
const price = uberCalculator.calculatePrice(distance, duration);

console.log(`The Uber price is $${price.toFixed(2)}`);  // Output: The Uber price is $15.00
