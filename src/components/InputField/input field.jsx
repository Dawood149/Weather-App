import React from 'react'
import { useState } from 'react';

const Input = ({ setWeather }) => {
    const api = {
        key: '26fc6cfe7008f0eea4d290cb5b459a58',
        base: "https://api.openweathermap.org/data/2.5/",
    }
    const [search, setSearch] = useState("");
    /* const [weather, setWeather]=useState({}); */
    const searchPressed = () => {
        fetch(`${api.base}forecast?q=${search}&units=metric&appid=${api.key}`)
            .then(res => res.json())
            .then(results => {
                setWeather(results)
                
            });
                
            // ${api.base}weather?q=${search}&units=metrics&&APPID=${api.key} // one you were using before

    }
    return (

        <div className="absolute left-28 w-full">
            <input className='border rounded-lg h-10 w-3/5 px-2 bg-slate-800 border-none text-white' type="text"
                onChange={(e) => setSearch(e.target.value)} placeholder='Search for cities' />
            <button className='text-white' onClick={searchPressed}>Search</button>
        </div>
    )
}

export default Input;