class User {
    #password; // Private field
    constructor(username, password) {
      this.username = username;
      this.#password = password;
    }
  
    login(inputPassword) {
      return inputPassword === this.#password ? "Login successful" : "Wrong password";
    }
  }
  
  const user = new User("Alice", "secure123");
  console.log(user.login("secure123")); // ✅ Login successful
  console.log(user.login("wrongpass")); // ❌ Wrong password
  
 // console.log(user.#password); // ❌ Error: Private field
  