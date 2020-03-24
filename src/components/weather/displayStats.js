import React from 'react'

const DisplayStats = (props) => {

    return (
        <div className="weather-container">
            <div className="coords">
                <p>{props.name}</p>
                <p>{props.description}</p>
                <p>Longitude = {props.longitude}&deg;</p>
                <p>Latitude= {props.latitude}&deg;</p>
                <p>Wind Direction : {props.windDeg}&deg;</p>
                <p>Wind Speed : {props.windSpeed}&nbsp;km/hr</p>
            </div>
            <div className="other-details">
                <p>Temperature : {props.temp}&deg;C</p>
                <p>Max_temp : {props.maxTemp}&deg;C</p>
                <p>Min_temp : {props.minTemp}&deg;C</p>
                <p>Feels like : {props.feelsTemp}&deg;C</p>
                <p>Humidity : {props.humidity}%</p>
                <p>Pressure : {props.pressure}&nbsp;Pa</p>
                {props.seaLevel ? <p>Sea Level : {props.seaLevel}&nbsp;mtr</p> : null}
                {props.groundLevel ? <p>Ground Level : {props.groundLevel}&nbsp;mtr</p> : null}
            </div>
        </div>
    )
}

export default DisplayStats;