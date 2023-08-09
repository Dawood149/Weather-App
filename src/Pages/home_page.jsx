import React, { useState } from 'react'

import { Layout } from '../components/Layout'
import SevenDayForecastItems from './../components/SevenDayForecast'
import Input from './../components/InputField/input field'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureThreeQuarters, faDroplet, faWind, faSun } from '@fortawesome/free-solid-svg-icons'

const HomePage = () => {
  const [weather, setWeather] = useState({}); // State to hold weather data

  
  //console.log(weather);

  return (

    <Layout>

      <Input setWeather={setWeather} />

      {/* --------------------------------SECTION-1 */}

      {typeof weather.city !== "undefined" && typeof weather.list[0].main !== "undefined" ? (

        <div> {/* MAIN DIV FOR TERNARY OPERATOR */}

          <div className=' color text-white absolute h-56 w-3/5 
      left-36 top-20 flex'>
            <div>
              <h1 className='text-4xl	font-bold	'>{weather.city.name}</h1>
              <p className='py-2'>chances of rain</p>
              <h1 className='text-4xl absolute top-36 font-bold	'>{weather.list[0].main.temp}&deg;C</h1>
            </div>

           
            <div className='absolute end-0 top-15'>
              <img src="" alt="" />
            </div> </div>

          {/* --------------------------------------------------SECTION-2 */}

          <div className='rounded-3xl h-52 w-3/5 absolute left-36 top-80 flex bg-slate-800 text-white'>
            <h6 className='py-3 px-3 '>TODAY'S FORECAST</h6>


            <ul className='flex items-center	justify-items-center space-x-10'>
              <li> <div>{weather.list[0].dt_txt}</div> IMAGE <div>{weather.list[0].main.temp}&deg;</div></li>
              <div className="border-2 border-white h-28 opacity-10"></div>

              <li> <div>{weather.list[1].dt_txt}</div> image <div>{weather.list[1].main.temp}&deg;</div></li>
              <div className="border-2 border-white h-28 opacity-10"></div>

              <li> <div>{weather.list[2].dt_txt}</div> image <div>{weather.list[2].main.temp}&deg;</div></li>
              <div className="border-2 border-white h-28 opacity-10"></div>

              <li> <div>{weather.list[3].dt_txt}</div> image <div>{weather.list[3].main.temp}&deg;</div></li>
              <div className="border-2 border-white h-28 opacity-10"></div>

              <li> <div>{weather.list[4].dt_txt}</div> image <div>{weather.list[4].main.temp}&deg;</div></li>
              <div className="border-2 border-white h-28 opacity-10"></div>

              <li> <div>{weather.list[5].dt_txt}</div> image  <div>{weather.list[5].main.temp}&deg;</div></li>
            </ul>

          </div>

          {/* --------------------------------------------SECTION 3 AIR CONDITIONS*/}
          <div className='rounded-3xl h-60 w-3/5 absolute left-36 top-3/4 bg-slate-800 text-white '>
            <h6 className='py-3 px-3 '>
              AIR CONDITIONS
            </h6>
            <div className='grid grid-cols-2 grid-rows-2 pl-28'>

              <div><FontAwesomeIcon icon={faTemperatureThreeQuarters} size="xl" />
                <span>Real Feel</span>
                <p className='text-3xl font-bold'>{weather.list[0].main.feels_like}&deg;</p>
              </div>

              <div> <FontAwesomeIcon icon={faDroplet} size="xl" />
                <span>Wind</span>
                <p className='text-3xl font-bold'>{weather.list[0].wind.speed}km/h</p></div>

              <div className='pt-5'> <FontAwesomeIcon icon={faWind} size="xl" />
                <span>Chance of rain</span>
                <p className='text-3xl font-bold'>0%</p></div>

              <div className='pt-5'> <FontAwesomeIcon icon={faSun} size="xl" />
                <span>UV Index</span>
                <p className='text-3xl font-bold'>3</p></div>

            </div>
          </div>

          {/* -----------------------------------------------------7-DAY FORECAST */}
          <div className='rounded-3xl h-auto w-96 bg-slate-800 text-white float-right mt-10 mr-16
       flex flex-col justify-center items-center		'>
            <h5 className='px-10 py-4 font-extrabold	'>5-DAY Forecast</h5>

            <SevenDayForecastItems weatherData={weather} />
          </div>

        </div>  /* Main div for ternary operator */
      ) : (
        ""
      )}






    </Layout>

  )
}

export default HomePage
