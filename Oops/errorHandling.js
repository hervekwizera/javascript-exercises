
try {
    let result = 10 / 0;
    console.log(result);
    // Try accessing an undefined variable
    console.log(myVar); // This will throw an error
  } catch (error) {
    console.log("An error occurred:", error.message);
  }
//JSON Parsing
const jsonString = '{ "name": "Alice", "age": 25 }';

try {
  const data = JSON.parse(jsonString);
  console.log(data.name); // Alice
} catch (error) {
  console.log("Failed to parse JSON:", error.message);
}

//Handling Errors in Async Functions
async function fetchData() {
    try {
      const response = await fetch("https://api.example.com/data");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error fetching data:", error.message);
    }
  }
  
  fetchData();
  //Division with Error Handling
  function divide(a, b) {
    try {
      if (b === 0) throw new Error("Cannot divide by zero");
      return a / b;
    } catch (error) {
      console.log("Division error:", error.message);
    }
  }
  
  console.log(divide(10, 0)); // Division error: Cannot divide by zero
  
  