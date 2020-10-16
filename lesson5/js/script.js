function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

function showBanner() {
    let day = new Date()
    const banner = document.getElementsByClassName('pancake-banner');

    if (day.getDay() == 4) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }

}

document.getElementById("currentyear").textContent = new Date().getFullYear();

const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);