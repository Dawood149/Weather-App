import React, { useState } from 'react'

import { Layout } from '../components/Layout'
import SevenDayForecastItems from './../components/SevenDayForecast'
import Input from './../components/InputField/input field'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureThreeQuarters, faDroplet, faWind, faSun } from '@fortawesome/free-solid-svg-icons'

const HomePage = () => {
  const [weather, setWeather] = useState({}); // State to hold weather data
  console.log(weather);
  return (

    <Layout>

      <Input setWeather={setWeather} />

      {/* --------------------------------SECTION-1 */}





      {typeof weather.main !== "undefined" ? (
        <div> {/* Main div for ternary operator */}

          <div className=' color text-white absolute h-56 w-3/5 
      left-36 top-20 flex'>
            <div>
              <h1 className='text-4xl	font-bold	'>{weather.name}</h1>
              <p className='py-2'>Chances of rain</p>
              <h1 className='text-4xl absolute top-36 font-bold	'>{weather.main.temp - 273}&deg;</h1>
            </div>

            <div className='absolute end-0 top-24'>
              <h1>sun image</h1>
            </div> </div>

        </div>  /* Main div for ternary operator */
      ) : (
        ""
      )}


      {/* --------------------------------------------------SECTION-2 */}
      <div className='rounded-3xl h-52 w-3/5 absolute left-36 top-80 flex bg-slate-800 text-white'>
        <h7 className='py-3 px-3 '>TODAY'S FORECAST</h7>
        <ul className='flex items-center	justify-items-center space-x-10'>

          <li> <div>time</div> image <div>temp</div></li>
          <div className="border-2 border-white h-28 opacity-10"></div>

          <li> <div>time</div> image <div>temp</div></li>
          <div className="border-2 border-white h-28 opacity-10"></div>

          <li> <div>time</div> image <div>temp</div></li>
          <div className="border-2 border-white h-28 opacity-10"></div>

          <li> <div>time</div> image <div>temp</div></li>
          <div className="border-2 border-white h-28 opacity-10"></div>

          <li> <div>time</div> image <div>temp</div></li>
          <div className="border-2 border-white h-28 opacity-10"></div>

          <li> <div>time</div> image  <div>temp</div></li>
        </ul>
      </div>

      {/* --------------------------------------------SECTION 3 AIR CONDITIONS*/}
      <div className='rounded-3xl h-60 w-3/5 absolute left-36 top-3/4 bg-slate-800 text-white '>
        <h6 className='py-3 px-3 '>
          AIR CONDITIONS
        </h6>
        <div className='grid grid-cols-2 grid-rows-2 '>

          <div><FontAwesomeIcon icon={faTemperatureThreeQuarters} size="xl" />
            <span>Real Feel</span>
            <p className='text-3xl font-bold'>&deg;</p>
          </div>

          <div> <FontAwesomeIcon icon={faDroplet} size="xl" />
            <span>Wind</span>
            <p className='text-3xl font-bold'>2km/h</p></div>

          <div> <FontAwesomeIcon icon={faWind} size="xl" />
            <span>Chance of rain</span>
            <p className='text-3xl font-bold'>0%</p></div>

          <div> <FontAwesomeIcon icon={faSun} size="xl" />
            <span>UV Index</span>
            <p className='text-3xl font-bold'>3</p></div>

        </div>
      </div>
      {/* -----------------------------------------------------7-DAY FORECAST */}
      <div className='rounded-3xl h-auto w-96 bg-slate-800 text-white float-right mt-10 mr-16
       flex flex-col justify-center items-center		'>
        <h5 className='px-10 py-4 font-extrabold	'>7-DAY Forecast</h5>
        <SevenDayForecastItems />
      </div>

    </Layout>
  )
}

export default HomePage
