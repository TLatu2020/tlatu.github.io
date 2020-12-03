const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&appid=164f498c15ca0ca0e8f322a9fd449b46";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let card = document.createElement('section');
        let title = document.createElement('h3');
        let temp = document.createElement('p');
        let condition = document.createElement('p');
        let humidity = document.createElement('p');
        let image = document.createElement('img');

        title.textContent = "Current Weather";
        temp.textContent = jsObject.main.temp;
        condition.textContent = jsObject.weather[0].main;
        humidity.textContent = jsObject.main.humidity;
        image.setAttribute('src', 'https://openweathermap.org/img/wn/' + jsObject.weather[0].icon + '@2x.png')
        image.setAttribute('alt', jsObject.weather[0].description);

        card.appendChild(title);
        card.appendChild(temp);
        card.appendChild(condition);
        card.appendChild(humidity);
        card.appendChild(image);

        document.querySelector('div.weather-card').appendChild(card);
    });