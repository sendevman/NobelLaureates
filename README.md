# Nobel Laureate Count Application

This application fetches and displays the number of Nobel Laureates by country using data from the Nobel Prize API.

## How to Start the Application

### 1. Open the File in a Web Browser
- Open your preferred web browser (e.g., Chrome, Firefox, Edge).
- Drag and drop the `nobel_laureates.html` file into the browser window.
- Alternatively, you can right-click on the file and select "Open with" followed by your browser of choice.

### 2. Fetch and View Results
- Once the file is open in the browser, you will see a webpage titled "Number of Nobel Laureates by Country."
- Click on the **"Fetch Laureate Data"** button.
- The application will fetch data from the Nobel Prize API and display the number of Nobel Laureates for each country.
- The results will be listed below the button, including a total count of all laureates.

### 3. Error Handling
- If there is an issue with fetching the data (e.g., network problems or API errors), an error message will be displayed in place of the results.

## UI Design ##
- A simple and clean design is used to ensure readability. A button initiates the data fetch, and the results are displayed in a list format.

## Important Notes
- **API Data Limit**: The application fetches up to 1000 records from the Nobel Prize API to ensure all data is retrieved. The default limit has been adjusted to accommodate this.
- **Country Data Handling**: If a laureate's country information is unavailable, the application will display "Unknown" for that laureate.


## Assumptions Made to Complete the Work

1. **Data Source and API Endpoint**:
   - Assumed that the Nobel Prize API at `https://api.nobelprize.org/2.1/laureates` is the correct and consistent data source for fetching Nobel Laureate information.
   - Assumed that the API will return the relevant data in JSON format and that the structure of the JSON response will include `laureates`, `birth`, `place`, and `countryNow`.

2. **Data Limit Handling**:
   - Adjusted the API request to include a `limit=1000` parameter to ensure the application retrieves all Nobel Laureate records, as the total should be close to 1000. Assumed this is sufficient to cover all current data without exceeding API limits or causing performance issues.

3. **Handling of Missing or Incomplete Data**:
   - Assumed that some laureates might not have complete birth or country data. Implemented a fallback mechanism where the application assigns "Unknown" to any laureate lacking valid country information.
   - Assumed that optional chaining (`?.`) and default values are acceptable to handle such missing data without requiring further client input.

4. **User Interaction and Interface**:
   - Assumed that the primary user interaction would be a single button click to fetch and display the data. No additional features (e.g., filtering or searching) were implemented, based on the simplicity of the requirement.
   - Assumed that displaying the results in a sorted list, by the number of laureates per country, would be the most intuitive way to present the data.

5. **Browser Compatibility**:
   - Assumed the application will be run in a modern web browser with JavaScript enabled, which supports ES6 features like `fetch`, `async/await`, and optional chaining.
   - No additional polyfills or fallbacks were provided for older browsers.

6. **Error Handling**:
   - Assumed that basic error handling, which shows a simple error message if the data fetch fails, would be sufficient for this use case. More detailed logging or user feedback was not implemented to keep the interface straightforward.

7. **Styling and User Experience**:
   - Assumed that a minimal, clean design using basic CSS would be adequate for this task. No extensive styling, responsiveness adjustments, or accessibility enhancements were applied beyond basic usability.

These assumptions were made to ensure smooth progress and the timely completion of the project, based on the provided instructions and typical expectations for such a task.

## Prerequisites
- A modern web browser with JavaScript enabled.

## License
This project is open-source and free to use under the [MIT License](https://opensource.org/licenses/MIT).
