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
                let photo = document.createElement('img');

                name.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                year.textContent = towns[i].yearFounded;
                population.textContent = towns[i].currentPopulation;
                rainfall.textContent = towns[i].averageRainfall;
                photo.setAttribute('src', towns[i].photo);
                photo.setAttribute('alt', 'picture of' + ' ' + towns[i].name);

                info.appendChild(name);
                info.appendChild(motto);
                info.appendChild(year);
                info.appendChild(population);
                info.appendChild(rainfall);
                pic.appendChild(photo);

                card.appendChild(info);
                card.appendChild(pic);

                document.querySelector(div.cards).appendChild(card);
            }
        }


    })