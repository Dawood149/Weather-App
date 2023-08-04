import React from 'react';
import { Routes, Route } from 'react-router-dom'


import HomePage from './Pages/home_page';
import Cities from './Pages/cities_page';

//Not complete yet
function App() {

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
