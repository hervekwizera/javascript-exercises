function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollMultipleDice(times) {
    if (times <= 0) {
        console.log("Please enter a number greater than 0.");
        return;
    }

    const results = {};
    for (let i = 1; i <= 6; i++) {
        results[i] = 0; // Initialize counts for numbers 1-6
    }

    console.log(`Rolling the dice ${times} times... 🎲`);
    for (let i = 0; i < times; i++) {
        const roll = rollDice();
        results[roll]++;
    }

    console.log("Results:");
    for (let key in results) {
        console.log(`🎲 ${key}: ${results[key]} times`);
    }
}

// Example Usage:
rollMultipleDice(10);  // Rolls a dice 10 times and shows the results
