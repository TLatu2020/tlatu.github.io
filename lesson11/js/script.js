function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

function showBanner() {
    let d = new Date()
    const banner = document.getElementById('pancake-banner');

    if (d.getDay() == 5) {
        banner.style.display = "block";
    }
}

document.getElementById("currentyear").textContent = new Date().getFullYear();

const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

WebFont.load({
    google: {
        families: [
            'Roboto Slab', 'Montserrat'
        ]
    }
});

function events() {
    const townsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    const cityClasses = document.body.classList;

    console.log(cityClasses);

    var town = "";

    if (cityClasses.contains('preston')) {
        town = "Preston";
    } else if (cityClasses.contains('sodaSprings')) {
        town = "Soda Springs";
    } else if (cityClasses.contains("fishHaven")) {
        town = "Fish Haven";
    }


    fetch(townsURL)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsObject) {
            console.table(jsObject);
            const towns = jsObject['towns'];

            for (let i = 0; i < towns.length; i++) {
                if (towns[i].name == town) {
                    let events = document.createElement("section");
                    let title = document.createElement("h3");
                    let list = document.createElement("ul");


                    title.textContent = "Events";
                    for (let e = 0; e < towns[i].events.length; e++) {
                        let items = document.createElement("li");
                        items.textContent = towns[i].events[e];
                        list.appendChild(items);
                    }

                    events.appendChild(title);
                    events.appendChild(list);


                    document.querySelector('div.events').appendChild(events);
                }

            }

        });
}