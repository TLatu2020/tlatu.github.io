const OneURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.5083&lon=-86.9458&units=imperial&exclude=minutely,hourly&appid=164f498c15ca0ca0e8f322a9fd449b46";

fetch(OneURL)
    .then((response) => response.json())
    .then((jsObject) => {

        let card = document.createElement('section');
        let title = document.createElement('h2');
        let temp = document.createElement('p');
        let condition = document.createElement('p');
        let humidity = document.createElement('p');
        let image = document.createElement('img');

        title.textContent = "Current Weather";
        temp.textContent = Math.round(jsObject.current.temp) + " °F";
        condition.textContent = "Condition: " + jsObject.current.weather[0].main;
        humidity.textContent = "Humidity: " + jsObject.current.humidity + " %";
        image.setAttribute('src', 'https://openweathermap.org/img/wn/' + jsObject.current.weather[0].icon + '@2x.png')
        image.setAttribute('alt', jsObject.current.weather[0].description);

        card.appendChild(title);
        card.appendChild(temp);
        card.appendChild(condition);
        card.appendChild(humidity);
        card.appendChild(image);

        document.querySelector('div.weather-card').appendChild(card);

        //Forecast

        var date = new Date();
        var days = [];


        for (let d = 0; d < 4; d++) {
            date.setDate(date.getDate() + 1);

            //console.log(date);

            let day = date.toString();

            day = day.slice(0, 3);

            days.push(day);
        }
        console.log(days);

        const fiveDays = jsObject.daily; //.filter(item => item.temp.includes('day'));

        const threeDays = fiveDays.slice(0, 3);



        //for (i = 0; i < 1; i++) {
        threeDays.forEach(forecast => {

            let fcard = document.createElement('section');

            let weekDay = document.createElement('p');
            let fimage = document.createElement('img');
            let ftemp = document.createElement('p');


            if (forecast == threeDays[0]) {
                weekDay.textContent = days[0];
            } else if (forecast == threeDays[1]) {
                weekDay.textContent = days[1];
            } else if (forecast == threeDays[2]) {
                weekDay.textContent = days[2];
            }


            fimage.setAttribute('src', "https://via.placeholder.com/100.png?text=Placeholder");
            fimage.setAttribute('data-src', 'https://openweathermap.org/img/wn/' + forecast.weather[0].icon + '@2x.png');
            fimage.setAttribute('alt', forecast.weather[0].description);

            ftemp.textContent = Math.round(forecast.temp.day) + " °F";

            fcard.className = "days";

            fcard.appendChild(weekDay);
            fcard.appendChild(fimage);
            fcard.appendChild(ftemp);



            document.querySelector('div.forecast-card').appendChild(fcard);
        })



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