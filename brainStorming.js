function example (Name){
    console.log(`hello ${Name}`)
}
 
example('herve');
/////////////////////////////////////////////

//alternative
function example(Name) {
    // Set default name if Name is not provided
    const name = Name || 'Guest';
    
    // Get current time of day
    const hours = new Date().getHours();
    let timeOfDay = '';

    if (hours < 12) {
        timeOfDay = 'Good morning';
    } else if (hours < 18) {
        timeOfDay = 'Good afternoon';
    } else {
        timeOfDay = 'Good evening';
    }

    // Print personalized greeting
    console.log(`${timeOfDay}, ${name}!`);
}

example('Hervé'); // Example with name
example(); // Example with default name


//########################################

const products = [
    { name: "Shirt", price: 20 },
    { name: "Pants", price: 30 }
  ];
  
  const discounted = products.map(p => ({
    name: p.name,
    price: p.price * 0.9 // 10% discount
  }));
  
  console.log(discounted);
  // [{ name: "Shirt", price: 18 }, { name: "Pants", price: 27 }]
  