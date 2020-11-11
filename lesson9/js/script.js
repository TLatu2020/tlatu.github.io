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