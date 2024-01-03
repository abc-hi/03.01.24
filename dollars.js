var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all", true);

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var data = JSON.parse(xhr.responseText);

    // Filter countries with US dollars as currency
    var usDollarCountries = data.filter(function (country) {
      return country.currencies && country.currencies.USD;
    });

    // Print the names of countries using US dollars
    usDollarCountries.forEach(function (country) {
      console.log(country.name.common);
    });
  } else if (xhr.readyState == 4) {
    console.error("Error fetching data. Status code:", xhr.status);
  }
};

xhr.send();
