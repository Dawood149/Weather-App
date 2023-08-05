import React from 'react'
import { Layout } from '../components/Layout'
import Today_Fore_Cities from '../components/Today_Fore_Cities'
import Three_DayFore_Cities from '../components/Three_DayFore_Cities'
import Input from './../components/InputField/input field'



const Cities = () => {
  return (
    <Layout>
      <Input/>

      <div className='text-white float-right mt-10 mr-16 h-auto'>
        <div className='h-auto w-96 text-white flex'>

          <div >
            <h1 className='text-4xl	font-bold w-fit '>CityName</h1>
            <p className='py-2  w-fit'>chance of rain</p>
            <h1 className='text-4xl font-bold	pt-20  w-fit '>31&deg;</h1>
          </div>

          <div className='h-fit mt-20 right-0 '>
            <p>Sun Image</p>
          </div>

        </div>

        <hr className='w-72' />

        <Today_Fore_Cities />

        <hr className='w-72' />
        <Three_DayFore_Cities/>
      </div>


    </Layout>
  )
}

export default Cities