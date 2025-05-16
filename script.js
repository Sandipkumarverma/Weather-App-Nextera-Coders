const apiKey = "9e186a01bff0a7fad92a90e99eabf60d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");  
const searchBtn = document.querySelector(".search button");  
const weatherIcon = document.querySelector(".weather-icon");

const bgVideo = document.getElementById("bgVideo");


async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }else {
    var data = await response.json();

  //console.log(data);

  document.querySelector(".city").innerText = data.name;
  document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerText = data.main.humidity + "%";
  document.querySelector(".wind").innerText = data.wind.speed + "km/h";  

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
    document.querySelector(".card").style.background = "linear-gradient(135deg, #bdc3c7, #2c3e50)"; // Cloudy
     bgVideo.src = "videos/cloud.mp4";
    
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
    document.querySelector(".card").style.background = "linear-gradient(135deg, #ff9966, #ff5e62)"; // Clear
     bgVideo.src = "videos/clear.mp4";

  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
    document.querySelector(".card").style.background = "linear-gradient(135deg, #4b79a1, #283e51)"; // Rainy
     bgVideo.src = "videos/rain.mp4";

  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
    document.querySelector(".card").style.background = "linear-gradient(135deg, #3e5151, #decba4)"; // Mist
     bgVideo.src = "videos/mist.mp4";

  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
    document.querySelector(".card").style.background = "linear-gradient(135deg, #89f7fe, #66a6ff)"; // Drizzle
     bgVideo.src = "videos/mist.mp4";
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";


  }

  
} 
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
            





