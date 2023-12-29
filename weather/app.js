const btn = document.querySelector(".search button");
const URl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const key = "&appid=bfc78d9a97ef32448823954eebc0a9bc";
const input = document.querySelector(".search input");
const img = document.querySelector(".weather-icon");

btn.disabled = true;
input.addEventListener("input",()=>{
    if(input.value===""||input.value.lenght<0){
        btn.disabled = true;
    }
    else{
        btn.disabled =false;
    }
});

async function weatherdata(input){
    const response = await fetch(URl+input+key);
    const data = await response.json();
    console.log(data);
    document.querySelector(".temp").innerHTML= Math.floor(data.main.temp) + "&#176;C";
    document.querySelector(".city").innerHTML= data.name;;
    document.querySelector(".humidity").innerHTML= data.main.humidity+"%";;
    document.querySelector(".wind").innerHTML= data.wind.speed+"km/h";
    console.log(data.weather[0].main);
    if(data.weather[0].main==="Clouds"){
        img.src = "images/clouds.png";
    }
    else if(data.weather[0].main==="Drizzle"){
        img.src = "images/drizzle.png";
    }
    else if(data.weather[0].main==="Clear"){
        img.src = "images/clear.png";
    }
    else if(data.weather[0].main==="Mist"){
        img.src = "images/mist.png";
    }
    else if(data.weather[0].main==="Rain"){
        img.src = "images/rain.png";
    }
    else if(data.weather[0].main==="Snow"){
        img.src = "images/snow.png";
    }
};

btn.addEventListener("click",()=>{
    let town  = input.value.toLowerCase();
    weatherdata(town);
    input.value = "";
    btn.disabled = true;
})
