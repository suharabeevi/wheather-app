import React from 'react'
import './weatherapp.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import Wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'



const Wheatherapp = () =>{
  return (
    <div className='container'>
      <div className='top_bar'>
<input type='text' className='cityInput' placeholder='search'/>
<div className="search_icon">
  <img src={search_icon} alt="" />
</div>
      </div>
      <div className="wheather-image">
        <img src={cloud_icon} alt="" />
      </div>
      <div className="wheather-temp">24 °C</div>
      <div className="wheather-location">London</div>
      <div className="data-conatiner">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={Wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">18 km/hr</div>
            <div className="text">wind speed</div>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Wheatherapp
