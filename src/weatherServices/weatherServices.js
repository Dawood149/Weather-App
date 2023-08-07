const API_KEY = "26fc6cfe7008f0eea4d290cb5b459a58";
const BASE_URL = "https://api.openweathermap.org/data/2.5"


const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType)
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    return fetch(url)
        .then((res) => res.json())
};

const formattedCurrentWeather = (data) =>{
    const {
        coord:{lat,lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        weather, 
        wind:{speed}
    }=data
    
    const {main:details, icon}=weather[0]

    return{lat, lon, temp, feels_like, temp_min, temp_max, name, details,icon,speed }
}

const getFormattedWeatherData = (searchParams)=>{
const formattedCurrentWeather = await getWeatherData
('weather', searchParams).then(formattedCurrentWeather)

return formattedCurrentWeather
}

export default getFormattedWeatherData;