try {
    let result = 10 / 0;
    console.log(result);
    // Try accessing an undefined variable
    console.log(myVar); // This will throw an error
  } catch (error) {
    console.log("An error occurred:", error.message);
  }


  