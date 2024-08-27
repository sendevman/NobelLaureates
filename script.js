// Add event listener to the button to trigger data fetch
document.getElementById('fetchDataButton').addEventListener('click', fetchData);

// Hide results section initially
document.getElementById('results').style.display = 'none';

async function fetchData() {
  // Show the results section once data fetching starts
  document.getElementById('results').style.display = 'block';
  try {
    // Fetch data from the Nobel Prize API, adjusting the limit to get all records
    const response = await fetch('https://api.nobelprize.org/2.1/laureates?limit=1000');
    const data = await response.json();

    // Initialize an object to count laureates by country
    const countryCount = {};
    let totalLaureates = 0;

    // Iterate over each laureate and count them by their country
    data.laureates.forEach(laureate => {
      const country = laureate.birth?.place?.countryNow?.en || 'Unknown'; // Safely access country data
      countryCount[country] = (countryCount[country] || 0) + 1; // Increment country count
      totalLaureates++; // Increment total laureate count
    });

    // Sort the countries by number of laureates in descending order
    const sortedCountries = Object.entries(countryCount).sort((a, b) => b[1] - a[1]);

    // Generate HTML content to display the results
    let resultsHTML = '<ul>';
    sortedCountries.forEach(([country, count]) => {
      resultsHTML += `<li>${country}: ${count}</li>`; // Display country and laureate count
    });
    resultsHTML += '</ul>';
    resultsHTML += `<div class="total">Total Laureates: ${totalLaureates}</div>`; // Display total laureates

    // Inject the generated HTML into the results div
    document.getElementById('results').innerHTML = resultsHTML;

  } catch (error) {
    // Handle errors and display a message if the data fetch fails
    document.getElementById('results').innerHTML = '<p>Error fetching data.</p>';
  }
}