//Current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

//Current date
const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

//Fonts
WebFont.load({
    google: {
        families: [
            'Roboto Slab', 'Montserrat'
        ]
    }
});

function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('hide');
}

//Rental Information

var date = new Date();

for (let d = 0; d < 3; d++) {
    date.setDate(date.getDate() + 1);

    //console.log(date);

    let day = date.toString();

    day = day.slice(0, 3);

    console.log(day);


}