const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '80f763675bmsh49ad744dbaa0f68p1d17c3jsn599d11ac5d7b',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

// Add DOM elements for displaying weather data
const cityName = document.getElementById('cityName');
const cloud_pct = document.getElementById('cloud_pct');
const temp = document.getElementById('temp');
const humidity = document.getElementById('humidity');
const min_temp = document.getElementById('min_temp');
const max_temp = document.getElementById('max_temp');
const wind_speed = document.getElementById('wind_speed');
const wind_degrees = document.getElementById('wind_degrees');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');

async function fetchData(city) {
    cityName.innerHTML = city;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;

    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parse the response as JSON

        // Update the DOM elements with weather data
        cloud_pct.innerHTML = result.cloud_pct;
        temp.innerHTML = result.temp;
        temp2.innerHTML = result.temp;
        // feels_like.innerHTML = result.feels_like;
        humidity.innerHTML = result.humidity;
        humidity2.innerHTML = result.humidity;
        min_temp.innerHTML = result.min_temp;
        max_temp.innerHTML = result.max_temp;
        wind_speed.innerHTML = result.wind_speed;
        wind_speed2.innerHTML = result.wind_speed;
        wind_degrees.innerHTML = result.wind_degrees;
        sunrise.innerHTML = result.sunrise;
        sunset.innerHTML = result.sunset;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

async function getdata(city) {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parse the response as JSON

        return result;
    } catch (error) {
        console.error(error);
        return null; // Handle the error as needed
    }
}

fetchData("Delhi");

const cities = ["Shanghai", "Boston", "Tokyo", "New York"];

cities.forEach(async (city)=>{
    const result = await getdata(city);
    document.getElementById(`${city}Cloud_pct`).innerHTML = result.cloud_pct;
    document.getElementById(`${city}Temp`).innerHTML = result.temp;
    document.getElementById(`${city}Feels_like`).innerHTML = result.feels_like;
    document.getElementById(`${city}Humidity`).innerHTML = result.humidity;
    document.getElementById(`${city}Min_temp`).innerHTML = result.min_temp;
    document.getElementById(`${city}Max_temp`).innerHTML = result.max_temp;
    document.getElementById(`${city}Wind_speed`).innerHTML = result.wind_speed;
    document.getElementById(`${city}WIND_DEGREES`).innerHTML = result.wind_degrees;
    document.getElementById(`${city}Sunrise `).innerHTML = result.sunrise;
    document.getElementById(`${city}Sunset`).innerHTML = result.sunset;
})

submit.addEventListener("click", (e) => {
    e.preventDefault();
    const cityValue = city.value.trim(); // Trim leading and trailing white spaces
    if (cityValue !== "") {
        fetchData(cityValue);
    }

})
