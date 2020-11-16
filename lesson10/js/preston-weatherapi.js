const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=164f498c15ca0ca0e8f322a9fd449b46&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        //Current Condition
        document.getElementById('currentCondition').textContent = jsObject.weather[0].main;

        //Current Temp
        document.getElementById('currentTemp').textContent = jsObject.main.temp;

        //Highest Temp
        document.getElementById('high-temp').textContent = jsObject.main.temp_max;

        //Wind Speed
        document.getElementById('wind-speed').textContent = jsObject.wind.speed;

        //Wind Chill
        let speed = Math.pow(jsObject.wind.speed, 0.16);
        let temp = jsObject.main.temp
        let windChill = Math.round(35.75 * (0.6215 * temp) - (35.75 * speed) + (0.4275 * temp * speed));

        if (temp <= 50 && windSpeed >= 3) {
            document.getElementById('wind-chill').textContent = windChill;
        } else {
            document.getElementById('wind-chill').textContent = "N/A";
        }

        //Humidity Level
        document.getElementById('humidity').textContent = jsObject.main.humidity;



    });