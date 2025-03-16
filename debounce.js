function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

const logMessage = debounce(() => console.log("Debounced!"), 2000);
logMessage(); // Waits 2 seconds before executing
