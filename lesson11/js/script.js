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
    .then(response => response.json())
    .then(jsObject => {
        console.table(jsonObject);
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {

        }

    });