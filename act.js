const apikey = "f8b96db359f2f7f0fe41d66fec6fad41";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

//catching files 
const searchBox = document.querySelector(".search-box input");

const searchBtn = document.querySelector(".search-box button");

const weatherIcon = document.querySelector(".icon");


//main function
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

//show error msg
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
         document.querySelector(".weather-card").style.display = "none";
    }
    else{
        var data = await response.json();

    //making changes as per requirment
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round (data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds"){
      weatherIcon.src = "cloud.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png";
    }
     else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
    }
     else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
    }
     else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
    }

    //hide error msg
    document.querySelector(".weather-card").style.display = " block";
      document.querySelector(".error").style.display = "none";


    }

    
}
// making btn to take city name 
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

})

