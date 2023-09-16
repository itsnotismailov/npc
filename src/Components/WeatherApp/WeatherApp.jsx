import React, { useState } from 'react';
import './WeatherApp.css'

import search from '../Assets/search.png'
import cloud from '../Assets/cloud.png'
import clear from '../Assets/clear.png'
import rain from '../Assets/rain.png'
import humidity from '../Assets/humidity.png'
import snow from '../Assets/snow.png'
import wind from '../Assets/wind.png'
import drizzle from '../Assets/drizzle.png'

const WeatherApp = () => {

    let api_key = '9186b8b155f7eaa159152f141ebf239f'

    const [wicon,setWicon] = useState(cloud)
    
    const searchFilter = async () => {
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value==="")
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

        let response = await fetch(url)
        let data = await response.json()
        const humidity = document.getElementsByClassName("humidity-percent")
        const wind = document.getElementsByClassName("wind-rate")
        const temrature = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")

        humidity[0].innerHTML = data.main.humidity+"%"
        wind[0].innerHTML = data.wind.speed+"km/h"
        temrature[0].innerHTML = data.main.temp+"°c"
        location[0].innerHTML = data.name

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
        {
            setWicon(clear)
        }
        else if (data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
        {
            setWicon(cloud)
        }
        else if (data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
        {
            setWicon(drizzle)
        }
        else if (data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
        {
            setWicon(drizzle)
        }
        else if (data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
        {
            setWicon(rain)
        }
        else if (data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
        {
            setWicon(cloud)
        }
        else if (data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
        {
            setWicon(snow)
        }

    }
    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder='Search' />
                <div className="search" onClick={() => {searchFilter()}}>
                    <img src={search} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt="" />
            </div>
            <div className="weather-temp">14°c</div>
            <div className="weather-location">Kara-Balta</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity} alt="" className="icon" />
                     <div className="data">
                        <div className="humidity-percent">63%</div>
                        <div className="text">Humidity</div>
                     </div>
                </div>
                <div className="element">
                    <img src={wind} alt="" className="icon" />
                     <div className="data">
                        <div className="wind-rate">21 km/h</div>
                        <div className="text">Wind</div>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherApp;