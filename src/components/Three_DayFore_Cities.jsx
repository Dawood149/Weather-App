import React from 'react'
import SevenDayForecastItems from '../components/SevenDayForecast'

const Three_DayFore_Cities = () => {
  return (
    
    <div className='rounded-3xl h-auto w-96 text-white pr-20
    flex flex-col justify-center items-center'>
     <h5 className='px-10 py-4 font-extrabold'>3-DAY Forecast</h5>
     <div className='flex py-8'>
                <h6 className='px-12 font-extrabold'>Today</h6>
                <p>image</p>   <p>Sunny</p>        <p className='px-12'>max/min</p>
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
            </div>
   </div>
   
   )
}

export default Three_DayFore_Cities