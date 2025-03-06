function checkPasswordStrength(password) {
    const lengthRequirement = password.length >= 8;
    const uppercaseRequirement = /[A-Z]/.test(password);
    const lowercaseRequirement = /[a-z]/.test(password);
    const numberRequirement = /\d/.test(password);
    const specialCharRequirement = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    let strength = 0;
    if (lengthRequirement) strength++;
    if (uppercaseRequirement) strength++;
    if (lowercaseRequirement) strength++;
    if (numberRequirement) strength++;
    if (specialCharRequirement) strength++;

    if (strength === 5) {
        console.log("✅ Strong Password! 💪");
    } else if (strength >= 3) {
        console.log("⚠️ Medium Password! Consider making it stronger.");
    } else {
        console.log("❌ Weak Password! Add more security.");
    }
}

// Example Usage:
checkPasswordStrength("Hello123!");  // ✅ Strong Password!
checkPasswordStrength("hello123");   // ⚠️ Medium Password!
checkPasswordStrength("12345");      // ❌ Weak Password!
