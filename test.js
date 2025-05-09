async function getUserName() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    const userName = data.name;  // Store value here
    console.log("User name:", userName); // Use it here
    return userName;
  } catch (error) {
    console.error("Error:", error);
  }
}

getUserName(); // Call the function
