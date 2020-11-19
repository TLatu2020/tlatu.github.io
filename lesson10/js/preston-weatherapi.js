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

        if (temp <= 50 && speed >= 3) {
            document.getElementById('wind-chill').textContent = windChill;
        } else {
            document.getElementById('wind-chill').textContent = "N/A";
        }

        //Humidity Level
        document.getElementById('humidity').textContent = jsObject.main.humidity;




    });

const forecastURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=164f498c15ca0ca0e8f322a9fd449b46&units=imperial";


fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const fiveDays = jsObject.list.filter(element => element.dt_txt.includes('18:00:00'));
        let index = 0;

        fiveDays.forEach(forecast => {
            console.log(forecast);

            let card = document.createElement('section');
            let weekDay = document.createElement('p');
            let image = document.createElement('img');
            let temp = document.createElement('p');



            var date = new Date(forecast.dt_txt);
            var day = date.toString();
            day = day.slice(0, 3);
            weekDay.textContent = day;

            image.setAttribute('src', 'https://openweathermap.org/img/wn/' + forecast.weather[0].icon + '.png');
            image.setAttribute('alt', forecast.weather[0].description);

            temp.textContent = forecast.main.temp.toFixed(1) + " °F";

            card.className = "days";

            card.appendChild(weekDay);
            card.appendChild(image);
            card.appendChild(temp);



            document.querySelector('div.cards').appendChild(card);
            index++;
        })
    });