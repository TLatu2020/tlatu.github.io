const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {

                let card = document.createElement('section');
                let info = document.createElement('div');
                let pic = document.createElement('picture');
                let name = document.createElement('h2');
                let motto = document.createElement('p');
                let year = document.createElement('p');
                let population = document.createElement('p');
                let rainfall = document.createElement('p');
                let image = document.createElement('img');

                name.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                year.textContent = 'Year Founded:' + ' ' + towns[i].yearFounded;
                population.textContent = 'Population:' + ' ' + towns[i].currentPopulation;
                rainfall.textContent = 'Average Rain Fall:' + ' ' + towns[i].averageRainfall;
                image.setAttribute('src', "https://via.placeholder.com/450.png?text=Placeholder");
                image.setAttribute('data-src', "images/" + towns[i].photo);
                image.setAttribute('alt', 'picture of' + ' ' + towns[i].name);

                info.className = "detail";
                motto.className = "motto";
                pic.appendChild(image);
                info.appendChild(name);
                info.appendChild(motto);
                info.appendChild(year);
                info.appendChild(population);
                info.appendChild(rainfall);
                card.appendChild(info);
                card.appendChild(pic);



                document.querySelector('div.cards').appendChild(card);
            }
        }
    })
    .then(
        function(imagesToLoad = document.querySelectorAll('img[data-src]')) {
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