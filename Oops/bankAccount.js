class BankAccount {
    #balance; // private field

    constructor(owner,balance){
        this.owner = owner;
        this.#balance =balance;
    }
    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
            console.log(`Deposit: $${amount}`);
        }else{
            console.log('Invalid deposit amount.');
            
        }
    }
    getBalance(){
        return `Current balance: $${this.#balance}`
    }
}

const account = new BankAccount("Alice", 1000);
console.log(account.getBalance()); // ✅ Current Balance: $1000
account.deposit(500); // ✅ Deposited: $500
console.log(account.getBalance()); // ✅ Current Balance: $1500
//console.log(account.#balance); // ❌ SyntaxError: Private field cannot be accessed