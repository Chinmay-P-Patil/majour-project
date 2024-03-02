// Function to fetch weather data
async function fetchData(city) {
    const apiKey = 'b93c3f4992b5467584a143956242702';
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Display current temperature and humidity
        document.getElementById('temperature').innerText = `Temperature: ${data.current.temp_c}°C`;
        document.getElementById('humidity').innerText = `Humidity: ${data.current.humidity}%`;
        const isRaining = data.current.condition.text.includes('rain');
         document.getElementById('rain').innerText = isRaining ? 'Raining' : 'Not Raining';

        // Display forecast for the next few days
        const forecastData = data.forecast.forecastday.slice(1, 8  ); // Get forecast for the next 4 days
        const forecastBody = document.getElementById('forecastBody');
        forecastBody.innerHTML = ''; // Clear previous forecast data

        forecastData.forEach(day => {
            const date = day.date;
            const temperature = day.day.maxtemp_c;
            const humidity = day.day.avghumidity;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${date}</td>
                <td>${temperature}°C</td>
                <td>${humidity}%</td>
            `;
            forecastBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to get user's current location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                fetchLocation(latitude, longitude);
            },
            error => {
                console.error('Error getting location:', error);
                // Default to Delhi if user denies access or Geolocation API is not available
                fetchData('Delhi');
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
        // Default to Delhi if Geolocation API is not supported
        fetchData('Delhi');
    }
}

// Function to fetch location based on latitude and longitude
async function fetchLocation(latitude, longitude) {
    const apiKey = 'b93c3f4992b5467584a143956242702';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const city = data.location.name;
        fetchData(city); // Fetch weather data based on city
    } catch (error) {
        console.error('Error fetching location:', error);
        // Default to Delhi if unable to fetch location
        fetchData('Delhi');
    }
}

// Initialize by getting user's location
getLocation();

// Function to handle search button click
document.getElementById('searchBtn').addEventListener('change', function() {
    const city = this.value.trim();
    if (city !== '') {
        fetchData(city);
    }
});




// // Function to fetch weather data
// async function fetchData(city) {
//     const apiKey = 'b93c3f4992b5467584a143956242702';
//     const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         // Display current temperature and humidity
//         document.getElementById('temperature').innerText = `Temperature: ${data.current.temp_c}°C`;
//         document.getElementById('humidity').innerText = `Humidity: ${data.current.humidity}%`;

//         // Check if it's raining
//         const isRaining = data.current.condition.text.includes('rain');
//         document.getElementById('rain').innerText = isRaining ? 'Raining' : 'Not Raining';

//         // Display forecast for the next few days
//         const forecastData = data.forecast.forecastday.slice(1, 8); // Get forecast for the next 4 days
//         const forecastBody = document.getElementById('forecastBody');
//         forecastBody.innerHTML = ''; // Clear previous forecast data

//         forecastData.forEach(day => {
//             const date = day.date;
//             const temperature = day.day.maxtemp_c;
//             const humidity = day.day.avghumidity;

//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${date}</td>
//                 <td>${temperature}°C</td>
//                 <td>${humidity}%</td>
//             `;
//             forecastBody.appendChild(row);
//         });
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// // Function to get user's current location
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             position => {
//                 const latitude = position.coords.latitude;
//                 const longitude = position.coords.longitude;
//                 fetchLocation(latitude, longitude);
//             },
//             error => {
//                 console.error('Error getting location:', error);
//                 // Default to Delhi if user denies access or Geolocation API is not available
//                 fetchData('Delhi');
//             }
//         );
//     } else {
//         console.error('Geolocation is not supported by this browser.');
//         // Default to Delhi if Geolocation API is not supported
//         fetchData('Delhi');
//     }
// }

// // Function to fetch location based on latitude and longitude
// async function fetchLocation(latitude, longitude) {
//     const apiKey = 'b93c3f4992b5467584a143956242702';
//     const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         const city = data.location.name;
//         fetchData(city); // Fetch weather data based on city
//     } catch (error) {
//         console.error('Error fetching location:', error);
//         // Default to Delhi if unable to fetch location
//         fetchData('Delhi');
//     }
// }

// // Initialize by getting user's location
// getLocation();

// // Function to handle search button click
// document.getElementById('searchBtn').addEventListener('click', function() {
//     const city = this.value.trim();
//     if (city !== '') {
//         fetchData(city);
//     }
// });





// // Function to fetch weather data
// async function fetchData(city) {
//     const apiKey = 'b93c3f4992b5467584a143956242702';
//     const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         // Display current temperature and humidity
//         document.getElementById('temperature').innerText = `Temperature: ${data.current.temp_c}°C`;
//         document.getElementById('humidity').innerText = `Humidity: ${data.current.humidity}%`;

//         // Check if it's raining
//         const isRaining = data.current.condition.text.includes('rain');
//         document.getElementById('rain').innerText = isRaining ? 'Raining' : 'Not Raining';

//         // Display forecast for the next few days
//         const forecastData = data.forecast.forecastday.slice(1, 8); // Get forecast for the next 4 days
//         const forecastBody = document.getElementById('forecastBody');
//         forecastBody.innerHTML = ''; // Clear previous forecast data

//         forecastData.forEach(day => {
//             const date = day.date;
//             const temperature = day.day.maxtemp_c;
//             const humidity = day.day.avghumidity;

//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${date}</td>
//                 <td>${temperature}°C</td>
//                 <td>${humidity}%</td>
//             `;
//             forecastBody.appendChild(row);
//         });
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// // Function to get user's current location
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             position => {
//                 const latitude = position.coords.latitude;
//                 const longitude = position.coords.longitude;
//                 fetchLocation(latitude, longitude);
//             },
//             error => {
//                 console.error('Error getting location:', error);
//                 // Default to Delhi if user denies access or Geolocation API is not available
//                 fetchData('Delhi');
//             }
//         );
//     } else {
//         console.error('Geolocation is not supported by this browser.');
//         // Default to Delhi if Geolocation API is not supported
//         fetchData('Delhi');
//     }
// }

// // Function to fetch location based on latitude and longitude
// async function fetchLocation(latitude, longitude) {
//     const apiKey = 'b93c3f4992b5467584a143956242702';
//     const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         const city = data.location.name;
//         fetchData(city); // Fetch weather data based on city
//     } catch (error) {
//         console.error('Error fetching location:', error);
//         // Default to Delhi if unable to fetch location
//         fetchData('Delhi');
//     }
// }

// // Initialize by getting user's location
// getLocation();

// // Function to handle search button click
// document.getElementById('searchBtn').addEventListener('change', function() {
//     const city = document.getElementById('cityInput').value.trim();
//     if (city !== '') {
//         fetchData(city);
//     }
// });
