const URL = "https://restcountries.com/v3.1/all";

const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();

xhr.onload = () => {
  console.log(JSON.parse(xhr.response));

  const countriesData = JSON.parse(xhr.response);

  const filteredCountries = countriesData.filter((country) => {
    const population = country.population;

    // Assuming population is present in the country object
    // You may need to adjust the property name based on the actual API response
    return population < 200000;
  });

  // Output the filtered countries
  console.log(filteredCountries);
};
