import React from 'react';
import { Routes, Route } from 'react-router-dom'


import HomePage from './Pages/home_page';
import Cities from './Pages/cities_page';
import getWeatherData from './weatherServices/weatherServices';

//Not complete yet
function App() {

const fetchWeather = async ()=>{
  const data = await getWeatherData('weather', {q: 'london'})
  console.log(data);
};

fetchWeather();

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cities' element={<Cities />} />

      </Routes>
    </>

  );
}

export default App;
