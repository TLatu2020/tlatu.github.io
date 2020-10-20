var temp = document.getElementById("hightemp").innerHTML;
var windSpeed = document.getElementById("wind-speed").innerHTML;
var speed = Math.pow(windSpeed, 0.16);
var windChill = Math.round(35.74 + (0.6215 * temp) - (35.75 * speed) + (0.4275 * temp * speed));

if (temp <= 50 && >= 3) {
    document.getElementById("wind-chill").innerHTML = windChill;
} else {
    document.getElementById("wind-chill").innerHTML = "N/A";
}