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

//Rental Information