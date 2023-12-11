import React from 'react'

const SevenDayForecastItems = ({ weatherData }) => {
    console.log(weatherData);
    return (
        <>
            <div className='inline-flex py-8'>
                <h6 className='px-12 font-extrabold'>Today</h6>
                <img src={`https://openweathermap.org/img/wn/${weatherData.list[4].weather[0].icon}.png`} alt="" />
                <p className='font-bold	'>{weatherData.list[0].weather[0].main}</p>
                <p className='px-12'>{weatherData.list[0].main.temp_max}/
                    {weatherData.list[0].main.temp_min} </p>
            </div>
            <hr className='w-72 ' />

            <div className='flex py-8'>
                <h6 className='px-12 font-extrabold'>Tue</h6>
                <img src={`https://openweathermap.org/img/wn/${weatherData.list[6].weather[0].icon}.png`} alt="" />
                <p className='font-bold	'>{weatherData.list[6].weather[0].main}</p>
                <p className='px-12'>{weatherData.list[6].main.temp_max}/
                    {weatherData.list[6].main.temp_min} </p>            </div>
            <hr className='w-72 ' />

            <div className='flex py-8'>
                <h6 className='px-12 font-extrabold'>Wed</h6>
                <img src={`https://openweathermap.org/img/wn/${weatherData.list[12].weather[0].icon}.png`} alt="" />
                <p className='font-bold	'>{weatherData.list[12].weather[0].main}</p>
                <p className='px-12'>{weatherData.list[12].main.temp_max}/
                    {weatherData.list[12].main.temp_min} </p>
            </div> <hr className='w-72 ' />

            <div className='flex py-8'>
                <h6 className='px-12 font-extrabold'>Thu</h6>
                <img src={`https://openweathermap.org/img/wn/${weatherData.list[18].weather[0].icon}.png`} alt="" />
                <p className='font-bold	'>{weatherData.list[18].weather[0].main}</p>
                <p className='px-12'>{weatherData.list[18].main.temp_max}/
                    {weatherData.list[18].main.temp_min} </p>
            </div>
            <hr className='w-72 ' />

            <div className='flex py-8'>
                <h6 className='px-12 font-extrabold'>Fri</h6>
                <img src={`https://openweathermap.org/img/wn/${weatherData.list[24].weather[0].icon}.png`} alt="" />
                <p className='font-bold	'>{weatherData.list[24].weather[0].main}</p>
                <p className='px-12'>{weatherData.list[24].main.temp_max}/
                    {weatherData.list[24].main.temp_min} </p>
            </div>
            <hr className='w-72 ' />

            <div className='flex py-8'>
                <h6 className='px-12 font-extrabold'>Sat</h6>
                <img src={`https://openweathermap.org/img/wn/${weatherData.list[30].weather[0].icon}.png`} alt="" />
                <p className='font-bold	'>{weatherData.list[30].weather[0].main}</p>
                <p className='px-12'>{weatherData.list[30].main.temp_max}/
                    {weatherData.list[30].main.temp_min} </p>
            </div>
        </>

    )
}

export default SevenDayForecastItems