function getCountriesFromAsia() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://restcountries.com/v3.1/all", true);

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);

        // Filter countries from Asia
        const asiaCountries = data.filter((country) =>
          country.region?.includes("Asia")
        );

        resolve(asiaCountries);
      } else {
        reject(new Error(`HTTP error! Status: ${xhr.status}`));
      }
    };

    xhr.onerror = function () {
      reject(new Error("Network error"));
    };

    xhr.send();
  });
}

// Usage
getCountriesFromAsia()
  .then((asiaCountries) => {
    console.log("Countries in Asia:", asiaCountries);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
