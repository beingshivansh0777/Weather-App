import React, { useRef, useState, useEffect } from 'react'
import { FaSearch } from "react-icons/fa";
import clear_icon from '../assets/clear.png'
import humidity_icon from '../assets/humidity.png'
import wind_icon from '../assets/wind.png'
import snow_icon from '../assets/snow.png'
import rain_icon from '../assets/rain.png'
import drizzle_icon from '../assets/drizzle.png'
import cloud_icon from '../assets/cloud.png'

const Weather = () => {
  const inputRef = useRef()
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon
  }

  const getBackground = (icon) => {
    if (!icon) return "bg-gradient-to-br from-[#2f4680] to-[#500ae4]";
    if (icon === clear_icon) return "bg-gradient-to-br from-[#fefcea] to-[#f1da36]";
    if (icon === rain_icon || icon === drizzle_icon) return "bg-gradient-to-br from-[#2980b9] to-[#6dd5fa]";
    if (icon === snow_icon) return "bg-gradient-to-br from-[#bdc3c7] to-[#2c3e50]";
    if (icon === cloud_icon) return "bg-gradient-to-br from-[#83a4d4] to-[#b6fbff]";
    return "bg-gradient-to-br from-[#2f4680] to-[#500ae4]";
  }

  const getToday = () => {
    const now = new Date()
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return now.toLocaleDateString(undefined, options)
  }

  const search = async (city) => {
    if (!city) {
      alert("Please Enter City Name")
      return
    }
    setLoading(true)
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
      const response = await fetch(url)
      const data = await response.json()
      if (!response.ok) {
        alert(data.message)
        setLoading(false)
        return
      }

      const icon = allIcons[data.weather[0].icon] || clear_icon;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        feelsLike: Math.floor(data.main.feels_like),
        pressure: data.main.pressure,
        location: data.name,
        icon: icon,
        description: data.weather[0].description,
      })
    } catch (error) {
      setWeatherData(null)
      console.error("Error in fetching weather data", error)
    }
    setLoading(false)
  }

  useEffect(() => {
    search("London")
  }, [])

  return (
    <div className={`place-self-end right-20 p-20 rounded-lg flex flex-col w-160  h-160 gap-4 items-end relative -top-[220px] ${getBackground(weatherData?.icon)}`}>
      <div className="flex items-center gap-3 ">
        <input
          ref={inputRef}
          type="text"
          placeholder='Enter City Name '
          onKeyDown={(e) => e.key === "Enter" && search(inputRef.current.value)}
          className="h-12 w-64 rounded-full pl-6 text-gray-600 bg-[#ebfffc] text-lg outline-none border-none"
        />
        <FaSearch className="cursor-pointer" onClick={() => search(inputRef.current.value)} />
      </div>

      {loading && <p className="text-white mt-5">Loading...</p>}

      {weatherData && !loading && (
        <>
          <p className="text-white mt-5">{getToday()}</p>

          <img src={weatherData.icon} alt={weatherData.description} className="w-[150px] my-7" />
          <p className="text-white text-[80px] leading-none">{weatherData.temperature}℃</p>
          <p className="text-white text-4xl">{weatherData.location}</p>
          <p className="text-white capitalize">{weatherData.description}</p>

          <div className="w-full mt-10 text-white flex justify-between">
            <div className="flex items-start gap-3 text-xl">
              <img src={humidity_icon} alt="humidity" className="w-6 mt-2" />
              <div>
                <p>{weatherData.humidity}%</p>
                <span className="block text-base">Humidity</span>
              </div>
            </div>
            <div className="flex items-start gap-3 text-xl">
              <img src={wind_icon} alt="wind speed" className="w-6 mt-2" />
              <div>
                <p>{weatherData.windSpeed} m/s</p>
                <span className="block text-base">Wind Speed</span>
              </div>
            </div>
            <div className="flex items-start gap-3 text-xl">
              <img src={cloud_icon} alt="feels like" className="w-6 mt-2" />
              <div>
                <p>{weatherData.feelsLike}℃</p>
                <span className="block text-base">Feels Like</span>
              </div>
            </div>
            <div className="flex items-start gap-3 text-xl">
              <img src={drizzle_icon} alt="pressure" className="w-6 mt-2" />
              <div>
                <p>{weatherData.pressure} hPa</p>
                <span className="block text-base">Pressure</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Weather