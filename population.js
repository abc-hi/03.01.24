// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Set the request method and URL
xhr.open("GET", "https://restcountries.com/v3.1/all", true);

// Define a callback function to handle the response
xhr.onreadystatechange = function () {
  // Check if the request is complete
  if (xhr.readyState === 4) {
    // Check if the request was successful (status code 200)
    if (xhr.status === 200) {
      // Parse the JSON response
      var countries = JSON.parse(xhr.responseText);

      // Use the reduce function to calculate the total population
      var totalPopulation = countries.reduce(function (accumulator, country) {
        // Check if the country has population data
        if (country.population) {
          // Add the population to the accumulator
          return accumulator + country.population;
        } else {
          // If there is no population data, return the current accumulator value
          return accumulator;
        }
      }, 0);

      // Display the total population
      console.log("Total Population:", totalPopulation);
    } else {
      // If the request was not successful, display an error message
      console.error("Failed to fetch data. Status code:", xhr.status);
    }
  }
};

// Send the request
xhr.send();
