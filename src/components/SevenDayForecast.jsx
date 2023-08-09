import React from 'react'

const SevenDayForecastItems = ({ weatherData }) => {
    console.log(weatherData);
    return (
        <>
            <div className='flex py-8'>
                <h6 className='px-12 font-extrabold'>Today</h6>
                <p>image</p>   <p>{weatherData.list[0].weather[0].main}</p>        <p className='px-12'>{weatherData.list[0].main.temp_max}/
                {weatherData.list[0].main.temp_min} </p>
            </div>
            <hr className='w-72 ' />

            <div className='flex py-8'>
                <h6 className='px-12 font-extrabold'>Tue</h6>
                <p>image</p>   <p>Sunny</p>        <p className='px-12'>max/min</p>
            </div>
            <hr className='w-72 ' />

            <div className='flex py-8'>
                <h6 className='px-12 font-extrabold'>Wed</h6>
                <p>image</p>   <p>Sunny</p>        <p className='px-12'>max/min</p>
            </div> <hr className='w-72 ' />

            <div className='flex py-8'>
                <h6 className='px-12 font-extrabold'>Thu</h6>
                <p>image</p>   <p>Sunny</p>        <p className='px-12'>max/min</p>
            </div>
            <hr className='w-72 ' />

            <div className='flex py-8'>
                <h6 className='px-12 font-extrabold'>Fri</h6>
                <p>image</p>   <p>Sunny</p>        <p className='px-12'>max/min</p>
            </div>
            <hr className='w-72 ' />

            <div className='flex py-8'>
                <h6 className='px-12 font-extrabold'>Sat</h6>
                <p>image</p>   <p>Sunny</p>        <p className='px-12'>max/min</p>
            </div>
        </>

    )
}

export default SevenDayForecastItems