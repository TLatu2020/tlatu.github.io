const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&appid=164f498c15ca0ca0e8f322a9fd449b46";

fetch(weatherURL)
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

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&appid=164f498c15ca0ca0e8f322a9fd449b46";

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const fiveDays = jsObject.list.filter(item => item.dt_txt.includes('18:00:00'));

        const threeDays = fiveDays.slice(0, 3);

        console.log(threeDays);

        for (i = 0; i < 1; i++) {
            threeDays.forEach(forecast => {


                let card = document.createElement('section');
                let weekDay = document.createElement('p');
                let image = document.createElement('img');
                let temp = document.createElement('p');

                var date = new Date(forecast.dt_txt);
                var day = date.toString();
                day = day.slice(0, 3);
                weekDay.textContent = day;

                image.setAttribute('src', "https://via.placeholder.com/100.png?text=Placeholder");
                image.setAttribute('data-src', 'https://openweathermap.org/img/wn/' + forecast.weather[0].icon + '@2x.png');
                image.setAttribute('alt', forecast.weather[0].description);

                temp.textContent = Math.round(forecast.main.temp) + " °F";

                card.className = "days";

                card.appendChild(weekDay);
                card.appendChild(image);
                card.appendChild(temp);



                document.querySelector('div.forecast-card').appendChild(card);
            })
        }

    })
    .then(function(imagesToLoad = document.querySelectorAll('img[data-src]')) {
            const loadImages = (image) => {
                image.setAttribute('src', image.getAttribute('data-src'));
                image.onload = () => {
                    image.removeAttribute('data-src');
                };
            };

            const imgOptions = {
                threshold: 0
            };

            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((items, observer) => {
                    items.forEach((item) => {
                        if (item.isIntersecting) {
                            loadImages(item.target);
                            observer.unobserve(item.target);
                        }
                    });
                }, imgOptions);
                imagesToLoad.forEach((img) => {
                    observer.observe(img);
                });
            } else {
                imagesToLoad.forEach((img) => {
                    loadImages(img);
                });
            }
        }


    );

const OneURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.5083&lon=-86.9458&units=imperial&exclude=minutely,hourly&appid=164f498c15ca0ca0e8f322a9fd449b46";

fetch(OneURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });