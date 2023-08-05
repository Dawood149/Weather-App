import React from 'react'

const Today_Fore_Cities = () => {
  return (
    <div className='h-52 mt-8 text-white'>
      <h7 className='py-3 h-14'>TODAY'S FORECAST</h7>
      <ul className='flex items-center justify-items-center space-x-10 absolute mt-10'>

        <li> <div>time</div> image <div>temp</div></li>
        <div className="border-2 border-white h-28 opacity-10"></div>

        <li> <div>time</div> image <div>temp</div></li>
        <div className="border-2 border-white h-28 opacity-10"></div>

        <li> <div>time</div> image <div>temp</div></li>

      </ul>
    </div>
  )
}

export default Today_Fore_Cities