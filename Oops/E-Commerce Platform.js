class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    getDetails() {
        return `${this.name} - $${this.price}, Category: ${this.category}`;
    }
}

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.cart = [];
    }

    addToCart(product) {
        this.cart.push(product);
        console.log(`${product.name} added to cart.`);
    }

    viewCart() {
        console.log(`Cart of ${this.name}:`);
        this.cart.forEach(item => console.log(item.getDetails()));
    }
}

// Example usage:
const product1 = new Product("Laptop", 1200, "Electronics");
const user1 = new User("John Doe", "john@example.com");

user1.addToCart(product1);
user1.viewCart();
