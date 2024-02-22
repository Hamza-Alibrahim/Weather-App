const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=ab9cfa363208e81c863ce2a95887e59c&units=metric&q=";
async function checkWeather(city) {
    let respon = await fetch(`${apiUrl}${city}`);
    if (respon.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await respon.json();
        document.querySelector(".weather-icon").src = `imgs/${data.weather[0].main}.png`
        document.querySelector(".temp").textContent = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".city").textContent = data.name;
        document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
        document.querySelector(".wind").textContent = `${data.wind.speed} Km/h`;
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    };
};
document.querySelector("input").focus();
document.querySelector("input").onkeydown = function (e) {
    if (e.key === "Enter") document.querySelector("button").click();
};
document.querySelector("button").onclick = function () {
    let cityname = document.querySelector("input").value;
    if (cityname !== "") checkWeather(cityname);
    document.querySelector("input").value = "";
};