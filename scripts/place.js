// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
    } else {
        return 'N/A';
    }
}

// Update the wind chill value on page load
window.onload = function() {
    // Static values for temperature and wind speed
    var temperature = 30; // in Celsius
    var windSpeed = 10; // in km/h

    // Calculate wind chill
    var windChill = calculateWindChill(temperature, windSpeed);

    // Display wind chill value
    var windChillValue = document.getElementById('wind-chill-value');
    windChillValue.textContent = windChill;
}

// Output the current year in the footer's first paragraph
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Output the date the document was last modified in the footer's second paragraph
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;