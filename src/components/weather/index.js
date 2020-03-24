import React, { useState, useEffect } from 'react'
import DisplayStats from './displayStats'
import Icon from '../icons'

const Container = () => {
    const [position, setPosition] = useState(undefined);
    const [weather, setWeather] = useState(undefined);
    const [icon, setIcon] = useState("unset");

    const requestLocation = () => {
        navigator.geolocation.getCurrentPosition((data) => { setPosition(data) })
    }

    useEffect(() => {
        if (position) {
            let url = `https://fcc-weather-api.glitch.me/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
            fetch(url).then(res => res.json()).then(data => setWeather(data)).catch(err => console.log(err))
        }

    }, [position]);
    useEffect(() => {
        if (weather) {
            switch (weather.weather[0].description) {
                case "overcast clouds":
                    setIcon("Cloudy");
                    break;

                case "broken clouds" || "few clouds" || "scattered clouds":
                    setIcon("SunShower");
                    break;

                case "clear sky":
                    setIcon("Sunny");
                    break;

                case "light rain" || "light intensity shower rain":
                    setIcon("Rainy");
                    break;

                case "thunderstorm":
                    setIcon("ThunderStorm");
                    break;

                case "snow":
                    setIcon("SnowFlurry");
                    break;

                default:
                    console.log("default hit")
            }

        }

    }, [weather, icon])
    return (
        <div>
            {icon ? <Icon icon={icon} /> : null}
            {!weather ? <button onClick={() => requestLocation()}>Click to provide location</button> : null}
            {weather ? weather.coord ? <DisplayStats longitude={weather.coord.lon} latitude={weather.coord.lat} name={weather.name} description={weather.weather[0].description} temp={weather.main.temp} maxTemp={weather.main.temp_max} minTemp={weather.main.temp_min} feelsTemp={weather.main.feels_like} humidity={weather.main.humidity} pressure={weather.main.pressure} seaLevel={weather.main.sea_level} groundLevel={weather.main.grnd_level} windDeg={weather.wind.deg} windSpeed={weather.wind.speed} /> : null : null}
        </div>
    )
}
export default Container

