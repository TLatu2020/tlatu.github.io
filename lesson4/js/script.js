function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

document.getElementById("lastupdated").innerHTML = document.lastModified;

document.getElementById("currentyear").textContent = new Date().getFullYear();