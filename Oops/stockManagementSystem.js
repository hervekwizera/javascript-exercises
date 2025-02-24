class StockManager {
    constructor() {
        this.stock = [];
    }

    addItem(name, quantity, price) {
        const existingItem = this.stock.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.stock.push({ name, quantity, price });
        }
        console.log(`${name} added/updated successfully.`);
    }

    updateItem(name, quantity, price) {
        const item = this.stock.find(item => item.name === name);
        if (item) {
            item.quantity = quantity;
            item.price = price;
            console.log(`${name} updated successfully.`);
        } else {
            console.log(`Item ${name} not found.`);
        }
    }

    removeItem(name) {
        const index = this.stock.findIndex(item => item.name === name);
        if (index !== -1) {
            this.stock.splice(index, 1);
            console.log(`${name} removed successfully.`);
        } else {
            console.log(`Item ${name} not found.`);
        }
    }

    viewStock() {
        console.log("Current Stock:");
        if (this.stock.length === 0) {
            console.log("No items in stock.");
        } else {
            this.stock.forEach(item => {
                console.log(`Name: ${item.name}, Quantity: ${item.quantity}, Price: $${item.price}`);
            });
        }
    }
}

// Example Usage
const stockManager = new StockManager();
stockManager.addItem("Laptop", 10, 1200);
stockManager.addItem("Mouse", 50, 20);
stockManager.viewStock();
stockManager.updateItem("Laptop", 8, 1150);
stockManager.removeItem("Mouse");
stockManager.viewStock();
