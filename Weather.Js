const apiKey="6546bda3345392be175ee67db4447c4d";
const apiURL ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  const data = await response.json ();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".Wind").innerHTML = data.wind.speed + " Km/h";

  
  if(data.weather[0].main == "Clouds"){
   weatherIcon.src = "Weather/Clouds.png";
  }
  else if(data.weather[0].main == "Clear"){
   weatherIcon.src = "Weather/Clear.png";
  }
  else if(data.weather[0].main == "Drizzle"){
   weatherIcon.src = "Weather/Drizzle.png";
  }
  else if(data.weather[0].main == "Rain"){
   weatherIcon.src = "Weather/Rain.png";
  }
  else if(data.weather[0].main == "Snow"){
   weatherIcon.src = "Weather/Snow.png";
  }
  else if(data.weather[0].main == "Mist"){
   weatherIcon.src = "Weather/Mist.png";
  }
}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})