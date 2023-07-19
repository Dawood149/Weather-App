import React from 'react'
import { Layout } from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureThreeQuarters, faDroplet, faWind, faSun } from '@fortawesome/free-solid-svg-icons'

const HomePage = () => {
  return (
    <Layout>
      {/* --------------------------------SECTION-1 */}
      <div className=' color text-white absolute h-56 w-3/5 
      left-36 top-20 flex'>

        <div>
          <h1 className='text-4xl	font-bold	'>CityName</h1>
          <p className='py-2'>chance of rain</p>
          <h1 className='text-4xl absolute top-36 font-bold	'>31&deg;</h1>
        </div>

        <div className='absolute end-0 top-24'>
          <h1>sun image</h1>
        </div>
      </div>
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
            <p className='text-3xl font-bold'>30&deg;</p>
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
<div className='rounded-3xl min-h- w-96 bg-slate-800 text-white border-2 float-right'>
  
</div>

    </Layout>
  )
}

export default HomePage
